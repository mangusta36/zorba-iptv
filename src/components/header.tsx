"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/config/site";
import { Wordmark } from "./wordmark";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return <header className="site-header">
    <div className="container-x header-inner">
      <Link href="/" className="brand-link" aria-label="Zorba IPTV home" onClick={() => setOpen(false)}><Wordmark /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navLinks.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
      </nav>
      <div className="header-actions"><Link className="header-plan" href="/pricing">Explore plans <span aria-hidden="true">↗</span></Link></div>
      <button type="button" className="menu-toggle" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((value) => !value)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
    </div>
    <nav id="mobile-nav" className={open ? "mobile-nav is-open" : "mobile-nav"} aria-label="Mobile navigation" hidden={!open}>
      {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
    </nav>
  </header>;
}
