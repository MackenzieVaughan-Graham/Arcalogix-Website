/**
 * Arcalogix marketing website — About Us contact form endpoint.
 * Delivers demo/chat inquiries through Resend without changing /api/contact.
 * Configure RESEND_API_KEY, ABOUT_CONTACT_TO_EMAIL and ABOUT_CONTACT_FROM_EMAIL
 * in Vercel's environment variables (and .env.local for local testing).
 */

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const replacements: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return replacements[character] || character;
  });
}

function jsonResponse(body: Record<string, string | boolean>, status: number): Response {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request): Promise<Response> {
  const key = process.env.RESEND_API_KEY;
  const recipient = process.env.ABOUT_CONTACT_TO_EMAIL;
  const sender = process.env.ABOUT_CONTACT_FROM_EMAIL;

  if (!key || !recipient || !sender) {
    console.error("[about-contact] Required Resend environment variables are missing.");
    return jsonResponse(
      { error: "The contact form is not configured. Please contact Arcalogix directly." },
      503
    );
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return jsonResponse({ error: "Invalid submission format." }, 415);
  }

  let payload: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return jsonResponse({ error: "Invalid form submission." }, 400);
    }
    payload = parsed as Record<string, unknown>;
  } catch {
    return jsonResponse({ error: "Invalid form submission." }, 400);
  }

  // An unobtrusive honeypot blocks many automated submissions.
  // Real visitors cannot see or tab to this field.
  if (getString(payload.website)) {
    return jsonResponse({ success: true }, 200);
  }

  const name = getString(payload.full_name || payload.name);
  const email = getString(payload.work_email || payload.email).toLowerCase();
  const company = getString(payload.company);
  const interest = getString(payload.interest);
  const message = getString(payload.message);

  if (name.length < 2 || name.length > 120) {
    return jsonResponse({ error: "Please enter your full name." }, 400);
  }
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return jsonResponse({ error: "Please enter a valid email address." }, 400);
  }
  if (company.length < 2 || company.length > 160) {
    return jsonResponse({ error: "Please enter your company or organization." }, 400);
  }
  if (!interest || interest.length > 150) {
    return jsonResponse({ error: "Please choose a subject for your inquiry." }, 400);
  }
  if (message.length > 4000 || payload.consent !== true) {
    return jsonResponse({ error: "Please accept the contact terms and check your message." }, 400);
  }

  const plainText = [
    "New Arcalogix website inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Topic: ${interest}`,
    "",
    "Message:",
    message || "No additional message provided.",
    "",
    "Source: Arcalogix website — About Us",
  ].join("\n");

  const emailHtml = `
    <div style="font-family:Arial,sans-serif;color:#242424;max-width:640px;line-height:1.65">
      <h2 style="margin:0 0 10px">New Arcalogix website inquiry</h2>
      <p style="margin:0 0 24px;color:#666">Submitted from the About Us page.</p>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:9px 0;font-weight:700">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:9px 0;font-weight:700">Email</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding:9px 0;font-weight:700">Company</td><td>${escapeHtml(company)}</td></tr>
        <tr><td style="padding:9px 0;font-weight:700">Topic</td><td>${escapeHtml(interest)}</td></tr>
      </table>
      <h3 style="margin-bottom:8px">Message</h3>
      <p style="white-space:pre-wrap">${escapeHtml(message || "No additional message provided.")}</p>
    </div>
  `;

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `Arcalogix website — ${interest}`,
        html: emailHtml,
        text: plainText,
      }),
      cache: "no-store",
    });

    if (!resendResponse.ok) {
      // Detailed Resend errors appear only in server logs; credentials and sender
      // configuration should not be exposed to website visitors.
      const details = await resendResponse.text().catch(() => "");
      console.error("[about-contact] Resend rejected an email:", resendResponse.status, details);
      return jsonResponse(
        { error: "The email service could not send your message. Please try again later." },
        502
      );
    }

    return jsonResponse({ success: true }, 200);
  } catch (error) {
    console.error("[about-contact] Email service unreachable:", error);
    return jsonResponse(
      { error: "The email service is temporarily unavailable. Please try again later." },
      502
    );
  }
}
