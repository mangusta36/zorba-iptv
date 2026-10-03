import { siteConfig } from "@/config/site";
import { formatCurrency } from "./utils";

type PlanForMessage = {
  duration: string;
  price: number;
  devices: number;
};

export function whatsappUrl(message: string) {
  return `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function supportMessage() {
  return "Hi Zorba IPTV, I need help with my subscription.";
}

export function trialMessage() {
  return "Hi Zorba IPTV, I'd like to request a free trial.";
}

export function resellerMessage() {
  return "Hi Zorba IPTV, I'm interested in becoming a reseller.";
}

export function planOrderMessage(plan: PlanForMessage) {
  const deviceLabel = plan.devices === 1 ? "device" : "devices";
  return `Hi Zorba IPTV, I'd like the ${plan.duration} plan for ${plan.devices} ${deviceLabel} (${formatCurrency(plan.price)}).`;
}

export function planOrderUrl(plan: PlanForMessage) {
  return whatsappUrl(planOrderMessage(plan));
}

export const whatsappMessages = {
  sales: "Hi Zorba IPTV, I'd like help choosing a plan.",
  trial: trialMessage(),
  support: supportMessage(),
  supportCheckout: "Hi Zorba IPTV, I need help with my subscription.",
  reseller: resellerMessage()
};
