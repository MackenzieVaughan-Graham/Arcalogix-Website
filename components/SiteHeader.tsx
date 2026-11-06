"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#standards", label: "Standards" },
  { href: "#services", label: "Services" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <Link href="/" className="brand-lockup" aria-label="Arcalogix home" onClick={() => setMenuOpen(false)}>
          <Image src="/images/arcalogix-logo.webp" alt="Arcalogix" width={149} height={38} priority />
          <span className="brand-separator" aria-hidden="true" />
          <span className="brand-descriptor">SPATIAL INTELLIGENCE PLATFORM</span>
        </Link>
        <nav className={`header-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Primary navigation" id="primary-navigation">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
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
