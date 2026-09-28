import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogArticles, getBlogArticle, getRelatedArticles, type BlogArticle, type BlogBlock, type RichTextPart } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { getSiteOrigin } from "@/lib/site-origin";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogArticles.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};

  const origin = await getSiteOrigin();
  const url = `${origin}/blog/${article.slug}`;

  return {
    title: article.seoTitle,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.ogTitle,
      description: article.ogDescription,
      type: "article",
      url,
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt,
      images: [
        {
          url: article.images.hero.src,
          width: article.images.hero.width,
          height: article.images.hero.height,
          alt: article.images.hero.alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: article.ogTitle,
      description: article.ogDescription,
      images: [article.images.hero.src]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  const origin = await getSiteOrigin();
  const url = `${origin}/blog/${article.slug}`;
  const related = getRelatedArticles(article);
  const jsonLd = buildJsonLd(article, url, origin);

  return (
    <article className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="container-x">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog">Blog</Link>
          <span aria-hidden="true">/</span>
          <span>{article.title}</span>
        </nav>

        <header className="article-hero">
          <p className="blog-meta">{article.category} · Published {formatDate(article.publishedAt)} · Updated {formatDate(article.modifiedAt)} · {article.readingTime} min read</p>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <Image
            src={article.images.hero.src}
            alt={article.images.hero.alt}
            width={article.images.hero.width}
            height={article.images.hero.height}
            priority
            sizes="(max-width: 767px) 100vw, 1200px"
            className="article-hero-image"
          />
        </header>

        <div className="article-layout">
          <aside className="article-toc" aria-labelledby="toc-title">
            <h2 id="toc-title">Contents</h2>
            <ol>
              {article.sections.map((section) => (
                <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
              ))}
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#sources">Sources</a></li>
            </ol>
          </aside>

          <div className="article-body">
            <div className="article-intro">
              {article.intro.map((block, index) => <Block block={block} key={index} />)}
            </div>

            {article.sections.map((section, index) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.blocks.map((block, blockIndex) => <Block block={block} key={blockIndex} />)}
                {getInlineImage(article, index) ? (
                  <Image
                    src={getInlineImage(article, index)!.src}
                    alt={getInlineImage(article, index)!.alt}
                    width={getInlineImage(article, index)!.width}
                    height={getInlineImage(article, index)!.height}
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, 800px"
                    className="article-inline-image"
                  />
                ) : null}
              </section>
            ))}

            <section id="faq" className="article-faq">
              <h2>FAQ</h2>
              {article.faq.map((item) => (
                <div key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </section>

            <section id="sources" className="article-sources">
              <h2>Research Sources</h2>
              <p>These sources were used to verify time-sensitive sports details, app behavior, device platform constraints, and compatibility claims.</p>
              <ul>
                {article.sources.map((item) => (
                  <li key={item.url}><a href={item.url} rel="noopener noreferrer" target="_blank">{item.label}</a></li>
                ))}
              </ul>
            </section>

            {related.length ? (
              <section className="article-related" aria-labelledby="related-title">
                <h2 id="related-title">Related Guides</h2>
                <div className="related-grid">
                  {related.map((item) => (
                    <Link href={`/blog/${item.slug}`} key={item.slug} className="related-card surface">
                      <span>{item.category}</span>
                      <strong>{item.title}</strong>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function getInlineImage(article: BlogArticle, sectionIndex: number) {
  if (sectionIndex === 1) return article.images.inline[0];
  if (sectionIndex === 3) return article.images.inline[1];
  return undefined;
}

function Block({ block }: { block: BlogBlock }) {
  if (typeof block === "string") return <p>{block}</p>;

  if (block.type === "rich") {
    return <p>{block.parts.map((part, index) => <RichPart part={part} key={index} />)}</p>;
  }

  if (block.type === "list") {
    return (
      <div className="article-list">
        <h3>{block.title}</h3>
        <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    );
  }

  if (block.type === "callout") {
    return <aside className={`article-callout ${block.variant}`}><strong>{block.title}</strong><p>{block.text}</p></aside>;
  }

  return (
    <div className="article-table-wrap">
      <table>
        <caption>{block.caption}</caption>
        <thead>
          <tr>{block.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row.join("-")}>{row.map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RichPart({ part }: { part: RichTextPart }) {
  if (typeof part === "string") return part;
  const isExternal = part.href.startsWith("http");
  if (isExternal) return <a href={part.href} rel="noopener noreferrer" target="_blank">{part.label}</a>;
  return <Link href={part.href}>{part.label}</Link>;
}

function buildJsonLd(article: BlogArticle, url: string, origin: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      datePublished: article.publishedAt,
      dateModified: article.modifiedAt,
      author: { "@type": "Organization", name: article.author },
      publisher: {
        "@type": "Organization",
        name: siteConfig.brand.formalName,
        alternateName: [siteConfig.brand.secondaryName, ...siteConfig.brand.compactNames, siteConfig.brand.name],
        url: origin
      },
      mainEntityOfPage: url,
      image: `${origin}${article.images.hero.src}`
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: origin },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${origin}/blog` },
        { "@type": "ListItem", position: 3, name: article.title, item: url }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
  ];
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(value));
}
