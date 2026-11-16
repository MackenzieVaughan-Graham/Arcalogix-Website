"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./sim-project.module.css";

const moments = [
  {
    number: "01",
    phase: "SOURCE",
    timeframe: "INPUT",
    title: "Start with the building information you have.",
    description: "A floor plan, an existing model or other building information becomes the starting point. We establish the intended use and identify what needs to be checked before the information is reused.",
    deliverable: "A defined source and spatial-data brief",
    image: "/images/floor-plan.webp",
    alt: "Existing floor plan used as source information for a machine-readable building model",
  },
  {
    number: "02",
    phase: "VALIDATE",
    timeframe: "REVIEW",
    title: "Make the geometry a reliable reference.",
    description: "Source drawings and dimensions are reviewed with architectural context. Assumptions and gaps are identified so that the resulting geometry is a useful foundation rather than another disconnected visual.",
    deliverable: "Reviewed building geometry and source assumptions",
    image: "/images/platform-floorplan.png",
    alt: "Reviewed architectural floor plan with spatial boundaries and dimensions",
  },
  {
    number: "03",
    phase: "STRUCTURE",
    timeframe: "MODEL",
    title: "Give each space a digital identity.",
    description: "The building is translated into a Spatial Intelligence Model (SIM). Rooms and zones can be organized by identifiers, types, areas and relationships, with available attributes linked to the corresponding spaces.",
    deliverable: "A reusable 3D SIM and structured spatial context",
    image: "/images/platform-model-shell.png",
    alt: "Three-dimensional spatial shell that can support identifiable rooms and spatial relationships",
  },
  {
    number: "04",
    phase: "APPLY",
    timeframe: "USE",
    title: "Use spatial intelligence to answer real questions.",
    description: "A structured SIM can support practical applications such as standards-based test fitting, capacity studies and comparisons between properties. These are uses of the shared spatial record—not separate one-off models.",
    deliverable: "Project-specific planning evidence and decision support",
    image: "/images/platform-furnished-model.png",
    alt: "Furnished spatial model showing a standards-based planning application of a SIM",
  },
  {
    number: "05",
    phase: "REUSE",
    timeframe: "DELIVER",
    title: "Keep the same spatial context through delivery.",
    description: "Instead of starting from scratch for each milestone, the reviewed spatial foundation can inform architectural design and documentation as the project develops, subject to the required professional review.",
    deliverable: "A spatial reference that carries forward into design",
    image: "/images/drawing-workflow.webp",
    alt: "Architectural drawing workflow developed using the same spatial foundation",
  },
  {
    number: "06",
    phase: "CONNECT",
    timeframe: "EXTEND",
    title: "Bring other systems into spatial context.",
    description: "Where suitable data is available, a hosted SIM can provide the location reference for information from sensors, assets, maintenance, energy and other enterprise systems. Integrations are software-agnostic and scoped for each project.",
    deliverable: "A foundation for connected operations and digital twins",
    image: "/images/common-foundation-model.png",
    alt: "Illustrative SIM with spatial overlays for occupancy, assets, environment and maintenance",
    kind: "operations",
  },
  {
    number: "07",
    phase: "SCALE",
    timeframe: "PORTFOLIO",
    title: "Make the information useful across locations.",
    description: "Consistent identities and attributes make it possible to organize information across spaces, buildings and regions. A connected portfolio supports more comparable decisions as locations and data sources are added.",
    deliverable: "Reusable spatial intelligence across the portfolio",
    image: "/images/portfolio-model.webp",
    alt: "Spatial models supporting connected information across a building portfolio",
  },
] as const;

function OperationsScene({ decorative = false }: { decorative?: boolean }) {
  return (
    <>
      <Image
        src="/images/common-foundation-model.png"
        alt={decorative ? "" : "Illustrative 3D SIM with occupancy, asset, environmental and maintenance overlays"}
        fill
        sizes="(max-width: 900px) 100vw, 52vw"
        className={styles.operationsModel}
      />
      <div className={styles.operationsLabel}><i /> LIVE SIM <span>ILLUSTRATIVE</span></div>
      <div className={`${styles.dataOverlay} ${styles.dataOverlayOccupancy}`}><small>OCCUPANCY</small><strong>Live zone signals</strong><span><i style={{ width: "68%" }} /></span></div>
      <div className={`${styles.dataOverlay} ${styles.dataOverlayAssets}`}><small>ASSET REGISTER</small><strong>Linked equipment</strong><span><i style={{ width: "84%" }} /></span></div>
      <div className={`${styles.dataOverlay} ${styles.dataOverlayEnvironment}`}><small>ENVIRONMENT</small><strong>Sensor data</strong><span><i style={{ width: "56%" }} /></span></div>
      <div className={`${styles.dataOverlay} ${styles.dataOverlayMaintenance}`}><small>MAINTENANCE</small><strong>Service history</strong><span><i style={{ width: "76%" }} /></span></div>
      <i className={`${styles.modelSignal} ${styles.modelSignalOne}`} />
      <i className={`${styles.modelSignal} ${styles.modelSignalTwo}`} />
      <i className={`${styles.modelSignal} ${styles.modelSignalThree}`} />
    </>
  );
}

