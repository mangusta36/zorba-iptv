"use client";

import { useState } from "react";
import { resellerMessage, trialMessage, whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { Button } from "./button";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  options?: string[];
};

export function RequestForm({ kind }: { kind: "trial" | "contact" | "reseller" }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const fields: Field[] =
    kind === "trial"
      ? [
          { name: "name", label: "Full name", required: true },
          { name: "email", label: "Email address", type: "email", required: true },
          { name: "whatsapp", label: "WhatsApp number", required: true },
          { name: "device", label: "Device type", required: true, options: ["Smart TV", "Android TV", "Fire TV", "Apple TV", "iOS", "Android", "Windows", "macOS"] },
          { name: "message", label: "Optional message" }
        ]
      : [
          { name: "name", label: "Full name", required: true },
          { name: "email", label: "Email address", type: "email", required: true },
          { name: "subject", label: "Subject", required: true },
          { name: "message", label: "Message", required: true }
        ];

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const targetMessage =
      kind === "trial"
        ? trialMessage("Zorba IPTV Free Trial page")
        : kind === "reseller"
          ? resellerMessage("Zorba IPTV Reseller page")
          : whatsappMessages.support;

    window.open(whatsappUrl(targetMessage), "_blank", "noopener,noreferrer");
    setStatus("success");
    setMessage(
      kind === "trial"
        ? "Opening WhatsApp to continue your trial request..."
        : kind === "reseller"
          ? "Opening WhatsApp to continue your reseller enquiry..."
          : "Opening WhatsApp to contact support..."
    );
  }

  return (
    <form className="surface grid gap-4 rounded-card p-5 sm:p-6" onSubmit={onSubmit}>
      {fields.map((field) => (
        <label className="grid gap-2 text-sm font-semibold" key={field.name}>
          {field.label}
          {field.options ? (
            <select className="min-h-12 rounded-card border border-white/10 bg-ink px-3 text-white" name={field.name} required={field.required}>
              <option value="">Select an option</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.name === "message" ? (
            <textarea className="min-h-32 rounded-card border border-white/10 bg-ink px-3 py-3 text-white" name={field.name} required={field.required} />
          ) : (
            <input className="min-h-12 rounded-card border border-white/10 bg-ink px-3 text-white" name={field.name} required={field.required} type={field.type || "text"} />
          )}
        </label>
      ))}
      <Button disabled={status === "loading"} type="submit">
        {status === "loading" ? "Opening..." : kind === "trial" ? "Request Trial" : "Send Message"}
      </Button>
      {message && (
        <p className={status === "success" ? "text-sm text-gold" : "text-sm text-ember"} role="status">
          {message}
        </p>
      )}
    </form>
  );
}
