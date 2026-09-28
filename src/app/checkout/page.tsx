import { Suspense } from "react";
import { CheckoutClient } from "@/components/checkout-client";
import { Section } from "@/components/section";

export const metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return (
    <Section className="checkout-page">
      <Suspense fallback={<div className="surface rounded-card p-8">Loading checkout...</div>}>
        <CheckoutClient />
      </Suspense>
    </Section>
  );
}
