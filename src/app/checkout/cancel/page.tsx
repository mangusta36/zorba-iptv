import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Checkout canceled",
  alternates: { canonical: "/checkout/cancel" },
  openGraph: { url: "/checkout/cancel" }
};

export default function CheckoutCancelPage() {
  return <PageHero eyebrow="Checkout" title="Checkout canceled" text="No payment was completed. You can return to pricing and select a plan again." cta={{ label: "Return to Pricing", href: "/pricing" }} />;
}
