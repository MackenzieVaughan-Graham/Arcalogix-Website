"use client";

import Link from "next/link";
import Script from "next/script";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

type ContactContextValue = { openContact: (interest?: string) => void };
const ContactContext = createContext<ContactContextValue | null>(null);

export function useContact() {
  const value = useContext(ContactContext);
  if (!value) throw new Error("ContactButton must be used inside ContactProvider");
  return value;
}

export function ContactButton({
  children,
  className = "button button-primary",
  interest = "Portfolio strategy",
  onActivate,
}: {
  children: ReactNode;
  className?: string;
  interest?: string;
  onActivate?: () => void;
}) {
  const { openContact } = useContact();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onActivate?.();
        openContact(interest);
      }}
    >
      {children}
    </button>
  );
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [interest, setInterest] = useState("Portfolio strategy");
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const openContact = useCallback((nextInterest = "Portfolio strategy") => {
    setInterest(nextInterest);
    setCompleted(false);
    setError("");
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => nameRef.current?.focus(), 60);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !dialogRef.current) return;
      const candidates = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled])'
        )
      ).filter((item) => item.getClientRects().length > 0);
      const first = candidates[0];
      const last = candidates[candidates.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const turnstileToken = String(data.get("cf-turnstile-response") || "");
    if (siteKey && !turnstileToken) {
      setError("Please complete the verification before submitting.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: String(data.get("fullName") || ""),
          workEmail: String(data.get("workEmail") || ""),
          company: String(data.get("company") || ""),
          role: String(data.get("role") || ""),
          portfolioSize: String(data.get("portfolioSize") || ""),
          interest: String(data.get("interest") || ""),
          message: String(data.get("message") || ""),
          consent: data.get("consent") === "on",
          website: String(data.get("website") || ""),
          turnstileToken,
        }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "The enquiry could not be submitted.");
      form.reset();
      setCompleted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send your enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <ContactContext.Provider value={{ openContact }}>
      {children}
      {siteKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />}
      {open && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title" ref={dialogRef}>
            <button className="dialog-close" aria-label="Close contact form" type="button" onClick={() => setOpen(false)}>×</button>
            {completed ? (
              <div className="contact-done" role="status">
                <span className="done-icon">✓</span>
                <p className="eyebrow">ENQUIRY RECEIVED</p>
                <h2 id="contact-dialog-title">Thank you. We&apos;ll be in touch.</h2>
                <p>Your enquiry is with the Arcalogix team.</p>
                <button type="button" className="button button-primary" onClick={() => setOpen(false)}>Close</button>
              </div>
            ) : (
              <>
                <p className="eyebrow">LET&apos;S TALK PORTFOLIOS</p>
                <h2 id="contact-dialog-title">What are you planning next?</h2>
                <p className="dialog-intro">Tell us a little about your spaces. We&apos;ll follow up to discuss the right starting point.</p>
                <form className="contact-form" onSubmit={submit}>
                  <div className="form-two">
                    <label>Full name<input ref={nameRef} name="fullName" required minLength={2} maxLength={120} autoComplete="name" placeholder="Your name" /></label>
                    <label>Work email<input name="workEmail" type="email" required maxLength={254} autoComplete="email" placeholder="name@company.com" /></label>
                  </div>
                  <div className="form-two">
                    <label>Company<input name="company" required minLength={2} maxLength={160} autoComplete="organization" placeholder="Company name" /></label>
                    <label>Your role
                      <select name="role" defaultValue="">
                        <option value="" disabled>Select a role</option>
                        <option>Corporate real estate</option>
                        <option>Workplace / facilities</option>
                        <option>Landlord / asset management</option>
                        <option>Architecture / design</option>
                        <option>Other</option>
                      </select>
                    </label>
                  </div>
                  <div className="form-two">
                    <label>Portfolio size
                      <select name="portfolioSize" defaultValue="">
                        <option value="">Prefer not to say</option>
                        <option>1–5 locations</option>
                        <option>6–25 locations</option>
                        <option>26–100 locations</option>
                        <option>100+ locations</option>
                      </select>
                    </label>
                    <label>Primary interest
                      <select name="interest" value={interest} onChange={(e) => setInterest(e.target.value)} required>
                        <option>Portfolio strategy</option>
                        <option>Test fits and planning</option>
                        <option>Design and permitting</option>
                        <option>Portfolio intelligence</option>
                        <option>Digital twins and IoT</option>
                        <option>Landlord space marketing</option>
                      </select>
                    </label>
                  </div>
                  <label>Tell us about your project <span className="optional-label">Optional</span>
                    <textarea name="message" maxLength={2000} rows={3} placeholder="Locations, project timing, or what you're trying to decide" />
                  </label>
                  <div className="offscreen-trap" aria-hidden="true"><label>Do not complete<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
                  {siteKey && <div className="cf-turnstile" data-sitekey={siteKey} />}
                  <label className="form-consent">
                    <input name="consent" type="checkbox" required />
                    <span>I agree to be contacted about this enquiry and understand how my information is used under the <Link href="/privacy" onClick={() => setOpen(false)}>privacy notice</Link>.</span>
                  </label>
                  {error && <p className="form-error" role="alert">{error}</p>}
                  <button type="submit" className="button button-primary form-submit" disabled={submitting}>{submitting ? "Sending…" : "Send enquiry"}<span aria-hidden="true">↗</span></button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </ContactContext.Provider>
  );
}
