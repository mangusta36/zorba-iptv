import { NextResponse } from "next/server";
import { getPlan, isDeviceCount, isDurationKey } from "@/lib/pricing";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const devices = Number(body?.devices);
  const duration = String(body?.duration || "");
  if (!isDeviceCount(devices) || !isDurationKey(duration)) {
    return NextResponse.json({ message: "Invalid subscription selection." }, { status: 400 });
  }
  const plan = getPlan(devices, duration);
  if (!plan) {
    return NextResponse.json({ message: "Plan not found." }, { status: 400 });
  }
  return NextResponse.json({ message: `The ${plan.duration} plan for ${devices} device(s) is valid, but online payment is currently unavailable.` }, { status: 503 });
}
