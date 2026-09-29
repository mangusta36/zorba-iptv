"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { pricingFeatures, pricingPlans, type DeviceCount } from "@/config/site";
import { planOrderUrl, whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { formatCurrency } from "@/lib/utils";
import { Button } from "./button";

function planHeading(duration: string) {
  const [count] = duration.split(" ");
  return `${count}-Month Zorba IPTV Plan`;
}

export function PricingSelector() {
  const [devices, setDevices] = useState<DeviceCount>(1);
  const plans = pricingPlans[devices];

  return <div className="pricing-selector">
    <div className="device-control"><span>Choose your screens</span><div className="device-tabs" aria-label="Number of devices">
      {([1, 2, 3] as DeviceCount[]).map((count) => <button key={count} type="button" aria-pressed={devices === count} onClick={() => setDevices(count)}>{count} {count === 1 ? "Device" : "Devices"}</button>)}
    </div></div>
    <div className="plan-grid" aria-live="polite">
      {plans.map((plan) => <article className="plan-card" key={plan.id}>
        <div className="plan-top"><h3>{planHeading(plan.duration)}</h3><span>{devices} {devices === 1 ? "screen" : "screens"}</span></div>
        <p className="plan-price">{formatCurrency(plan.price)}</p>
        <p className="plan-caption">One clear price for the full term.</p>
        <ul>{pricingFeatures.slice(0, 4).map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul>
        <Button href={planOrderUrl({ duration: plan.duration, price: plan.price }, "Zorba IPTV website pricing section")}>Choose plan <span aria-hidden="true">↗</span></Button>
      </article>)}
    </div>
    <div className="trial-callout"><div><strong>Prefer to try it first?</strong><p>Request a trial before choosing a subscription. Availability is subject to approval.</p></div><Button href={whatsappUrl(whatsappMessages.trial)} variant="ghost">Request a trial <span aria-hidden="true">↗</span></Button></div>
  </div>;
}
