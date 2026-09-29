import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";
import localFont from "next/font/local";
import "./globals.css";

const cantarell = localFont({ src: "../fonts/Cantarell-VF.otf", variable: "--font-body", display: "swap", weight: "100 900" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.domain),
  applicationName: siteConfig.brand.formalName,
  title: {
    default: `${siteConfig.brand.formalName} | Official Zorba TV Website`,
    template: `%s | ${siteConfig.brand.formalName}`
  },
  description: `${siteConfig.brand.formalName} helps viewers compare entertainment plans, compatible devices and setup guidance from the official Zorba TV website.`,
  openGraph: {
    title: `${siteConfig.brand.formalName} | Official Zorba TV Website`,
    description: `${siteConfig.brand.formalName} helps viewers compare entertainment plans, compatible devices and setup guidance from the official Zorba TV website.`,
    siteName: siteConfig.brand.formalName,
    type: "website",
    url: `${siteConfig.brand.domain}/`
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.formalName} | Official Zorba TV Website`,
    description: "Explore Zorba IPTV plans, compatible devices and setup guidance from Zorba TV."
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico"
  },
  alternates: { canonical: `${siteConfig.brand.domain}/` }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cantarell.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
