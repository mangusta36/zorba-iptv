import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const metadata = { title: "Privacy policy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" text="This policy is being prepared." />
      <Section>
        <p className="max-w-2xl leading-7 text-mist">The full privacy policy will be published here before account and payment services are enabled.</p>
      </Section>
    </>
  );
}
