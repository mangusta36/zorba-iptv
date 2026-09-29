import { siteConfig } from "@/config/site";

export function getSiteOrigin() {
  return siteConfig.brand.domain.replace(/\/$/, "");
}
