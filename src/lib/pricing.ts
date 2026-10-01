import { deviceCounts, DeviceCount, DurationKey, manualDevicePricing, pricingPlans, type PricingPlan } from "@/config/site";

export type PricedPlan = PricingPlan & {
  basePrice: number;
  devices: DeviceCount;
  pricingSource: "base" | "calculated" | "manual";
};

const devicePriceMultiplier = 1.7;

export function calculateDevicePrice(basePrice: number, deviceCount: DeviceCount) {
  const price = basePrice * Math.pow(devicePriceMultiplier, deviceCount - 1);
  return Math.round((price + Number.EPSILON) * 100) / 100;
}

function getPlanPrice(plan: PricingPlan, deviceCount: DeviceCount) {
  const manualPrice = manualDevicePricing[deviceCount]?.[plan.id];

  if (manualPrice !== undefined) {
    return { price: manualPrice, pricingSource: "manual" as const };
  }

  return {
    price: calculateDevicePrice(plan.price, deviceCount),
    pricingSource: deviceCount === 1 ? "base" as const : "calculated" as const
  };
}

export function getPlansForDevice(deviceCount: DeviceCount): PricedPlan[] {
  return pricingPlans.map((plan) => {
    const { price, pricingSource } = getPlanPrice(plan, deviceCount);

    return {
      ...plan,
      basePrice: plan.price,
      devices: deviceCount,
      price,
      pricingSource
    };
  });
}

export function getPlan(deviceCount: DeviceCount, duration: DurationKey) {
  return getPlansForDevice(deviceCount).find((plan) => plan.id === duration) || null;
}

export function isDeviceCount(value: number): value is DeviceCount {
  return deviceCounts.includes(value as DeviceCount);
}

export function isDurationKey(value: string): value is DurationKey {
  return value === "1-month" || value === "3-months" || value === "6-months" || value === "12-months";
}
