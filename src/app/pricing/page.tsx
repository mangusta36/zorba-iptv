import type { Metadata } from "next";
import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { PricingSelector } from "@/components/pricing-selector";
import { faqs } from "@/config/site";

export const metadata: Metadata = {
  title: "Zorba IPTV Plans and Pricing",
  description: "Compare Zorba IPTV plans by duration and device count. Review Zorba TV pricing before continuing to checkout.",
  alternates: { canonical: "/pricing" },
  openGraph: { url: "/pricing" }
};

export default function PricingPage() {
  return <>
    <section className="page-intro container-x">
      <p className="page-label">Zorba IPTV pricing</p>
      <h1 className="page-title">A plan for every way<br />you watch.</h1>
      <p className="page-lead">Pick your Zorba IPTV duration and the number of devices you need. Review the full plan before continuing to checkout.</p>
    </section>
    <section className="container-x page-section"><PricingSelector /></section>
    <section className="pricing-sport container-x">
      <div className="pricing-sport-image"><Image src="/media/zorba-sport.webp" alt="Friends enjoying a sports broadcast together" fill sizes="(max-width: 767px) 100vw, 48vw" /></div>
      <div><p className="page-label">The experience</p><h2>Good viewing is better together.</h2><p>Select the Zorba IPTV device count that fits your home. Explore available programming once the verified catalog is published.</p></div>
    </section>
    <section className="pricing-guide"><div className="container-x"><p className="page-label">Getting started</p><h2>Simple from the start.</h2><div className="steps-grid">
      <div className="step-item"><span>01</span><h3>Choose a plan</h3><p>Compare Zorba IPTV duration and device options.</p></div>
      <div className="step-item"><span>02</span><h3>Review your order</h3><p>Check the details before continuing.</p></div>
      <div className="step-item"><span>03</span><h3>Get set up</h3><p>Follow the guidance provided once your account is approved.</p></div>
    </div></div></section>
    <section className="container-x page-section faq-page-section"><div><p className="page-label">Need more detail?</p><h2 className="page-title">Questions, answered.</h2></div><FaqAccordion items={faqs} /></section>
  </>;
}
