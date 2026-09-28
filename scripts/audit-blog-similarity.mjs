import articles from "../src/config/blog-data.json" with { type: "json" };

const threshold = Number(process.argv[2] || 0.8);
const minWords = Number(process.argv[3] || 35);

function collectParagraphs(article) {
  const paragraphs = [];
  const push = (text, section = "intro") => {
    if (!text) return;
    const words = wordsOf(text);
    if (words.length >= minWords) paragraphs.push({ slug: article.slug, section, text, words });
  };
  const blockText = (block) => {
    if (typeof block === "string") return block;
    if (block.type === "rich") return block.parts.map((part) => typeof part === "string" ? part : part.label).join("");
    if (block.type === "callout") return `${block.title}. ${block.text}`;
    return "";
  };
  article.intro.forEach((block) => push(blockText(block), "intro"));
  article.sections.forEach((section) => {
    section.blocks.forEach((block) => push(blockText(block), section.title));
  });
  article.faq.forEach((faq) => push(faq.answer, "FAQ"));
  return paragraphs;
}

function wordsOf(text) {
  return text.toLowerCase().replace(/https?:\/\/\S+/g, " ").match(/[a-z0-9]+(?:['-][a-z0-9]+)?/g) || [];
}

function shingles(words, size = 5) {
  const set = new Set();
  for (let i = 0; i <= words.length - size; i++) set.add(words.slice(i, i + size).join(" "));
  return set;
}

function jaccard(a, b) {
  let intersection = 0;
  for (const item of a) if (b.has(item)) intersection++;
  const union = a.size + b.size - intersection;
  return union ? intersection / union : 0;
}

function opening(text) {
  return (text.match(/^\s*([^.!?]+[.!?])/)?.[1] || text.slice(0, 90)).trim();
}

const paragraphs = articles.flatMap(collectParagraphs).map((item) => ({ ...item, shingles: shingles(item.words) }));
const matches = [];

for (let i = 0; i < paragraphs.length; i++) {
  for (let j = i + 1; j < paragraphs.length; j++) {
    const a = paragraphs[i];
    const b = paragraphs[j];
    if (a.slug === b.slug) continue;
    const score = jaccard(a.shingles, b.shingles);
    if (score >= threshold) matches.push({ score, a, b });
  }
}

const sectionGroups = new Map();
for (const article of articles) {
  const key = article.sections.map((section) => section.title).join(" | ");
  const group = sectionGroups.get(key) || [];
  group.push(article.slug);
  sectionGroups.set(key, group);
}

const openingGroups = new Map();
for (const para of paragraphs) {
  const key = opening(para.text).toLowerCase().replace(/\s+/g, " ");
  const group = openingGroups.get(key) || [];
  group.push(`${para.slug} :: ${para.section}`);
  openingGroups.set(key, group);
}

console.log(`Near-duplicate paragraph matches >= ${threshold}: ${matches.length}`);
for (const match of matches.slice(0, 80)) {
  console.log(`\n${match.score.toFixed(2)} :: ${match.a.slug} [${match.a.section}] <=> ${match.b.slug} [${match.b.section}]`);
  console.log(`A: ${match.a.text.slice(0, 220).replace(/\s+/g, " ")}...`);
  console.log(`B: ${match.b.text.slice(0, 220).replace(/\s+/g, " ")}...`);
}

console.log("\nRepeated full section architectures:");
for (const [key, group] of sectionGroups) {
  if (group.length > 1) console.log(`- ${group.length} articles: ${group.join(", ")}\n  ${key}`);
}

console.log("\nRepeated paragraph openings:");
let repeatedOpenings = 0;
for (const [key, group] of openingGroups) {
  if (group.length > 1) {
    repeatedOpenings++;
    if (repeatedOpenings <= 40) console.log(`- ${group.length}x "${key}" :: ${group.join(" | ")}`);
  }
}

if (matches.length) process.exitCode = 1;
