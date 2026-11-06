"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    label: "CAPTURE",
    title: "Begin with a floor plan.",
    body: "Bring existing drawings into one workspace. We turn static information into a structured starting point for each space.",
    image: "/images/floor-plan.webp",
    alt: "Architectural floor plan used as a starting document",
    previewLabel: "SOURCE DOCUMENT",
  },
  {
    number: "02",
    label: "STRUCTURE",
    title: "Build a usable spatial model.",
    body: "Connect geometry, room information, and building context to a Spatial Intelligence Model instead of restarting from the last PDF.",
    image: "/images/existing-space.webp",
    alt: "Structured spatial model of an existing building interior",
    previewLabel: "SPATIAL MODEL",
  },
  {
    number: "03",
    label: "STANDARDIZE",
    title: "Test every option against your standards.",
    body: "Apply the same workplace rules and space requirements to test fits, comparisons, and future build-out plans across locations.",
    image: "/images/portfolio-model.webp",
    alt: "Rendered office layout showing spaces and planning relationships",
    previewLabel: "MODEL-BASED TEST FIT",
  },
  {
    number: "04",
    label: "INFORM",
    title: "Turn space data into better decisions.",
    body: "Use consistent portfolio information to evaluate capacity, program fit, and scenarios. Extend the model with operational and IoT data as those capabilities are implemented.",
    image: null,
    alt: "",
    previewLabel: "ILLUSTRATIVE PORTFOLIO VIEW",
  },
];

function IllustrativeIntelligence() {
  return (
    <div className="intelligence-view" aria-label="Illustrative intelligence framework, not real client data">
      <div className="intelligence-top"><span className="intelligence-dot" /> PORTFOLIO INSIGHTS <small>ILLUSTRATIVE VIEW</small></div>
      <div className="intelligence-title">Compare space against policy.</div>
      <div className="metric-grid">
        <div><span>PROGRAM</span><strong>Workpoints</strong><div className="bar-rail"><i style={{ width: "74%" }} /></div><small>Compare to target</small></div>
        <div><span>SPACE</span><strong>Area allocation</strong><div className="bar-rail"><i style={{ width: "58%" }} /></div><small>Track against standard</small></div>
        <div><span>UTILIZATION</span><strong>Occupancy signals</strong><div className="bar-rail"><i style={{ width: "39%" }} /></div><small>Optional IoT layer</small></div>
      </div>
      <div className="intelligence-bottom"><span className="intelligence-signal" /> One consistent spatial record <span>→</span> Better decisions</div>
    </div>
  );
}

export default function PlatformJourney() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!window.IntersectionObserver) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const index = Number((visible[0].target as HTMLElement).dataset.index);
          if (!Number.isNaN(index)) setActive(index);
        }
      },
      { threshold: [0.2, 0.5, 0.7], rootMargin: "-15% 0px -20% 0px" }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="platform" className="journey-section section-pad" aria-labelledby="journey-heading">
      <div className="page-shell">
        <div className="section-heading journey-heading">
          <p className="eyebrow">01 / THE PLATFORM</p>
          <h2 id="journey-heading">It starts with a floor plan.<br /><span>It becomes a decision engine.</span></h2>
          <p className="section-lede">Your portfolio already contains the information you need. Arcalogix makes it usable, consistent, and connected.</p>
        </div>
        <div className="journey-grid">
          <div className="journey-steps">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`journey-step ${active === index ? "journey-step-active" : ""}`}
                ref={(el) => { stepRefs.current[index] = el; }}
                data-index={index}
              >
                <span className="journey-num">{step.number} / {step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
          <div className="journey-preview-col">
            <div className="journey-preview">
              <div className="preview-header"><span className="preview-status"><i /> SPATIAL RECORD</span><span>ARCALOGIX / PLATFORM</span></div>
              <div className="preview-window" key={active}>
                {steps[active].image ? (
                  <Image src={steps[active].image} alt={steps[active].alt} fill sizes="(max-width: 900px) 95vw, 55vw" />
                ) : <IllustrativeIntelligence />}
              </div>
              <div className="preview-footer"><span>{steps[active].previewLabel}</span><div className="preview-progress">{steps.map((step, i) => <i key={step.number} className={i === active ? "current" : ""} />)}</div><span>{steps[active].number} / 04</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
