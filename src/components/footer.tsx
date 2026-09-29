import Link from "next/link";
import { legalLinks, siteConfig } from "@/config/site";
import { Wordmark } from "./wordmark";

export function Footer() {
  return <footer className="site-footer">
    <div className="container-x footer-main">
      <div className="footer-intro"><Link href="/" aria-label="Zorba IPTV home"><Wordmark /></Link><p>{siteConfig.brand.formalName}, also known as {siteConfig.brand.secondaryName}, offers entertainment for every screen, on your terms.</p></div>
      <FooterColumn title="Zorba IPTV Explore" links={[{ label: "Pricing", href: "/pricing" }, { label: "Blog", href: "/blog" }, { label: "FAQ", href: "/faq" }, { label: "Free Trial", href: "/free-trial" }]} />
      <FooterColumn title="Zorba IPTV Company" links={[{ label: "About", href: "/about" }, { label: "Reseller", href: "/reseller" }, { label: "Contact", href: "/contact" }]} />
      <FooterColumn title="Zorba IPTV Information" links={legalLinks} />
    </div>
    <div className="container-x footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.brand.formalName}</span><span>Made for the moments that matter.</span></div>
  </footer>;
}

function FooterColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return <div className="footer-column"><h2>{title}</h2><ul>{links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></div>;
}
