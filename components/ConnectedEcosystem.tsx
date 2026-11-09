"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ConnectedEcosystem.module.css";

const connections = [
  {
    number: "01", role: "OCCUPIERS & CRE LEADERS", title: "Make the decision.",
    description: "Set your company's standards, evaluate options consistently, compare capacity and cost, and keep a clear portfolio record.",
    category: "PLAN + COMPARE",
  },
  {
    number: "02", role: "ARCHITECTS & DESIGN TEAMS", title: "Author and deliver.",
    description: "Turn requirements into spatial models, test fits and coordinated design information, backed by architectural review.",
    category: "CREATE + VERIFY",
  },
  {
    number: "03", role: "OPERATIONS TEAMS", title: "Keep the space useful.",
    description: "Maintain hosted spatial records and extend them with asset, occupancy and service information as integrations are implemented.",
    category: "MAINTAIN + OPERATE",
  },
  {
    number: "04", role: "MANUFACTURERS & DEALERS", title: "Connect the products.",
    description: "Bring reusable product and SKU information into the spatial workflow so design decisions reflect real products and specifications.",
    category: "PRODUCT + SPECIFICATION",
  },
];

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export default function ConnectedEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0); // 0 = introduction; 1–4 = each team
  const [stacked, setStacked] = useState(false);

  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 760px), (max-height: 520px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateLayout = () => setStacked(narrow.matches || reducedMotion.matches);
    updateLayout();
    narrow.addEventListener("change", updateLayout);
    reducedMotion.addEventListener("change", updateLayout);
    return () => {
      narrow.removeEventListener("change", updateLayout);
      reducedMotion.removeEventListener("change", updateLayout);
    };
  }, []);

  useEffect(() => {
    if (stacked) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const bounds = section.getBoundingClientRect();
      const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 88;
      const travel = Math.max(1, bounds.height - window.innerHeight);
      const progress = clamp((headerHeight - bounds.top) / travel);
      const stage = Math.min(connections.length, Math.floor(progress * (connections.length + 1)));
      setActive((current) => current === stage ? current : stage);
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
    <section id="ecosystem" ref={sectionRef} className={`${styles.section} ${stacked ? styles.stacked : ""}`} aria-label="03 / The connected workflow" data-active-stage={stacked ? "all" : String(active)}>
      {stacked ? (
        <div className="page-shell">
          <div className={styles.stackedIntro}>
            <p className="eyebrow">03 / THE CONNECTED WORKFLOW</p>
            <h2 id="ecosystem-heading">One spatial foundation.<br /><span>Different teams. Shared context.</span></h2>
            <p>Buildings pass between people who design them, choose them and operate them. The information shouldn&apos;t have to start over at each handoff. Arcalogix connects the workflow around the same spatial record.</p>
          </div>
          <div className={styles.stackedList}>
            {connections.map((connection) => (
              <article className={styles.stackedItem} key={connection.number}>
                <span className={styles.number}>{connection.number} / 04</span>
                <span className={styles.role}>{connection.role}</span>
                <h3>{connection.title}</h3>
                <p>{connection.description}</p>
                <span className={styles.category}>{connection.category}</span>
              </article>
            ))}
          </div>
          <p className={styles.stackedFooter}>ONE RECORD / MANY USES <span aria-hidden="true">—</span> CONNECTED BY ARCALOGIX</p>
        </div>
      ) : (
        <div className={styles.sticky}>
          <div className={`page-shell ${styles.stickyInner}`}>
            <div className={styles.topline}>
              <span className="eyebrow">03 / THE CONNECTED WORKFLOW</span>
              <span>ONE RECORD / MANY USES</span>
            </div>
            <div className={styles.bodyViewport}>
              {[null, ...connections].map((current, stageIndex) => (
              <article className={`${styles.body} ${active === stageIndex ? styles.bodyActive : ""}`} key={stageIndex} aria-hidden={active !== stageIndex} inert={active !== stageIndex}>
              <div className={styles.left}>
                {current ? (
                  <>
                    <span className={styles.number}>{current.number} / 04</span>
                    <h2>{current.title}</h2>
                    <p className={styles.role}>{current.role}</p>
                  </>
                ) : (
                  <>
                    <span className={styles.number}>ONE CONNECTED SYSTEM</span>
                    <h2>One spatial foundation.<br /><span>Different teams.<br />Shared context.</span></h2>
                  </>
                )}
              </div>
              <div className={styles.right}>
                <div className={styles.redRule} aria-hidden="true" />
                {current ? (
                  <>
                    <p className={styles.detail}>{current.description}</p>
                    <span className={styles.category}>{current.category}</span>
                    <div className={styles.thread}><span className={styles.threadDot} aria-hidden="true" /> SHARED SPATIAL INTELLIGENCE</div>
                  </>
                ) : (
                  <>
                    <p className={styles.detail}>Buildings pass between people who design them, choose them and operate them. The information shouldn&apos;t start over at every handoff.</p>
                    <p className={styles.supporting}>Arcalogix connects the workflow around the same spatial record.</p>
                    <div className={styles.thread}><span className={styles.threadDot} aria-hidden="true" /> CONNECTED BY ARCALOGIX</div>
                  </>
                )}
              </div>
              </article>
              ))}
            </div>
            <div className={styles.progress} aria-label={active ? `Workflow stage ${active} of 4` : "Workflow introduction"}>
              {[0, 1, 2, 3, 4].map((step) => (
                <div className={`${styles.progressTrack} ${active === step ? styles.progressActive : ""}`} key={step}>
                  <span>{step === 0 ? "INTRO" : `${String(step).padStart(2,"0")} / 04`}</span>
                  <i aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
