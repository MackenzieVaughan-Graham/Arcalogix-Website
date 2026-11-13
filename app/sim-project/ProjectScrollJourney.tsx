"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./sim-project.module.css";

const moments = [
  {
    number: "01",
    phase: "SUBMIT",
    timeframe: "DAY 0",
    title: "Share the space and what it needs to do.",
    description: "Upload the available floor plan, your requirements and the information we need to understand the project.",
    deliverable: "A complete project brief ready for review",
    image: "/images/floor-plan.webp",
    alt: "Existing floor plan submitted to begin an Arcalogix project",
  },
  {
    number: "02",
    phase: "CONFIRM",
    timeframe: "12 HOURS",
    title: "Know the scope and price before work begins.",
    description: "Our team reviews the submission, resolves questions and confirms the project price so the decision is clear.",
    deliverable: "Confirmed project scope and price",
    image: "/images/platform-floorplan.png",
    alt: "Validated project floor plan reviewed by Arcalogix",
  },
  {
    number: "03",
    phase: "APPROVE",
    timeframe: "YOUR APPROVAL",
    title: "Move forward when the project is ready.",
    description: "Review the quote and scope in your account. Approval gives the Arcalogix team the signal to begin the SIM.",
    deliverable: "An approved project ready for production",
    image: "/images/platform-model-shell.png",
    alt: "Early three-dimensional spatial model ready for production",
  },
  {
    number: "04",
    phase: "RECEIVE + DECIDE",
    timeframe: "WITHIN 48 HOURS",
    title: "Receive the SIM and validate the lease decision.",
    description: "The interactive 3D SIM brings the test fit, capacity, program and workplace standards into one environment—giving your team what it needs to decide whether the space works before signing the lease.",
    deliverable: "Interactive 3D SIM, standards-based test fit and decision evidence",
    image: "/images/platform-furnished-model.png",
    alt: "Furnished three-dimensional SIM showing a standards-based test fit",
  },
  {
    number: "05",
    phase: "DELIVER",
    timeframe: "DESIGN + PERMIT",
    title: "Carry the same spatial foundation into delivery.",
    description: "The approved SIM can support the required construction and permitting documentation without recreating the project geometry from the beginning.",
    deliverable: "A reusable model foundation for project documentation",
    image: "/images/drawing-workflow.webp",
    alt: "Construction and permitting drawing workflow based on the project SIM",
  },
  {
    number: "06",
    phase: "OPERATE",
    timeframe: "AFTER BUILD",
    title: "Connect the completed space to live information.",
    description: "Compatible IoT and enterprise systems can add occupancy, utilization, environmental, energy and asset signals to the SIM.",
    deliverable: "A connected digital-twin foundation",
    image: "/images/common-foundation-model.png",
    alt: "Illustrative three-dimensional SIM with occupancy, asset, environmental and maintenance information",
    kind: "operations",
  },
  {
    number: "07",
    phase: "SCALE",
    timeframe: "ONE PLATFORM",
    title: "Bring every project and existing space into one platform.",
    description: "Combining new SIM projects with your existing spaces creates one consistent spatial record across the portfolio—driving portfolio intelligence and clearer decisions at every scale.",
    deliverable: "One platform for new projects, existing spaces and portfolio intelligence",
    image: "/images/portfolio-model.webp",
    alt: "Connected spatial models forming a portfolio intelligence platform",
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
        <p className="eyebrow">01 / THE PROJECT JOURNEY</p>
        <div>
          <h2 id="journey-title">Scroll through the life of <span>one connected SIM.</span></h2>
          <p>Each stage delivers something useful now while building the spatial foundation for what comes next.</p>
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
        The 12-hour and 48-hour targets begin once the required project inputs are complete. Source-file quality, scope and requested complexity can affect delivery.
      </p>
    </section>
  );
}
