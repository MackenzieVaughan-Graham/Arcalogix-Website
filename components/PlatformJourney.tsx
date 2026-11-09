"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    label: "CAPTURE",
    title: "Begin with a floor plan.",
    body: "Bring existing drawings into one workspace. We turn static information into a structured starting point for each space.",
    image: "/images/platform-floorplan.png",
    alt: "2D architectural floor plan used as the starting document for spatial modelling",
    previewLabel: "SOURCE DOCUMENT",
  },
  {
    number: "02",
    label: "STRUCTURE",
    title: "Build a usable spatial model.",
    body: "Connect geometry, room information, and building context to a Spatial Intelligence Model instead of restarting from the last PDF.",
    image: "/images/platform-model-shell.png",
    alt: "Early-stage 3D building shell developed from a verified floor plan",
    previewLabel: "SPATIAL MODEL",
  },
  {
    number: "03",
    label: "STANDARDIZE",
    title: "Test every option against your standards.",
    body: "Apply the same workplace rules and space requirements to test fits, comparisons, and future build-out plans across locations.",
    image: "/images/platform-furnished-model.png",
    alt: "Detailed spatial model showing a developed test fit aligned to customer standards",
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

/**
 * One reading position for both the left-side title and the right-side visual.
 * A preview changes only after its corresponding title reaches the reading
 * position. On desktop, natural scrolling settles to the nearest title after
 * a short pause; there is no wheel interception or scroll lock.
 */
export default function PlatformJourney() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compact = window.matchMedia("(max-width: 680px)");
    const touch = window.matchMedia("(pointer: coarse)");
    let frame = 0;
    let settleTimer = 0;
    let unlockTimer = 0;
    let snapping = false;

    // Center of the usable viewport (excluding the sticky navigation bar).
    const readingLine = () => {
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 88;
      return compact.matches
        ? header + (window.innerHeight - header) * 0.73
        : header + (window.innerHeight - header) * 0.49;
    };

    const positions = () => stepRefs.current.map((element, index) => {
      const heading = element?.querySelector("h3");
      if (!heading) return null;
      const rect = heading.getBoundingClientRect();
      return { index, center: rect.top + rect.height / 2 };
    }).filter((item): item is { index: number; center: number } => item !== null);

    const closest = () => {
      const line = readingLine();
      const options = positions();
      const item = options.reduce<{ index: number; center: number } | null>((best, next) => {
        return !best || Math.abs(next.center - line) < Math.abs(best.center - line) ? next : best;
      }, null);
      return { item, line, options };
    };

    const update = () => {
      frame = 0;
      const { item, line } = closest();
      if (!item) return;
      // Never change the visual early: wait for the title to reach the same
      // alignment position used by the desktop scroll-settle interaction.
      const switchDistance = compact.matches ? window.innerHeight * 0.16 : Math.max(22, window.innerHeight * 0.032);
      if (Math.abs(item.center - line) <= switchDistance) {
        setActive((current) => current === item.index ? current : item.index);
      }
    };

    const settle = () => {
      if (snapping || compact.matches || touch.matches || reducedMotion.matches) return;
      const { item, line, options } = closest();
      if (!item || options.length !== steps.length || !sectionRef.current) return;
      const bounds = sectionRef.current.getBoundingClientRect();
      const first = options[0].center;
      const last = options[options.length - 1].center;
      // Only settle while reading the steps. Don't pull the user back into
      // the section while entering from above or leaving for the next section.
      if (bounds.top >= line || bounds.bottom <= line ||
          first > line + window.innerHeight * 0.24 ||
          last < line - window.innerHeight * 0.24) return;
      const offset = item.center - line;
      if (Math.abs(offset) < 9 || Math.abs(offset) > window.innerHeight * 0.46) return;

      snapping = true;
      window.scrollTo({ top: window.scrollY + offset, behavior: "smooth" });
      window.clearTimeout(unlockTimer);
      unlockTimer = window.setTimeout(() => {
        snapping = false;
        update();
      }, 560);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
      window.clearTimeout(settleTimer);
      if (!snapping && !compact.matches && !touch.matches && !reducedMotion.matches) {
        settleTimer = window.setTimeout(settle, 220);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      window.clearTimeout(unlockTimer);
    };
  }, []);

  return (
    <section id="platform" ref={sectionRef} className="journey-section section-pad" aria-labelledby="journey-heading">
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
                aria-current={active === index ? "step" : undefined}
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
              <div className={`preview-window${steps[active].image ? " preview-window-scene" : ""} preview-window-step-${steps[active].number}`} key={active}>
                {steps[active].image ? (
                  <div className="preview-scene-wrap">
                    <Image
                      src={steps[active].image}
                      alt={steps[active].alt}
                      fill
                      sizes="(max-width: 900px) 95vw, 55vw"
                      className="preview-scene-image"
                    />
                  </div>
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
