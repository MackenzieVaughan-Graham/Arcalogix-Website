import Link from "next/link";

export const metadata = { title: "Privacy | Arcalogix" };

export default function PrivacyPage() {
  return (
    <main className="legal-page page-shell">
      <Link href="/" className="legal-back">← Back to Arcalogix</Link>
      <p className="eyebrow">PRIVACY</p>
      <h1>Your enquiry. Your information.</h1>
      <p>
        When you contact Arcalogix through this site, we collect the details you provide—
        such as your name, business email, company, interests, and message—to respond to
        your enquiry and discuss potential services.
      </p>
      <p>
        This starter website stores enquiries in a private Supabase database configured
        by the site operator. Access should be restricted to authorized Arcalogix team members.
        We do not use the enquiry form as an automatic marketing subscription.
      </p>
      <p>
        If optional Cloudflare Turnstile protection is enabled, the verification provider
        processes technical information to help protect the form from automated submissions.
      </p>
      <p>
        For access, correction, or deletion requests, contact the Arcalogix team through
        the company’s published contact channels. Before production launch, the business
        should replace this starter notice with its complete, legally reviewed privacy policy,
        including the correct contact address, retention period, and applicable rights.
      </p>
    </main>
  );
}
