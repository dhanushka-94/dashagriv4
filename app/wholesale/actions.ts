"use server";

import { site } from "@/lib/site";

export type QuoteFormState = {
  status: "idle" | "error" | "ready";
  message: string;
  mailto?: string;
};

function field(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

export async function submitWholesaleQuote(
  _prev: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  if (field(formData, "website")) {
    return {
      status: "ready",
      message: "Thank you. If this is a genuine inquiry, our team will follow up.",
    };
  }

  const fullName = field(formData, "fullName");
  const email = field(formData, "email");
  const location = field(formData, "location");
  const quantity = field(formData, "quantity");

  if (!fullName || !email || !location || !quantity) {
    return {
      status: "error",
      message: "Please complete full name, email, country and delivery location, and estimated quantity.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  const lines = [
    `Full name: ${fullName}`,
    `Company / business name: ${field(formData, "company") || "—"}`,
    `Email: ${email}`,
    `Phone: ${field(formData, "phone") || "—"}`,
    `Country and delivery location: ${location}`,
    `Product: ${field(formData, "product") || "Grow bag"}`,
    `Estimated quantity: ${quantity}`,
    `Crop or intended use: ${field(formData, "crop") || "—"}`,
    `Requested delivery timeline: ${field(formData, "timeline") || "—"}`,
  ];

  const subject = encodeURIComponent(`Wholesale quote request from ${fullName}`);
  const body = encodeURIComponent(lines.join("\n"));

  return {
    status: "ready",
    message: `Your quote request is ready. Your email app should open a message to ${site.email}. Please send that message so the DashAgri team receives it.`,
    mailto: `mailto:${site.email}?subject=${subject}&body=${body}`,
  };
}
