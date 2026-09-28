import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Registration is temporarily unavailable." }, { status: 503 });
}
