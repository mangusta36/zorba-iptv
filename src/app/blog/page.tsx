import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { blogPosts } from "@/config/blog";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Streaming & IPTV Guides",
  description: "US-focused guides from Zorba IPTV for IPTV setup, streaming devices, player apps, troubleshooting, and sports viewing.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Streaming & IPTV Guides",
    description: "Practical IPTV setup, device, player, troubleshooting, and sports viewing guides from Zorba TV.",
    type: "website",
    siteName: siteConfig.brand.formalName,
    url: `${siteConfig.brand.domain.replace(/\/$/, "")}/blog`
  }
};

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="From Zorba IPTV" title="Streaming & IPTV Guides" text="Practical setup, device, player, troubleshooting, and sports viewing guides from Zorba IPTV for US streamers." />
      <Section>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card surface" key={post.slug}>
              <Link href={`/blog/${post.slug}`} aria-label={post.title} className="blog-card-image">
                <Image src={post.image} alt={post.imageAlt} width={1200} height={630} sizes="(max-width: 767px) 100vw, 33vw" />
              </Link>
              <div className="blog-card-body">
                <p className="blog-meta">{post.category} · {formatDate(post.publishedAt)} · {post.readingTime} min read</p>
                <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                <p>{post.description}</p>
                <Link className="text-link" href={`/blog/${post.slug}`}>Read guide <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(value));
}
