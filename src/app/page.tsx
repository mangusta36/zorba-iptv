import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { PricingSelector } from "@/components/pricing-selector";
import { siteConfig } from "@/config/site";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import type { Metadata } from "next";
import "./home.css";

const deviceGroups = [
  {
    title: "Firestick and Fire TV",
    text: "Fire TV devices are popular because they connect to almost any television and support many IPTV player workflows. If this is your setup, start with the Firestick installation guide before choosing a player.",
    href: "/blog/how-to-install-iptv-on-firestick-2026",
    label: "Firestick setup guide"
  },
  {
    title: "Samsung, LG and Android Smart TVs",
    text: "Smart TVs can often use compatible player apps directly, but the app store and setup steps vary by brand. The Smart TV guide explains how to think through Samsung, LG and Android TV options.",
    href: "/blog/best-iptv-apps-smart-tv-2026",
    label: "Smart TV app guide"
  },
  {
    title: "Android TV and Google TV",
    text: "Android TV and Google TV devices are a strong fit for TV-first players and remote-friendly interfaces. They are especially useful when you want guide navigation on a main living-room screen.",
    href: "/blog/tivimate-firestick-setup-2026",
    label: "TiviMate setup guide"
  },
  {
    title: "Phones, tablets and computers",
    text: "Mobile and desktop viewing depends on the player you choose and the login format your account supports. Check app requirements first, then keep your access details somewhere secure.",
    href: "/blog/xtream-codes-iptv-setup-guide",
    label: "Login format guide"
  }
];

const playerGuides = [
  {
    title: "IPTV player apps",
    text: "A player app is the software interface you use to sign in, browse categories and watch. Zorba IPTV is the service layer; third-party players remain separate apps with their own requirements.",
    href: "/blog/best-iptv-player-for-firestick-2026",
    label: "Compare Firestick players"
  },
  {
    title: "Xtream Codes and M3U",
    text: "Some apps ask for a server URL, username and password. Others accept an M3U playlist link. Both are login formats, not separate subscriptions by themselves.",
    href: "/blog/xtream-codes-iptv-setup-guide",
    label: "Understand Xtream Codes"
  },
  {
    title: "EPG basics",
    text: "An electronic program guide helps organize live channels into a schedule. EPG behavior can vary by player, device and account configuration.",
    href: "/blog/iptv-smarters-pro-firestick-setup",
    label: "IPTV Smarters setup"
  }
];

const useCases = [
  ["Firestick household", "Use a streaming stick when your TV app store is limited or you want the same setup on more than one television."],
  ["Smart TV household", "Start with your TV brand and app store. If the right player is not available, a separate streaming device may be easier."],
  ["Sports viewer", "Confirm your device, app and internet connection before major live events so setup work is not happening at kickoff."],
  ["Multi-device home", "Choose a plan that matches concurrent viewing needs, then set up each screen with the same care instead of rushing through the second device."]
];

const fitPoints = [
  ["Device flexibility", "The homepage does not force one viewing method. It points you toward Fire TV, Smart TV, Android, mobile and computer paths so you can start with the hardware you already own."],
  ["Setup education", "Guides explain player apps, login formats and troubleshooting basics in plain language, which helps new users avoid mixing up the service, the app and the device."],
  ["Plan clarity", "Pricing is organized by duration and number of screens, making it easier to choose based on household use instead of guessing from a long feature list."],
  ["Support direction", "When setup questions remain, the site points users toward FAQ, contact and trial-request pages instead of leaving them inside a generic sales page."]
];

const sportsGuides = [
  {
    title: "MLB postseason viewing",
    text: "Check channel, app and device readiness before playoff games begin.",
    href: "/blog/how-to-watch-mlb-playoffs-2026"
  },
  {
    title: "World Series setup",
    text: "Review the FOX access path and authentication basics ahead of first pitch.",
    href: "/blog/how-to-watch-world-series-2026"
  },
  {
    title: "NBA season viewing",
    text: "Compare NBA viewing options and device preparation for the 2026-27 season.",
    href: "/blog/how-to-watch-nba-games-2026-27"
  }
];

