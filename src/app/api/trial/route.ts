import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.name || !body?.email || !body?.whatsapp || !body?.device) {
    return NextResponse.json({ message: "Please complete all required trial fields." }, { status: 400 });
  }
  if (!process.env.FORM_WEBHOOK_URL) {
    return NextResponse.json({ message: "Trial requests are temporarily unavailable. Please try again later." }, { status: 503 });
  }
  try {
    const response = await fetch(process.env.FORM_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "trial", ...body }),
      cache: "no-store"
    });
    if (!response.ok) throw new Error("Webhook rejected request");
    return NextResponse.json({ message: "Your trial request has been sent." });
  } catch {
    return NextResponse.json({ message: "We could not send your request. Please try again later." }, { status: 502 });
  }
}
