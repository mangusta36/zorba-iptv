import { DeviceCount, DurationKey, pricingPlans } from "@/config/site";

export function getPlan(deviceCount: DeviceCount, duration: DurationKey) {
  return pricingPlans[deviceCount].find((plan) => plan.id === duration) || null;
}

export function isDeviceCount(value: number): value is DeviceCount {
  return value === 1 || value === 2 || value === 3;
}

export function isDurationKey(value: string): value is DurationKey {
  return value === "1-month" || value === "3-months" || value === "6-months" || value === "12-months";
}
