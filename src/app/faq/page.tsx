import { FaqAccordion } from "@/components/faq-accordion";
import { faqs } from "@/config/site";

export const metadata = {
  title: "Zorba IPTV FAQ",
  description: "Answers about Zorba IPTV plans, Zorba TV setup, compatible devices, trials and support."
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return <section className="container-x min-h-[70vh] page-section faq-page-section">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <div><p className="page-label">Zorba IPTV help</p><h1 className="page-title">Good questions deserve clear answers.</h1><p className="page-lead mt-5">Find answers about Zorba TV devices, setup, subscriptions and support.</p></div>
    <FaqAccordion items={faqs} />
  </section>;
}
