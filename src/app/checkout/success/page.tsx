import { PageHero } from "@/components/page-hero";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";

export const metadata = { title: "Order status" };

export default function CheckoutSuccessPage() {
  return <PageHero eyebrow="Checkout" title="Order status" text="No payment has been verified for this visit. Contact us if you need help with an order." cta={{ label: "Contact Support", href: whatsappUrl(whatsappMessages.supportCheckout) }} />;
}
