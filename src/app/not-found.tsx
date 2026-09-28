import { PageHero } from "@/components/page-hero";

export default function NotFound() {
  return <PageHero eyebrow="404" title="Page not found" text="The page you requested does not exist." cta={{ label: "Go Home", href: "/" }} />;
}
