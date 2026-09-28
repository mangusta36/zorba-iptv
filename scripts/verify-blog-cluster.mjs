import { existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import articles from "../src/config/blog-data.json" with { type: "json" };

const minimumWords = 2500;
const routes = new Set(["/", "/blog", "/pricing", "/faq", "/about", "/contact", "/free-trial"]);
const slugs = new Set();
const paragraphs = new Map();
const rows = [];
const errors = [];

function collectText(value, out = []) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((item) => collectText(item, out));
  else if (value && typeof value === "object") {
    if ("label" in value && "href" in value) out.push(value.label);
    else Object.values(value).forEach((item) => collectText(item, out));
  }
  return out;
}

for (const article of articles) {
  if (slugs.has(article.slug)) errors.push(`Duplicate slug: ${article.slug}`);
  slugs.add(article.slug);
  routes.add(`/blog/${article.slug}`);
}

for (const article of articles) {
  const text = collectText([
    article.title,
    article.description,
    article.intro,
    article.sections,
    article.faq,
    article.sources.map((source) => source.label),
    article.related
  ]).join(" ");
  const words = (text.match(/[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)*/g) || []).length;
  const pass = words >= minimumWords;
  rows.push({ title: article.title, slug: article.slug, words, pass });
  if (!pass) errors.push(`${article.slug} has ${words} visible words`);

  const imagePaths = [article.images.hero, ...article.images.inline].map((image) => image.src);
  for (const src of imagePaths) {
    if (!existsSync(join(process.cwd(), "public", src))) errors.push(`Missing image: ${src}`);
  }

  for (const block of article.intro) checkLinks(block, article.slug);
  for (const section of article.sections) section.blocks.forEach((block) => checkLinks(block, article.slug));

  for (const para of collectParagraphs(article)) {
    const normalized = para.toLowerCase().replace(/\s+/g, " ").trim();
    if (normalized.length > 180) {
      const owners = paragraphs.get(normalized) || [];
      owners.push(article.slug);
      paragraphs.set(normalized, owners);
    }
  }
}

for (const [paragraph, owners] of paragraphs) {
  const uniqueOwners = [...new Set(owners)];
  if (uniqueOwners.length > 1) {
    errors.push(`Repeated long paragraph in ${uniqueOwners.join(", ")}: ${paragraph.slice(0, 90)}...`);
  }
}

function checkLinks(block, slug) {
  if (!block || typeof block !== "object") return;
  if (block.type === "rich") {
    for (const part of block.parts) {
      if (part && typeof part === "object" && part.href.startsWith("/") && !routes.has(part.href)) {
        errors.push(`Dead internal link in ${slug}: ${part.href}`);
      }
    }
  }
}

function collectParagraphs(article) {
  const found = [];
  for (const block of article.intro) pushBlock(block, found);
  for (const section of article.sections) section.blocks.forEach((block) => pushBlock(block, found));
  article.faq.forEach((item) => found.push(item.answer));
  return found;
}

function pushBlock(block, found) {
  if (typeof block === "string") found.push(block);
  else if (block.type === "rich") found.push(collectText(block.parts).join(""));
  else if (block.type === "callout") found.push(`${block.title} ${block.text}`);
}

const markdown = [
  "| Article | Slug | Visible Words | Pass/Fail |",
  "| --- | --- | ---: | --- |",
  ...rows.map((row) => `| ${row.title} | ${row.slug} | ${row.words} | ${row.pass ? "PASS" : "FAIL"} |`)
].join("\n");

console.log(markdown);
if (errors.length) {
  console.error("\nErrors:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  writeFileSync("blog-verification-results.md", `${markdown}\n`);
}
