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

export function supportMessage(context = "Zorba IPTV website") {
  return `Hello, I came from the ${context}. I need help with my Zorba IPTV service.`;
}

export function trialMessage(context = "Zorba IPTV website") {
  return `Hello, I came from the ${context}. I would like to request a trial. Can you help me get started?`;
}

export function resellerMessage(context = "Zorba IPTV website") {
  return `Hello, I came from the ${context}. I'm interested in reseller options and would like more information.`;
}

export function planOrderMessage(plan: PlanForMessage, context = "Zorba IPTV website") {
  const source = context.startsWith("the ") ? context : `the ${context}`;
  const deviceLabel = plan.devices === 1 ? "device" : "devices";
  return `Hello, I came from ${source}. I want to order the ${plan.duration} plan for ${plan.devices} ${deviceLabel}. The price is ${formatCurrency(plan.price)}.`;
}

export function planOrderUrl(plan: PlanForMessage, context = "Zorba IPTV website") {
  return whatsappUrl(planOrderMessage(plan, context));
}

export const whatsappMessages = {
  sales: "Hello, I came from the Zorba IPTV website. I'm interested in a Zorba IPTV subscription and would like help choosing a plan.",
  trial: trialMessage(),
  support: supportMessage(),
  supportCheckout: "Hello, I came from the Zorba IPTV website checkout page. I need help with my Zorba IPTV order.",
  reseller: resellerMessage()
};
