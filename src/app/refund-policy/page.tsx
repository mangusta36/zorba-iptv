import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const metadata = {
  title: "Refund policy",
  alternates: { canonical: "/refund-policy" },
  openGraph: { url: "/refund-policy" }
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Refund Policy" text="This policy is being prepared." />
      <Section>
        <p className="max-w-2xl leading-7 text-mist">Refund and cancellation terms will be published here before online orders are enabled.</p>
      </Section>
    </>
  );
}