export default function ProjectScrollJourney() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 88;
      const readingLine = header + (window.innerHeight - header) * 0.52;
      let selected = 0;
      let nearest = Number.POSITIVE_INFINITY;

      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        const bounds = step.getBoundingClientRect();
        const distance = Math.abs(bounds.top + bounds.height / 2 - readingLine);
        if (distance < nearest) {
          nearest = distance;
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

  const current = moments[active];

  return (
    <section className={styles.scrollJourney} aria-labelledby="journey-title">
      <div className={`page-shell ${styles.scrollIntro}`}>
        <p className="eyebrow">01 / HOW A BUILDING BECOMES MACHINE-READABLE</p>
        <div>
          <h2 id="journey-title">A building becomes data.<br /><span>Its value keeps growing.</span></h2>
          <p>Follow one source drawing as it becomes reviewed geometry, identifiable spaces and reusable context for people, applications and connected systems.</p>
        </div>
      </div>

      <div className={styles.storyCanvas}>
        <div className={styles.storySticky} aria-hidden="true">
          <div className={styles.timeBackdrop} key={current.timeframe}>{current.timeframe}</div>
          <div className={styles.storyGrid}>
            <div className={styles.storyStatus}>
              <span>ARCALOGIX / SIM JOURNEY</span>
              <strong>{current.number} / {moments.length.toString().padStart(2, "0")}</strong>
            </div>
            <div className={styles.storyVisual}>
              <div className={styles.storyVisualHeader}>
                <span><i /> {current.phase}</span>
                <span>{current.timeframe}</span>
              </div>
              <div className={styles.storyImageStack}>
                {moments.map((moment, index) => (
                  "kind" in moment && moment.kind === "operations" ? (
                    <div key={moment.number} className={`${styles.storyImage} ${styles.operationsScene} ${index === active ? styles.storyImageActive : ""}`}>
                      <OperationsScene decorative />
                    </div>
                  ) : (
                    <Image
                      key={moment.number}
                      src={moment.image}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 52vw"
                      className={`${styles.storyImage} ${index === active ? styles.storyImageActive : ""}`}
                    />
                  )
                ))}
              </div>
              <div className={styles.storyVisualFooter}>
                <span>WHAT IS DELIVERED</span>
                <strong>{current.deliverable}</strong>
              </div>
            </div>
            <div className={styles.storyProgress}>
              {moments.map((moment, index) => (
                <i key={moment.number} className={index === active ? styles.storyProgressActive : ""} />
              ))}
            </div>
          </div>
        </div>

        <div className={`page-shell ${styles.storyTrack}`}>
          {moments.map((moment, index) => (
            <article
              key={moment.number}
              className={`${styles.storyStep} ${index === active ? styles.storyStepActive : ""}`}
              ref={(element) => { stepRefs.current[index] = element; }}
              aria-current={index === active ? "step" : undefined}
            >
              <div className={styles.storyCard}>
                <div className={styles.storyCardMeta}>
                  <span>{moment.number} / {moment.phase}</span>
                  <strong>{moment.timeframe}</strong>
                </div>
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
                <div className={styles.storyDeliverable}>
                  <small>WHAT YOU RECEIVE</small>
                  <strong>{moment.deliverable}</strong>
                </div>
                <div className={styles.mobileStoryImage}>
                  {"kind" in moment && moment.kind === "operations" ? (
                    <OperationsScene />
                  ) : (
                    <Image src={moment.image} alt={moment.alt} fill sizes="100vw" />
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className={`page-shell ${styles.timelineNote}`}>
        Illustrative lifecycle. The information available in a SIM, the level of verification and any connected operations depend on source quality, selected services and each project&apos;s scope.
      </p>
    </section>
  );
}
