import { headers } from "next/headers";
import { siteConfig } from "@/config/site";

export async function getSiteOrigin() {
  if (siteConfig.brand.domain) return siteConfig.brand.domain.replace(/\/$/, "");
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");
  return `${protocol}://${host}`;
}
