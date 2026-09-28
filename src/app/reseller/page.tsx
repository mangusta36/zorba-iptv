import type { Metadata } from "next";
import { Button } from "@/components/button";
import { reseller } from "@/config/site";
import { resellerMessage, whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Zorba IPTV Reseller Enquiries",
  description: "Ask about Zorba IPTV reseller access, package structures and account options for your business."
};

export default function ResellerPage() {
  return <>
    <section className="container-x page-intro page-split reseller-intro"><div><p className="page-label">Work with Zorba IPTV</p><h1 className="page-title">A partnership worth building.</h1></div><div><p className="page-lead">Explore Zorba IPTV reseller access and ask us about the package structure that suits your business.</p><div className="reseller-benefits">{reseller.benefits.map((benefit) => <span key={benefit.title}>{benefit.title}</span>)}</div></div></section>
    <section className="container-x page-section"><p className="page-label">Reseller access</p><h2 className="section-title">Available structures.</h2><div className="reseller-packages">{reseller.packages.map((item) => <article key={item.name}><h3>{item.name}</h3><p>{item.description}</p><small>{item.terms}</small></article>)}</div></section>
    <section className="reseller-contact"><div className="container-x page-section page-split"><div><p className="page-label">Start a conversation</p><h2 className="section-title">Tell us about your business.</h2><p className="page-lead">Send your enquiry and we&apos;ll review your request.</p></div><div className="surface rounded-card p-5 sm:p-6"><p className="page-label">Talk directly</p><h3 className="section-title">Start a reseller conversation.</h3><p className="page-lead mt-3">Send a quick WhatsApp message and we can review your reseller interest.</p><div className="mt-6"><Button href={whatsappUrl(resellerMessage("Zorba IPTV Reseller page"))}>Contact Us on WhatsApp</Button></div></div></div></section>
  </>;
}