const homepageFaqs = [
  {
    question: "What is Zorba IPTV?",
    answer: "Zorba IPTV is an entertainment subscription website that helps viewers choose a plan, understand compatible device options and follow setup guidance for supported IPTV player apps."
  },
  {
    question: "Do I need a separate IPTV player app?",
    answer: "In many setups, yes. A compatible player app provides the interface for logging in, browsing the guide and watching on your device. Zorba IPTV does not own third-party player apps."
  },
  {
    question: "Can I use Zorba IPTV on Firestick?",
    answer: "Firestick and Fire TV are common setup paths when a compatible player is available. Review the Firestick setup guide before installing apps or entering account details."
  },
  {
    question: "Can I watch on Samsung or LG Smart TVs?",
    answer: "Smart TV support depends on the apps available for your exact television model and region. The Smart TV guide explains how to compare player options without guessing."
  },
  {
    question: "What should I check if streaming buffers?",
    answer: "Start with the basics: internet stability, Wi-Fi signal, device performance, app updates and whether other devices are using bandwidth. The buffering guide walks through practical checks."
  },
  {
    question: "Where do I get help with setup?",
    answer: "Use the setup guides for your device first, then contact Zorba IPTV support if your account details, player choice or device behavior still need review."
  }
];

export const metadata: Metadata = {
  title: "Zorba IPTV | Official Zorba TV Website",
  description: "Zorba IPTV is the official Zorba TV website for entertainment subscriptions, compatible device setup guidance and simple plan options.",
  ...(siteConfig.brand.domain ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    title: "Zorba IPTV | Official Zorba TV Website",
    description: "Explore Zorba IPTV plans, compatible devices and setup guidance from Zorba TV.",
    type: "website",
    siteName: siteConfig.brand.formalName,
    ...(siteConfig.brand.domain ? { url: siteConfig.brand.domain } : {})
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorba IPTV | Official Zorba TV Website",
    description: "Explore Zorba IPTV plans, compatible devices and setup guidance from Zorba TV."
  }
};

