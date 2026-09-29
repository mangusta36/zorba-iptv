import { Button } from "@/components/button";
import { trialMessage, whatsappUrl } from "@/lib/whatsapp";

export const metadata = {
  title: "Zorba IPTV Free Trial",
  description: "Request a Zorba IPTV free trial and tell Zorba TV which device you plan to use.",
  alternates: { canonical: "/free-trial" },
  openGraph: { url: "/free-trial" }
};

export default function FreeTrialPage() {
  return <section className="container-x page-section page-split min-h-[680px]">
    <div><p className="page-label">Zorba IPTV free trial</p><h1 className="page-title">See how it works on your screen.</h1><p className="page-lead mt-6">Tell Zorba IPTV which device you use and send a trial request. Availability is subject to review.</p></div>
    <div className="surface rounded-card p-5 sm:p-6">
      <p className="page-label">Request direct</p>
      <h2 className="section-title">Request your trial via WhatsApp.</h2>
      <p className="page-lead mt-3">Send a quick message and Zorba IPTV support can help you get started.</p>
      <div className="mt-6">
        <Button href={whatsappUrl(trialMessage("Zorba IPTV Free Trial page"))}>Request Trial on WhatsApp</Button>
      </div>
    </div>
  </section>;
}
