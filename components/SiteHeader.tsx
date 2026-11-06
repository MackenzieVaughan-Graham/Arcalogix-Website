"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  window.requestAnimationFrame(() => {
    html.style.scrollBehavior = previous;
  });
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <Link href="/" className="brand-lockup" aria-label="Arcalogix home" onClick={() => setMenuOpen(false)}>
          <Image src="/images/arcalogix-logo.webp" alt="Arcalogix" width={149} height={38} priority />
          <span className="brand-separator" aria-hidden="true" />
          <span className="brand-descriptor">SPATIAL INTELLIGENCE PLATFORM</span>
        </Link>
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
          <a className="button button-primary mobile-nav-cta" href="https://arcalogixdashboard.com/general-submit-project" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Submit a new project <span aria-hidden="true">↗</span></a>
        </nav>
        <a className="button button-primary header-cta" href="https://arcalogixdashboard.com/general-submit-project" target="_blank" rel="noopener noreferrer">Submit a new project <span aria-hidden="true">↗</span></a>
        <button type="button" className={`menu-toggle ${menuOpen ? "menu-active" : ""}`} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((value) => !value)}>
          <span /><span />
        </button>
      </div>
    </header>
  );
}
