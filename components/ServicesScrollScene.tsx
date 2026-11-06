"use client";

import { useEffect, useRef, useState } from "react";
import { ContactButton } from "@/components/ContactProvider";

const PROJECT_URL = "https://arcalogixdashboard.com/general-submit-project";

const services = [
  {
    number: "01", label: "PLANNING", title: "Test fitting",
    description: "See how a potential or existing space fits your requirements before committing. Our design team applies your workplace standards to each test fit.",
    priceQualifier: "PER PROJECT", price: "$0.15", priceUnit: "/ sq ft",
    priceDetail: "Includes 2 free iterations per project",
    items: ["Standards-based test fitting", "Space planning and layout options", "Two included iterations"],
    image: "/images/portfolio-model.webp",
    imageDescription: "3D office model used for workplace test-fit planning",
    interest: "Test fits and planning",
  },
  {
    number: "02", label: "DELIVERY", title: "Design & permitting support",
    description: "Move an approved layout forward with professional design services, drawing coordination and permitting support, with locally qualified professionals where required.",
    priceQualifier: "PROFESSIONAL SERVICES FROM", price: "$75", priceUnit: "/ hour",
    priceDetail: "Starting rate for professional services",
    items: ["Design development", "Drawing and document coordination", "Permitting support"],
    image: "/images/drawing-prototype.webp",
    imageDescription: "Architectural drawing-set prototype showing plans, schedules and elevations",
    interest: "Design and permitting",
  },
  {
    number: "03", label: "INTELLIGENCE", title: "Portfolio intelligence",
    description: "Keep your Spatial Intelligence Models (SIMs) active in one platform so you can revisit spaces, compare planning scenarios and build consistent portfolio context.",
    priceQualifier: "LIVE SIM HOSTING", price: "$0.01", priceUnit: "/ sq ft / month",
    priceDetail: "For each SIM kept live on the platform",
    items: ["Persistent spatial model records", "Portfolio-wide planning context", "Standards and scenario comparison"],
    image: "/images/existing-space.webp",
    imageDescription: "Structured spatial model representing a reusable digital record",
    interest: "Portfolio intelligence",
  },
  {
    number: "04", label: "OPERATIONS", title: "Digital twins, IoT & assets",
    description: "Extend the spatial record into occupied-space operations with connected sensor and asset information as those capabilities are implemented.",
    priceQualifier: "CONNECTED OPERATIONS FROM", price: "$10", priceUnit: "/ device / month",
    priceDetail: "Starting price per connected device",
    items: ["Digital twin foundations", "Optional IoT occupancy and environmental inputs", "Space and asset context"],
    image: "/images/iot-asset-diagram.svg",
    imageDescription: "Illustrative floor-plan sensor and asset connection schematic",
    interest: "Digital twins and IoT",
  },
];

const clamp = (value: number) => Math.max(0, Math.min(1, value));

export default function ServicesScrollScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState(0);
  const [stacked, setStacked] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 950px), (max-height: 630px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncStacked = () => setStacked(query.matches || reduce.matches);
    syncStacked();
    query.addEventListener("change", syncStacked);
    reduce.addEventListener("change", syncStacked);
    return () => {
      query.removeEventListener("change", syncStacked);
      reduce.removeEventListener("change", syncStacked);
    };
  }, []);

  useEffect(() => {
    if (stacked || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPosition(0);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const bounds = section.getBoundingClientRect();
      const distance = Math.max(1, bounds.height - window.innerHeight);
      const progress = clamp(-bounds.top / distance);
      setPosition(progress * (services.length - 1));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [stacked]);

  const activeIndex = Math.max(0, Math.min(services.length - 1, Math.round(position)));
  return (
    <section id="services" ref={sectionRef} className="service-story" aria-labelledby="services-heading">
      <div className="service-story-sticky">
        <div className="page-shell service-story-grid">
          <div className="service-story-intro">
            <p className="eyebrow">03 / PLATFORM + SERVICES</p>
            <h2 id="services-heading">Software for the decisions.<br /><span>People for the delivery.</span></h2>
            <p className="section-lede">One connected spatial platform, backed by our internal design team. Standardize planning across locations, deliver your projects, and keep the information useful long after move-in.</p>
            <div className="service-story-track" aria-label="Four connected services">
              {services.map((service, index) => <span key={service.number} className={activeIndex === index ? "is-current" : ""}>{service.number}</span>)}
            </div>
          </div>
          <div className="service-story-viewport">
            <div className="service-story-backgrounds" aria-hidden="true">
              {services.map((service, index) => (
                <div key={service.number} className="service-story-background" style={{ backgroundImage: `url("${service.image}")`, opacity: stacked ? 0 : clamp(1 - Math.abs(position - index)) * 0.22 }} />
              ))}
            </div>
            {services.map((service, index) => {
              const opacity = stacked ? 1 : clamp(1 - Math.abs(position - index));
              const interactive = stacked || activeIndex === index;
              return (
                <article
                  className="service-story-panel"
                  key={service.number}
                  style={{ opacity, pointerEvents: interactive ? "auto" : "none" }}
                  aria-hidden={!interactive}
                  inert={!interactive}
                >
                  <div className="service-panel-mobile-image" aria-hidden="true" style={{ backgroundImage: `url("${service.image}")` }} />
                  <div className="service-row-top"><span>{service.number} / {service.label}</span><span className="service-row-icon" aria-hidden="true">↗</span></div>
                  <h3>{service.title}</h3>
                  <p className="service-row-description">{service.description}</p>
                  <div className="service-price" aria-label={`${service.priceQualifier}: ${service.price} ${service.priceUnit}`}>
                    <span className="service-price-qualifier">{service.priceQualifier}</span>
                    <div className="service-price-figure"><strong>{service.price}</strong><span>{service.priceUnit}</span></div>
                    <span className="service-price-detail">{service.priceDetail}</span>
                  </div>
                  <ul className="service-includes">{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  {index === 0 ? (
                    <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="service-link">
                      Submit a project <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <ContactButton className="service-link" interest={service.interest}>
                      Discuss this service <span aria-hidden="true">↗</span>
                    </ContactButton>
                  )}
                </article>
              );
            })}
          </div>
        </div>
        <p className="page-shell service-story-note">Final scope, third-party costs, professional sign-off and availability depend on the project and jurisdiction. Digital twin and IoT capabilities are an expanding part of the offering.</p>
      </div>
    </section>
  );
}
