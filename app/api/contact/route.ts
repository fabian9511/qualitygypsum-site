import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
};

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "bad_request" }, { status: 400 });
  }

  const { name, email, phone, projectType, message } = data;

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, reason: "missing_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "info@qualitygypsum.ca";
  const from = process.env.CONTACT_FROM || "Quality Gypsum Website <onboarding@resend.dev>";

  // If no email provider is configured yet, tell the client so it can fall
  // back to a prefilled mailto — no lead is ever lost.
  if (!apiKey) {
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 });
  }

  const html = `
    <h2>New quote request — qualitygypsum.ca</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
    <p><strong>Project type:</strong> ${escapeHtml(projectType || "—")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New quote request from ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false, reason: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, reason: "send_failed" }, { status: 502 });
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
