import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About Zorba IPTV",
  description: "Learn how Zorba IPTV, also known as Zorba TV, organizes entertainment plans, compatible device guidance and support information."
};

export default function AboutPage() {
  return <>
    <section className="container-x page-intro"><p className="page-label">About Zorba IPTV</p><h1 className="page-title max-w-4xl">Entertainment, made easier to choose.</h1><p className="page-lead mt-7">{siteConfig.brand.formalName} brings plans, device options and setup information together in one place. Viewers may also know the brand as {siteConfig.brand.secondaryName}, ZorbaTV or ZorbaIPTV.</p></section>
    <section className="container-x grid gap-8 py-16 md:grid-cols-3 lg:py-20">
      {[["01", "Choose with confidence", "Compare Zorba IPTV duration and device options before placing an order."], ["02", "Get set up", "Follow the guidance for a compatible player once your account is approved."], ["03", "Stay informed", "Find practical answers about viewing, devices and Zorba IPTV support."]].map(([number, title, text]) => <div className="border-t border-white/20 pt-5" key={number}><span className="text-sm font-bold text-ember">{number}</span><h2 className="mt-5 font-serif text-2xl font-normal">{title}</h2><p className="mt-3 leading-7 text-mist">{text}</p></div>)}
    </section>
  </>;
}
