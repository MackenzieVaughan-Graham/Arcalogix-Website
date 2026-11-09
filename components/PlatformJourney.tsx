"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    label: "VALIDATE",
    title: "Know what the building can support.",
    body: "We begin with the 2D floor plan, reviewing dimensions, geometry and architectural conditions so every decision starts from a reliable understanding of the space.",
    resultLabel: "WHAT YOU GET",
    result: "Validated building information, ready to use.",
    image: "/images/platform-floorplan.png",
    alt: "Original architectural floor plan showing room boundaries, columns, dimensions and building conditions",
    previewLabel: "SOURCE DRAWING / EVALUATION",
  },
  {
    number: "02",
    label: "MODEL",
    title: "Build a spatial record you can reuse.",
    body: "Validated drawings become an interactive 3D Spatial Intelligence Model (SIM), connecting geometry and architectural information to one persistent spatial record.",
    resultLabel: "WHAT YOU GET",
    result: "A digital foundation for planning, delivery and future use.",
    image: "/images/platform-model-shell.png",
    alt: "3D architectural shell and walls reconstructed over a two-dimensional source drawing",
    previewLabel: "3D SPATIAL INTELLIGENCE MODEL",
  },
  {
    number: "03",
    label: "APPLY STANDARDS",
    title: "Make every option comparable.",
    body: "Your company requirements guide the test fit: capacity, room programs, circulation and workplace standards. Our internal architectural team reviews the result before delivery.",
    resultLabel: "REPEATABLE PLANNING",
    result: "A verified 3D test fit you can compare across locations.",
    image: "/images/platform-furnished-model.png",
    alt: "Developed 3D test fit with internal rooms, work areas and furniture arranged over the source plan",
    previewLabel: "STANDARDS-BASED TEST FIT",
  },
  {
    number: "04",
    label: "EXTEND",
    title: "Keep using the model after the decision.",
    body: "If you choose the location, its hosted SIM can carry into operations. As integrations expand, it can connect occupancy, assets, maintenance, service and energy usage, and operational costs.",
    resultLabel: "EXPANDING CAPABILITIES",
    result: "An operational digital-twin foundation. Active SIM hosting and compatible integrations required.",
    image: null,
    alt: "",
    previewLabel: "ILLUSTRATIVE PORTFOLIO INTELLIGENCE",
  },
];

function IllustrativeIntelligence() {
  return (
    <div className="intelligence-view" aria-label="Illustrative portfolio intelligence view, not live client data">
      <div className="intelligence-top"><span className="intelligence-dot" /> PORTFOLIO INSIGHTS <small>ILLUSTRATIVE</small></div>
      <div className="intelligence-title">One model. More useful decisions.</div>
      <div className="metric-grid">
        <div><span>SPACE</span><strong>Program fit</strong><div className="bar-rail"><i style={{ width: "74%" }} /></div><small>Compare to standard</small></div>
        <div><span>ASSETS</span><strong>Equipment</strong><div className="bar-rail"><i style={{ width: "58%" }} /></div><small>Connect asset records</small></div>
        <div><span>USAGE</span><strong>Occupancy</strong><div className="bar-rail"><i style={{ width: "39%" }} /></div><small>Optional sensor inputs</small></div>
      </div>
      <div className="intelligence-bottom"><span className="intelligence-signal" /> A connected spatial record <span>·</span> From planning to operations</div>
    </div>
  );
}

/** Passive, scroll-synced visual. Does not override the user's scroll position. */
export default function PlatformJourney() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const compact = window.matchMedia("(max-width: 680px)").matches;
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 88;
      const readingLine = header + (window.innerHeight - header) * (compact ? 0.72 : 0.51);
      let selected = 0;
      let minDistance = Infinity;
      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        const bounds = step.getBoundingClientRect();
        const center = bounds.top + bounds.height / 2;
        const distance = Math.abs(center - readingLine);
        if (distance < minDistance) {
          minDistance = distance;
          selected = index;
        }
      });
      setActive((current) => current === selected ? current : selected);
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="platform" className="journey-section section-pad" aria-labelledby="journey-heading">
      <div className="page-shell">
        <div className="section-heading journey-heading">
          <p className="eyebrow">02 / THE PLATFORM</p>
          <h2 id="journey-heading">From a floor plan<br /><span>to a lasting spatial record.</span></h2>
          <p className="section-lede">The same information should do more than answer one project question. See how Arcalogix builds the spatial foundation that supports decisions from evaluation through operations.</p>
        </div>
        <div className="journey-grid">
          <div className="journey-steps">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`journey-step ${active === index ? "journey-step-active" : ""}`}
                ref={(el) => { stepRefs.current[index] = el; }}
                aria-current={active === index ? "step" : undefined}
              >
                <span className="journey-num">{step.number} / {step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <div className="journey-outcome"><small>{step.resultLabel}</small><strong>{step.result}</strong></div>
              </div>
            ))}
          </div>
          <div className="journey-preview-col">
            <div className="journey-preview">
              <div className="preview-header"><span className="preview-status"><i /> ARCALOGIX / SPATIAL WORKFLOW</span><span>01—04</span></div>
              <div className={`preview-window ${steps[active].image ? "preview-window-scene" : ""} preview-window-step-${steps[active].number}`} key={active}>
                {steps[active].image ? (
                  <div className="preview-scene-wrap">
                    <Image src={steps[active].image} alt={steps[active].alt} fill sizes="(max-width: 900px) 95vw, 55vw" className="preview-scene-image" />
                  </div>
                ) : <IllustrativeIntelligence />}
              </div>
              <div className="preview-footer"><span>{steps[active].previewLabel}</span><div className="preview-progress" aria-hidden="true">{steps.map((step, index) => <i key={step.number} className={index === active ? "current" : ""} />)}</div><span>{steps[active].number} / 04</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
