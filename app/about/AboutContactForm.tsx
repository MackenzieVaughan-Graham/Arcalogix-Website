"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import styles from "./about.module.css";

type ContactFields = {
  full_name: string;
  work_email: string;
  company: string;
  interest: string;
  message: string;
  website: string; // Hidden anti-spam field.
};

const initialFields: ContactFields = {
  full_name: "",
  work_email: "",
  company: "",
  interest: "",
  message: "",
  website: "",
};

/** Posts demo/chat inquiries to the isolated About Us Resend endpoint. */
export default function AboutContactForm() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [fields, setFields] = useState<ContactFields>(initialFields);
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 0);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const elements = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]'
      )).filter((element) => element.offsetParent !== null);
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = priorOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  function updateField(name: keyof ContactFields, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
  }

  function openForm() {
    setError("");
    setSent(false);
    setFields((current) => ({ ...current, interest: current.interest || "Request a chat or demo" }));
    setOpen(true);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent || sending) return;
    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/about-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fields.full_name.trim(),
          work_email: fields.work_email.trim().toLowerCase(),
          company: fields.company.trim(),
          role: null,
          portfolio_size: null,
          interest: fields.interest,
          message: fields.message.trim() || null,
          consent: true,
          website: fields.website,
        }),
      });
      const result = await response.json().catch(() => null) as { error?: string; message?: string } | null;
      if (!response.ok) {
        setError(result?.error || result?.message || "Your message could not be sent. Please try again.");
        return;
      }
      setSent(true);
      setFields(initialFields);
      setConsent(false);
    } catch {
      setError("We could not reach the contact service. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={styles.contactOpenButton}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={openForm}
      >
        Request a chat or demo
      </button>
      {mounted && open && createPortal(
        <div
          className={styles.contactBackdrop}
          onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}
        >
          <div
            ref={dialogRef}
            id="arcalogix-about-contact-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="arcalogix-contact-title"
            aria-describedby="arcalogix-contact-description"
            className={styles.contactDialog}
          >
            <button type="button" className={styles.contactCloseButton} aria-label="Close contact form" onClick={() => setOpen(false)}>×</button>
            {sent ? (
              <div className={styles.contactSuccess} role="status">
                <span className={styles.contactEyebrow}>MESSAGE RECEIVED</span>
                <h2 id="arcalogix-contact-title">Thank you for reaching out.</h2>
                <p id="arcalogix-contact-description">Your inquiry has been submitted to the Arcalogix team.</p>
                <button type="button" onClick={() => setOpen(false)}>Close</button>
              </div>
            ) : (
              <>
                <span className={styles.contactEyebrow}>WORK WITH ARCALOGIX</span>
                <h2 id="arcalogix-contact-title">Let's talk.</h2>
                <p id="arcalogix-contact-description" className={styles.contactIntro}>
                  Send us a note about your project, partnership idea, or the platform you would like to see. We'll follow up to discuss a call or demo.
                </p>
                <form className={styles.contactForm} onSubmit={submit}>
                  <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                    <label>Website<input name="website" tabIndex={-1} autoComplete="off" value={fields.website} onChange={(event) => updateField("website", event.target.value)} /></label>
                  </div>
                  <div className={styles.contactGrid}>
                    <label className={styles.contactField}>Full name *
                      <input ref={firstFieldRef} name="full_name" type="text" autoComplete="name" minLength={2} maxLength={120} required value={fields.full_name} onChange={(event) => updateField("full_name", event.target.value)} />
                    </label>
                    <label className={styles.contactField}>Work email *
                      <input name="work_email" type="email" autoComplete="email" maxLength={254} required value={fields.work_email} onChange={(event) => updateField("work_email", event.target.value)} />
                    </label>
                  </div>
                  <label className={styles.contactField}>Company / organization *
                    <input name="company" type="text" autoComplete="organization" minLength={2} maxLength={160} required value={fields.company} onChange={(event) => updateField("company", event.target.value)} />
                  </label>
                  <label className={styles.contactField}>What would you like to discuss? *
                    <select name="interest" required value={fields.interest} onChange={(event) => updateField("interest", event.target.value)}>
                      <option value="">Select a topic</option>
                      <option value="Request a chat or demo">Request a chat or demo</option>
                      <option value="Discuss a project">Discuss a project</option>
                      <option value="Portfolio and workspace strategy">Portfolio and workspace strategy</option>
                      <option value="Technology or professional partnership">Technology or professional partnership</option>
                      <option value="Platform access">Platform access</option>
                      <option value="General inquiry">General inquiry</option>
                    </select>
                  </label>
                  <label className={styles.contactField}>Message (optional)
                    <textarea name="message" rows={4} maxLength={4000} value={fields.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Tell us a little about your goals..." />
                  </label>
                  <label className={styles.contactConsent}>
                    <input name="consent" type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required />
                    <span>I agree to be contacted by Arcalogix about this inquiry. See our <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</span>
                  </label>
                  {error && <p className={styles.contactError} role="alert">{error}</p>}
                  <button className={styles.contactSubmit} type="submit" disabled={sending || !consent}>
                    {sending ? "Sending your message…" : "Send inquiry"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
