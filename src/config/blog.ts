import articles from "./blog-data.json";

export type BlogImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type BlogLink = {
  label: string;
  href: string;
};

export type RichTextPart = string | BlogLink;

export type BlogTable = {
  type: "table";
  caption: string;
  headers: string[];
  rows: string[][];
};

export type BlogList = {
  type: "list";
  title: string;
  items: string[];
};

export type BlogCallout = {
  type: "callout";
  title: string;
  text: string;
  variant: "note" | "warning";
};

export type BlogRichParagraph = {
  type: "rich";
  parts: RichTextPart[];
};

export type BlogBlock = string | BlogTable | BlogList | BlogCallout | BlogRichParagraph;

export type BlogSection = {
  id: string;
  title: string;
  blocks: BlogBlock[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogSource = {
  label: string;
  url: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  category: string;
  primaryKeyword: string;
  secondaryIntent: string;
  intro: BlogBlock[];
  images: {
    hero: BlogImage;
    inline: BlogImage[];
  };
  sections: BlogSection[];
  faq: BlogFaq[];
  sources: BlogSource[];
  related: string[];
  publishedAt: string;
  modifiedAt: string;
  verifiedDate: string;
  author: string;
  readingTime: number;
};

export const blogArticles = articles as BlogArticle[];

export const blogPosts = blogArticles.map((article) => ({
  slug: article.slug,
  title: article.title,
  description: article.description,
  publishedAt: article.publishedAt,
  image: article.images.hero.src,
  imageAlt: article.images.hero.alt,
  category: article.category,
  readingTime: article.readingTime
}));

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: BlogArticle) {
  return article.related
    .map((slug) => getBlogArticle(slug))
    .filter((item): item is BlogArticle => Boolean(item));
}
