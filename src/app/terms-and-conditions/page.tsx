import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const metadata = { title: "Terms and conditions" };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms and Conditions" text="These terms are being prepared." />
      <Section>
        <p className="max-w-2xl leading-7 text-mist">Full subscription terms will be published here before online orders are enabled.</p>
      </Section>
    </>
  );
}
