"use client";

import { useSearchParams } from "next/navigation";
import { pricingFeatures } from "@/config/site";
import { getPlan, isDeviceCount, isDurationKey } from "@/lib/pricing";
import { formatCurrency } from "@/lib/utils";
import { planOrderUrl } from "@/lib/whatsapp";
import { Button } from "./button";

export function CheckoutClient() {
  const params = useSearchParams();
  const durationParam = params.get("duration") || "";
  const devicesParam = Number(params.get("devices"));
  const valid = isDurationKey(durationParam) && isDeviceCount(devicesParam);
  const plan = valid ? getPlan(devicesParam, durationParam) : null;

  if (!plan || !valid) {
    return (
      <div className="surface rounded-card p-8">
        <h1 className="page-title">Select a valid plan</h1>
        <p className="mt-3 text-mist">Return to pricing and choose a subscription to continue.</p>
        <Button className="mt-6" href="/pricing">
          View Pricing
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
      <div className="surface rounded-card p-6">
        <h1 className="page-title">Review your plan.</h1>
        <p className="mt-3 max-w-lg leading-7 text-mist">Your selection is ready to review. Online payment is currently unavailable, so the next step is to confirm your order with support on WhatsApp.</p>
        <Button className="mt-6 w-full" href={planOrderUrl(plan)}>Order via WhatsApp</Button>
        <Button className="mt-3 w-full" href="/pricing" variant="ghost">Change plan</Button>
      </div>
      <aside className="surface rounded-card p-6">
        <h2 className="text-xl font-bold">Order summary</h2>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-mist">Duration</dt>
            <dd className="font-semibold">{plan.duration}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-mist">Devices</dt>
            <dd className="font-semibold">{devicesParam}</dd>
          </div>
          <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
            <dt className="text-mist">Total</dt>
            <dd className="text-2xl font-black">{formatCurrency(plan.price)}</dd>
          </div>
        </dl>
        <ul className="mt-6 space-y-3 text-sm text-mist">
          {pricingFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
