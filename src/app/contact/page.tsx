import { RequestForm } from "@/components/request-form";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact Zorba IPTV Support",
  description: "Contact Zorba IPTV support for questions about plans, setup, trials or your Zorba TV account."
};

export default function ContactPage() {
  return <section className="container-x page-section page-split min-h-[680px]">
    <div><p className="page-label">Contact Zorba IPTV</p><h1 className="page-title">Let&apos;s talk.</h1><p className="page-lead mt-6">Ask Zorba IPTV support about plans, setup or your account. Send us a message and we&apos;ll get back to you when contact services are available.</p>
      {siteConfig.contact.email && <p className="mt-10 border-t border-white/10 pt-5"><span className="block text-xs uppercase text-mist">Email</span><a className="mt-2 block font-semibold hover:text-ember" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></p>}
      {siteConfig.contact.whatsapp && <p className="mt-6 border-t border-white/10 pt-5"><span className="block text-xs uppercase text-mist">WhatsApp</span><span className="mt-2 block font-semibold">{siteConfig.contact.whatsapp}</span></p>}
    </div>
    <RequestForm kind="contact" />
  </section>;
}
