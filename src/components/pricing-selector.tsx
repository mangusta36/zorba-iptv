"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { deviceCounts, pricingFeatures, type DeviceCount } from "@/config/site";
import { getPlansForDevice } from "@/lib/pricing";
import { planOrderUrl, whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { formatCurrency } from "@/lib/utils";
import { Button } from "./button";

function planHeading(duration: string) {
  const [count] = duration.split(" ");
  return `${count}-Month Zorba IPTV Plan`;
}

function planCaption(plan: ReturnType<typeof getPlansForDevice>[number]) {
  if (plan.pricingSource === "manual") {
    return `Manual price for ${plan.devices} devices.`;
  }

  if (plan.pricingSource === "calculated") {
    return `Calculated from ${formatCurrency(plan.basePrice)} base price.`;
  }

  return "Base price for 1 device.";
}

export function PricingSelector() {
  const [devices, setDevices] = useState<DeviceCount>(1);
  const plans = getPlansForDevice(devices);

  return <div className="pricing-selector">
    <div className="device-control"><span>Choose devices. Prices shown are for {devices} {devices === 1 ? "device" : "devices"}.</span><div className="device-tabs" aria-label="Number of devices">
      {deviceCounts.map((count) => <button key={count} type="button" aria-pressed={devices === count} onClick={() => setDevices(count)}>{count} {count === 1 ? "Device" : "Devices"}</button>)}
    </div></div>
    <div className="plan-grid" aria-live="polite">
      {plans.map((plan) => <article className="plan-card" key={plan.id}>
        <div className="plan-top"><h3>{planHeading(plan.duration)}</h3><span>{devices} {devices === 1 ? "screen" : "screens"}</span></div>
        <p className="plan-price">{formatCurrency(plan.price)}</p>
        <p className="plan-caption">{planCaption(plan)}</p>
        <ul>{pricingFeatures.slice(0, 4).map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul>
        <Button href={planOrderUrl(plan)}>Choose plan <span aria-hidden="true">↗</span></Button>
      </article>)}
    </div>
    <div className="trial-callout"><div><strong>Prefer to try it first?</strong><p>Request a trial before choosing a subscription. Availability is subject to approval.</p></div><Button href={whatsappUrl(whatsappMessages.trial)} variant="ghost">Request a trial <span aria-hidden="true">↗</span></Button></div>
  </div>;
}
