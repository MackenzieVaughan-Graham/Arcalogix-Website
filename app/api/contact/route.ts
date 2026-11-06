import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16000;
const allowedInterests = new Set([
  "Portfolio strategy",
  "Test fits and planning",
  "Design and permitting",
  "Portfolio intelligence",
  "Digital twins and IoT",
  "Landlord space marketing",
]);

function stringValue(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max + 1) : "";
}

export async function POST(request: NextRequest) {
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return NextResponse.json({ error: "Request too large." }, { status: 413 });
    let payload: Record<string, unknown>;
    try {
      const value: unknown = JSON.parse(raw);
      if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid request");
      payload = value as Record<string, unknown>;
    } catch {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    // Honeypot. Behave like a successful request without writing spam.
    if (stringValue(payload.website, 200)) return NextResponse.json({ ok: true });

    const fullName = stringValue(payload.fullName, 120);
    const workEmail = stringValue(payload.workEmail, 254).toLowerCase();
    const company = stringValue(payload.company, 160);
    const role = stringValue(payload.role, 100);
    const portfolioSize = stringValue(payload.portfolioSize, 100);
    const interest = stringValue(payload.interest, 100);
    const message = stringValue(payload.message, 2000);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      fullName.length < 2 || fullName.length > 120 ||
      company.length < 2 || company.length > 160 ||
      !emailPattern.test(workEmail) || workEmail.length > 254 ||
      !allowedInterests.has(interest) ||
      message.length > 2000 || role.length > 100 || portfolioSize.length > 100 ||
      payload.consent !== true
    ) {
      return NextResponse.json({ error: "Please check the required fields and try again." }, { status: 400 });
    }

    if (process.env.TURNSTILE_SECRET_KEY) {
      const token = stringValue(payload.turnstileToken, 3000);
      if (!token) return NextResponse.json({ error: "Please complete the verification." }, { status: 400 });
      const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY, response: token }),
        cache: "no-store",
      });
      const result = (await verify.json()) as { success?: boolean };
      if (!result.success) return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 400 });
    }

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SECRET_KEY;
    if (!url || !key || url.includes("YOUR-PROJECT") || key.includes("REPLACE_ME")) {
      console.error("Arcalogix contact form is missing Supabase configuration");
      return NextResponse.json({ error: "Contact registration is not configured yet." }, { status: 503 });
    }
    const db = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
    const { error } = await db.from("enterprise_inquiries").insert({
      full_name: fullName,
      work_email: workEmail,
      company,
      role: role || null,
      portfolio_size: portfolioSize || null,
      interest,
      message: message || null,
      consent: true,
      source: "arcalogix-website",
      status: "new",
    });
    if (error) {
      console.error("Arcalogix contact insert failed:", { code: error.code, message: error.message });
      return NextResponse.json({ error: "We couldn't save your enquiry. Please try again." }, { status: 500 });
    }
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Arcalogix contact handler error:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "The enquiry could not be submitted. Please try again." }, { status: 500 });
  }
}
