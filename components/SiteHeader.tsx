"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./SiteHeader.module.css";

// Only the three homepage-section links are scroll anchors.
// About is a separate PAGE, never a #about anchor or Next.js soft-scroll link.
const links = [
  { href: "/#platform", label: "Platform" },
  { href: "/#standards", label: "Standards" },
  { href: "/#services", label: "Services" },
] as const;

function scrollToTopImmediately() {
  // Global CSS uses html { scroll-behavior: smooth } for in-page anchors.
  // Override that only for this user action, without changing other animations.
  const html = document.documentElement;
  const body = document.body;
  const previousHtml = html.style.scrollBehavior;
  const previousBody = body.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  body.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  // Restore existing styles after the instant jump is painted.
  window.requestAnimationFrame(() => {
    html.style.scrollBehavior = previousHtml;
    body.style.scrollBehavior = previousBody;
  });
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        {/* Use native document navigation from another page to avoid Next.js
            retaining an old homepage scroll position. On the homepage itself,
            jump to the top immediately instead of following a smooth anchor. */}
        <a
          href="/"
          className="brand-lockup"
          aria-label="Arcalogix home"
          onClick={(event) => {
            setMenuOpen(false);
            if (pathname === "/") {
              event.preventDefault();
              scrollToTopImmediately();
            }
            // From /about or another route, allow native navigation to /.
          }}
        >
          <Image src="/images/arcalogix-logo.webp" alt="Arcalogix" width={149} height={38} priority />
          <span className="brand-separator" aria-hidden="true" />
          <span className="brand-descriptor">SPATIAL INTELLIGENCE PLATFORM</span>
        </a>
        <nav className={`header-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Primary navigation" id="primary-navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          {/* Native page link deliberately bypasses Next.js client-side scroll restoration. */}
          <a
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            onClick={(event) => {
              setMenuOpen(false);
              // Re-selecting About while already there should jump to top,
              // not perform a smooth in-page animation.
              if (pathname === "/about") {
                event.preventDefault();
                scrollToTopImmediately();
              }
              // Otherwise allow the browser's ordinary navigation to /about.
            }}
          >
            About Us
          </a>
          {/* On phones, Submit comes first, followed by Sign In. */}
          <a className="button button-primary mobile-nav-cta" href="https://arcalogixdashboard.com/general-submit-project" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Submit a new project</a>
          <a
            className={`${styles.mobileSignIn} button button-secondary`}
            href="https://arcalogixdashboard.com/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </a>
        </nav>
        {/* Desktop/tablet: Submit a new project sits immediately LEFT of Sign In. */}
        <div className={styles.headerActions}>
          <a className="button button-primary header-cta" href="https://arcalogixdashboard.com/general-submit-project" target="_blank" rel="noopener noreferrer">Submit a new project</a>
          <a
            className={`button button-secondary ${styles.signInButton}`}
            href="https://arcalogixdashboard.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign In
          </a>
        </div>
        <button type="button" className={`menu-toggle ${menuOpen ? "menu-active" : ""}`} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((value) => !value)}>
          <span /><span />
        </button>
      </div>
    </header>
  );
}
