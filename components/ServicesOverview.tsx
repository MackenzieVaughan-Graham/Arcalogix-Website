"use client";

import { useEffect, useRef, useState } from "react";
import { ContactButton } from "@/components/ContactProvider";

const PROJECT_URL = "https://arcalogixdashboard.com/general-submit-project";

/** Applications share the original Arcalogix scroll-service styling.
 * No separate card system is introduced here. */
const services = [
  {
    number: "01", label: "PLAN + COMPARE", title: "Standards-based test fitting",
    description: "Know whether a space fits your requirements before making a real estate commitment. Each test fit is reviewed by our internal architectural team.",
    qualifier: "PER PROJECT", price: "$0.15", unit: "/ sq ft",
    priceDetail: "Includes two iterations and the first 12 months of SIM hosting",
    inclusions: ["Your occupier standards applied to the plan", "Interactive 3D Spatial Intelligence Model", "Two-business-day standard delivery after confirmation", "12 months of SIM hosting included"],
    image: "/images/platform-furnished-model.png", interest: "Test fits and planning", primary: true,
  },
  {
    number: "02", label: "DESIGN + DELIVER", title: "Design & permitting",
    description: "Carry approved planning decisions forward through design development, documentation and coordinated professional services.",
    qualifier: "PROFESSIONAL SERVICES FROM", price: "$75", unit: "/ hour",
    priceDetail: "Professional services priced according to project scope",
    inclusions: ["Design development and drawing coordination", "Documentation and permitting support", "Locally qualified professional sign-off where required"],
    image: "/images/drawing-prototype.webp", interest: "Design and permitting", primary: false,
  },
  {
    number: "03", label: "HOST + COMPARE", title: "SIM hosting & portfolio context",
    description: "Keep spatial models accessible across your portfolio, revisit scenarios and compare properties without reconstructing information for each project.",
    qualifier: "AFTER INCLUDED PERIOD", price: "$0.01", unit: "/ sq ft / month",
    priceDetail: "For each SIM hosted beyond its included period",
    inclusions: ["Persistent Spatial Intelligence Model records", "Consistent standards across locations", "Revisit layouts and compare planning scenarios"],
    image: "/images/platform-model-shell.png", interest: "Portfolio intelligence", primary: false,
  },
  {
    number: "04", label: "OPERATE + CONNECT", title: "Digital twins & connected operations",
    description: "Extend a hosted SIM with occupancy, asset and building-service information as compatible integrations are implemented.",
    qualifier: "CONNECTED OPERATIONS FROM", price: "$10", unit: "/ device / month",
    priceDetail: "Expanding service; connected sensors and integrations are scoped separately",
    inclusions: ["Foundation for an operational digital twin", "Potential utilization, IoT and asset integrations", "Active SIM hosting required"],
    image: "/images/iot-asset-diagram.svg", interest: "Digital twins and IoT", primary: false,
  },
];

function clamp(value: number) { return Math.max(0, Math.min(1, value)); }

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [stacked, setStacked] = useState(false);

  // The previous 780px-height cutoff disabled scrolling on common laptop screens.
  // Keep the original site's breakpoint, but only stack on truly constrained screens.
  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 950px), (max-height: 520px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setStacked(narrow.matches || reduced.matches);
    sync();
    narrow.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => { narrow.removeEventListener("change", sync); reduced.removeEventListener("change", sync); };
  }, []);

  useEffect(() => {
    if (stacked) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const bounds = section.getBoundingClientRect();
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 88;
      const scrollDistance = Math.max(1, bounds.height - window.innerHeight);
      const progress = clamp((header - bounds.top) / scrollDistance);
      const next = Math.min(services.length - 1, Math.floor(progress * services.length));
      setActiveIndex((current) => current === next ? current : next);
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [stacked]);

  return (
    <section id="services" ref={sectionRef} className="service-story" aria-labelledby="services-heading" data-active-service={stacked ? "all" : services[activeIndex].number}>
      <div className="service-story-sticky">
        <div className="page-shell service-story-grid">
          <div className="service-story-intro">
            <p className="eyebrow">04 / APPLICATIONS + SERVICES</p>
            <h2 id="services-heading">One platform.<br /><span>Multiple ways to put it to work.</span></h2>
            <p className="section-lede">From portfolio decisions to project delivery and ongoing operations, choose the applications that meet your needs. Every service builds on the same spatial information.</p>
            <div className="services-scroll-progress" aria-label={stacked ? "All services" : `Service ${activeIndex + 1} of 4`}>
              {services.map((service, index) => <i key={service.number} className={!stacked && index === activeIndex ? "current" : ""} />)}
            </div>
          </div>
          <div className="service-story-viewport">
            <div className="service-story-backgrounds" aria-hidden="true">
              {services.map((service, index) => <div key={service.number} className={`service-story-background${!stacked && activeIndex === index ? " is-active" : ""}`} style={{ backgroundImage: `url("${service.image}")` }} />)}
            </div>
            {services.map((service, index) => {
              const visible = stacked || index === activeIndex;
              return (
                <article key={service.number} className={`service-story-panel${visible ? " is-active" : ""}`} aria-hidden={!visible} inert={!visible} style={{ pointerEvents: visible ? "auto" : "none" }}>
                  <div className="service-panel-mobile-image" aria-hidden="true" style={{ backgroundImage: `url("${service.image}")` }} />
                  <div className="service-row-top"><span>{service.number} / {service.label}</span></div>
                  <h3>{service.title}</h3>
                  <p className="service-row-description">{service.description}</p>
                  <div className="service-price" aria-label={`${service.qualifier}: ${service.price} ${service.unit}`}>
                    <span className="service-price-qualifier">{service.qualifier}</span>
                    <div className="service-price-figure"><strong>{service.price}</strong><span>{service.unit}</span></div>
                    <span className="service-price-detail">{service.priceDetail}</span>
                  </div>
                  <ul className="service-includes">{service.inclusions.map((item) => <li key={item}>{item}</li>)}</ul>
                  {service.primary ? (
                    <a className="service-link" href={PROJECT_URL} target="_blank" rel="noopener noreferrer">Submit a new project</a>
                  ) : (
                    <ContactButton className="service-link" interest={service.interest}>Discuss this application</ContactButton>
                  )}
                </article>
              );
            })}
          </div>
        </div>
        <p className="page-shell service-story-note">Published rates and delivery are subject to confirmed scope and terms. Operational IoT integrations are expanding capabilities; active SIM hosting is required for connected operations.</p>
      </div>
    </section>
  );
}
