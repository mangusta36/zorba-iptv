import type { MetadataRoute } from "next";
import { blogArticles } from "@/config/blog";
import { getSiteOrigin } from "@/lib/site-origin";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = await getSiteOrigin();
  const staticRoutes = [
    "",
    "/pricing",
    "/reseller",
    "/free-trial",
    "/faq",
    "/contact",
    "/about",
    "/checkout",
    "/checkout/success",
    "/checkout/cancel",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
    "/blog"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${origin}${route}`,
      lastModified: new Date()
    })),
    ...blogArticles.map((post) => ({
      url: `${origin}/blog/${post.slug}`,
      lastModified: new Date(post.modifiedAt)
    }))
  ];
}
