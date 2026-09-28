import articles from "../src/config/blog-data.json" with { type: "json" };

const base = process.argv[2] || "http://localhost:3000";
const paths = ["/blog", "/sitemap.xml", "/robots.txt", ...articles.map((article) => `/blog/${article.slug}`)];
const failures = [];

for (const path of paths) {
  const res = await fetch(`${base}${path}`);
  const text = await res.text();
  console.log(`${res.status} ${path}`);
  if (!res.ok) failures.push(`${path} returned ${res.status}`);

  if (path.startsWith("/blog/")) {
    const slug = path.split("/").pop();
    const article = articles.find((item) => item.slug === slug);
    if (!text.includes(`<h1>${escapeHtml(article.title)}</h1>`)) failures.push(`${path} missing h1`);
    if (!text.includes(`rel="canonical" href="${base}${path}"`)) failures.push(`${path} missing self canonical`);
    if (!text.includes("application/ld+json")) failures.push(`${path} missing JSON-LD`);
    if (!text.includes('id="faq"')) failures.push(`${path} missing visible FAQ section`);
    if (!text.includes(article.images.hero.src)) failures.push(`${path} missing hero image path`);
    for (const related of article.related) {
      if (!text.includes(`/blog/${related}`)) failures.push(`${path} missing related/internal link to ${related}`);
    }
  }

  if (path === "/sitemap.xml") {
    for (const article of articles) {
      if (!text.includes(`${base}/blog/${article.slug}`)) failures.push(`sitemap missing ${article.slug}`);
    }
  }

  if (path === "/robots.txt" && !text.includes(`${base}/sitemap.xml`)) {
    failures.push("robots missing sitemap");
  }
}

if (failures.length) {
  console.error("\nFailures:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