export default function HomePage() {
  const origin = siteConfig.brand.domain.replace(/\/$/, "");
  const jsonLd = origin ? [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.brand.formalName,
      alternateName: [siteConfig.brand.secondaryName, ...siteConfig.brand.compactNames, siteConfig.brand.name],
      url: origin
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.brand.formalName,
      alternateName: [siteConfig.brand.secondaryName, ...siteConfig.brand.compactNames],
      url: origin
    }
  ] : null;

  return <>
    {jsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /> : null}
    <section className="zorba-hero" aria-labelledby="hero-title">
      <Image src="/media/zorba-hero.webp" alt="Audience enjoying a film in a dark screening room" fill priority sizes="100vw" className="zorba-hero-image" />
      <div className="zorba-hero-scrim" />
      <div className="container-x zorba-hero-content"><div className="zorba-hero-copy">
        <p className="eyebrow">ZORBA IPTV <span /> ENTERTAINMENT SUBSCRIPTIONS</p>
        <h1 id="hero-title">Zorba IPTV — streaming made <em>simple.</em></h1>
        <p>Zorba IPTV helps you compare entertainment plans for live television, films and sports on compatible screens. Choose the plan that fits your household, then use clear setup guidance for your device and player app.</p>
        <div className="hero-actions"><Button href="/pricing">Explore plans <ArrowUpRight aria-hidden="true" size={17} /></Button><Button href={whatsappUrl(whatsappMessages.trial)} variant="secondary">Request a trial</Button></div>
      </div></div>
      <div className="hero-index container-x"><span>01 / THE EXPERIENCE</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="plans-section" aria-labelledby="plans-title"><div className="container-x"><div className="section-heading plans-heading"><div><p className="eyebrow">SUBSCRIPTIONS</p><h2 id="plans-title">Choose your<br /><em>own rhythm.</em></h2></div><p>One, two or three screens. A month or a year. Pick the Zorba IPTV arrangement that suits the way you watch.</p></div><PricingSelector /></div></section>

    <section className="showcase-section" aria-labelledby="showcase-title"><div className="container-x">
      <div className="section-heading showcase-heading"><div><p className="eyebrow">THE EXPERIENCE</p><h2 id="showcase-title">From the match<br />to the <em>encore.</em></h2></div><p>Make room for live moments and stories worth staying in for. Zorba IPTV brings your viewing options into one straightforward place.</p></div>
      <div className="showcase-grid">
        <figure className="showcase-image showcase-sport"><Image src="/media/zorba-sport.webp" alt="Friends watching a live match together" fill sizes="(max-width: 767px) 100vw, 62vw" /><figcaption><span>01</span> LIVE MOMENTS</figcaption></figure>
        <figure className="showcase-image showcase-live"><Image src="/media/zorba-live.webp" alt="Singer performing for a live audience" fill sizes="(max-width: 767px) 100vw, 33vw" /><figcaption><span>02</span> MORE TO DISCOVER</figcaption></figure>
      </div>
    </div></section>

    <section className="explain-section" aria-labelledby="what-title"><div className="container-x explain-layout">
      <div><p className="eyebrow">WHAT IT IS</p><h2 id="what-title">What is Zorba IPTV?</h2></div>
      <div className="explain-copy">
        <p>Zorba IPTV is a subscription-focused entertainment site for viewers who want a clearer way to choose a plan, understand device options and get started with compatible IPTV player applications. Instead of relying on a cable box or satellite installation, IPTV viewing uses an internet connection and a supported player app on the screen you plan to watch.</p>
        <p>The exact setup path depends on your device, your selected plan and the player app you use. That is why the site pairs plan information with practical guides for Firestick, Smart TVs, Android TV, IPTV Smarters, TiviMate, Xtream Codes and buffering checks.</p>
        <div className="explain-links">
          <Link href="/about" className="text-link">Learn about Zorba IPTV <ArrowUpRight aria-hidden="true" size={17} /></Link>
          <Link href="/blog" className="text-link">Explore setup guides <ArrowUpRight aria-hidden="true" size={17} /></Link>
        </div>
      </div>
    </div></section>

    <section className="device-section" aria-labelledby="device-title"><div className="container-x device-layout"><div><p className="eyebrow">WATCH YOUR WAY</p><h2 id="device-title">Your favorite screen is the right one.</h2><p>Choose the number of Zorba IPTV connections you need. Setup guidance is available for compatible players on the devices you already use.</p><Link href="/faq" className="text-link">See how setup works <ArrowUpRight aria-hidden="true" size={17} /></Link></div><ul className="device-list"><li><span>01</span> Smart TVs</li><li><span>02</span> Streaming devices</li><li><span>03</span> Phones &amp; tablets</li><li><span>04</span> Computers</li></ul></div></section>

    <section className="compat-section" aria-labelledby="compat-title"><div className="container-x">
      <div className="section-heading"><div><p className="eyebrow">DEVICE COMPATIBILITY</p><h2 id="compat-title">Start with the screen you actually use.</h2></div><p>Device support is easiest to understand when you separate the screen, the player app and the login format. These paths cover the most common ways viewers prepare their setup.</p></div>
      <div className="content-card-grid device-card-grid">
        {deviceGroups.map((item) => <article className="info-card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p><Link href={item.href} className="text-link">{item.label} <ArrowUpRight aria-hidden="true" size={16} /></Link></article>)}
      </div>
    </div></section>

    <section className="process-section" aria-labelledby="process-title"><div className="container-x"><div className="section-heading process-heading"><p className="eyebrow">HOW IT WORKS</p><h2 id="process-title">Simple from the start.</h2></div><div className="process-grid"><div><span>01</span><h3>Find your plan</h3><p>Select a subscription length and the number of screens your household needs.</p></div><div><span>02</span><h3>Review the details</h3><p>Check your order and request access when a payment option is available.</p></div><div><span>03</span><h3>Prepare your device</h3><p>Choose a compatible player app and confirm whether it uses Xtream Codes, M3U or another supported login format.</p></div><div><span>04</span><h3>Get set up</h3><p>Follow the guidance provided once your account is approved, then contact support if your device or app needs review.</p></div></div></div></section>

    <section className="players-section" aria-labelledby="players-title"><div className="container-x players-layout">
      <div><p className="eyebrow">PLAYERS AND LOGINS</p><h2 id="players-title">Know the difference between the service and the app.</h2><p>Many first-time IPTV users get stuck because the same setup involves three separate pieces: the subscription, the player app and the login details. Keeping those pieces separate makes setup easier to troubleshoot.</p></div>
      <div className="content-card-grid players-grid">
        {playerGuides.map((item) => <article className="info-card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p><Link href={item.href} className="text-link">{item.label} <ArrowUpRight aria-hidden="true" size={16} /></Link></article>)}
      </div>
    </div></section>

    <section className="fit-section" aria-labelledby="fit-title"><div className="container-x">
      <div className="section-heading"><div><p className="eyebrow">WHY ZORBA IPTV</p><h2 id="fit-title">Built around decisions users actually make.</h2></div><p>The strongest setup is not just a plan. It is the right device, the right player, a clear login path and somewhere to turn when a detail does not match the screen in front of you.</p></div>
      <div className="fit-grid">
        {fitPoints.map(([title, text]) => <article className="fit-item" key={title}><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </div></section>

    <section className="setup-section" aria-labelledby="setup-title"><div className="container-x setup-layout">
      <div><p className="eyebrow">SETUP HELP</p><h2 id="setup-title">Use the right guide for the job.</h2><p>Homepage summaries are useful for orientation, but detailed setup should happen in the guide that matches your device and player. Before you begin, know your device model, install only apps you can verify, and keep your account details private.</p></div>
      <div className="guide-list" aria-label="Setup and troubleshooting guides">
        <Link href="/blog/how-to-install-iptv-on-firestick-2026">Install IPTV on Firestick <ArrowUpRight aria-hidden="true" size={16} /></Link>
        <Link href="/blog/best-iptv-player-for-firestick-2026">Best IPTV players for Firestick <ArrowUpRight aria-hidden="true" size={16} /></Link>
        <Link href="/blog/tivimate-firestick-setup-2026">Set up TiviMate on Firestick <ArrowUpRight aria-hidden="true" size={16} /></Link>
        <Link href="/blog/iptv-smarters-pro-firestick-setup">Set up IPTV Smarters Pro <ArrowUpRight aria-hidden="true" size={16} /></Link>
        <Link href="/blog/best-iptv-apps-smart-tv-2026">Choose Smart TV IPTV apps <ArrowUpRight aria-hidden="true" size={16} /></Link>
        <Link href="/blog/how-to-fix-iptv-buffering-freezing">Fix IPTV buffering and freezing <ArrowUpRight aria-hidden="true" size={16} /></Link>
      </div>
    </div></section>

    <section className="sports-section" aria-labelledby="sports-title"><div className="container-x sports-layout">
      <div><p className="eyebrow">LIVE SPORTS PREP</p><h2 id="sports-title">Do the setup work before game time.</h2><p>Sports viewing is where small setup problems feel biggest. If you plan to watch seasonal events, test the player app, confirm your internet connection and review the relevant guide before the schedule gets busy.</p><Link href="/blog" className="text-link">Browse all guides <ArrowUpRight aria-hidden="true" size={17} /></Link></div>
      <div className="sports-list">
        {sportsGuides.map((item) => <Link href={item.href} key={item.title}><strong>{item.title}</strong><span>{item.text}</span><ArrowUpRight aria-hidden="true" size={16} /></Link>)}
      </div>
    </div></section>

    <section className="quality-section" aria-labelledby="quality-title"><div className="container-x quality-layout">
      <div><p className="eyebrow">STREAMING QUALITY</p><h2 id="quality-title">A stable setup starts before you press play.</h2></div>
      <div className="quality-points">
        <p>Good IPTV performance depends on more than the subscription. Your internet connection, Wi-Fi signal, router placement, device storage, player app version and household bandwidth all affect playback. For a main television, Ethernet or a strong 5 GHz Wi-Fi signal is often more reliable than a weak connection through several walls.</p>
        <p>If a stream freezes, avoid changing every setting at once. Restart the app, test another channel or title, check whether other devices are using bandwidth, update the player and compare Wi-Fi against a wired or closer-router setup when possible.</p>
        <Link href="/blog/how-to-fix-iptv-buffering-freezing" className="text-link">Read the buffering guide <ArrowUpRight aria-hidden="true" size={17} /></Link>
      </div>
    </div></section>

    <section className="use-section" aria-labelledby="use-title"><div className="container-x">
      <div className="section-heading"><div><p className="eyebrow">SETUP PATHS</p><h2 id="use-title">Different homes need different starting points.</h2></div><p>Use these examples to decide which resource to open first. They are not separate products; they are practical ways to approach setup.</p></div>
      <div className="use-grid">
        {useCases.map(([title, text]) => <div className="use-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}
      </div>
    </div></section>

    <section className="home-faq" aria-labelledby="faq-title"><div className="container-x faq-layout"><div><p className="eyebrow">GOOD TO KNOW</p><h2 id="faq-title">A little clarity<br />goes a <em>long way.</em></h2><p>Answers about Zorba IPTV plans, devices, player apps and getting started.</p><Link href="/faq" className="text-link">All questions <ArrowUpRight aria-hidden="true" size={17} /></Link></div><FaqAccordion items={homepageFaqs} /></div></section>

    <section className="closing-section"><div className="container-x closing-layout"><div><p className="eyebrow">READY WHEN YOU ARE</p><h2>Your next viewing moment starts here.</h2></div><Button href="/pricing">Explore subscriptions <ArrowUpRight aria-hidden="true" size={18} /></Button></div></section>
  </>;
}
