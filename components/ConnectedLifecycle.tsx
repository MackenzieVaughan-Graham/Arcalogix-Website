"use client";

import { useState } from "react";
import styles from "./ConnectedLifecycle.module.css";

type LifecycleStep = {
  number: string;
  name: string;
  teaser: string;
  phase: string;
  heading: string;
  overview: string;
  actions: string[];
  result: string;
  isExpansion?: boolean;
};

const steps: LifecycleStep[] = [
  {
    number: "01",
    name: "Evaluate",
    teaser: "Validate the existing space",
    phase: "UNDERSTAND THE INPUT",
    heading: "Start with a reliable floor plan.",
    overview:
      "We review the supplied 2D plan before planning begins, checking its dimensions, usable area, geometry and architectural information. Missing details and assumptions are identified early so the test fit starts from a dependable spatial record.",
    actions: [
      "Review dimensions, floor area and the geometry shown in the source drawings.",
      "Identify fixed conditions such as cores, columns, existing rooms and circulation constraints.",
      "Clarify discrepancies or missing architectural information with the project team before proceeding.",
    ],
    result: "A verified planning baseline, with assumptions documented before design begins.",
  },
  {
    number: "02",
    name: "Plan",
    teaser: "Apply the occupier's standards",
    phase: "COMPARE ON COMMON TERMS",
    heading: "Test every address against the same standards.",
    overview:
      "We apply the customer's People, Place and Policy requirements to each location. Rather than producing unrelated layouts, we test how well each space supports the occupier's actual teams, workplace program and design rules.",
    actions: [
      "Apply headcount, workstation ratios, room schedules and customer-specific design standards.",
      "Test capacity, circulation and program fit using a consistent planning approach.",
      "Compare multiple spaces or scenarios on the same basis before committing to a location.",
    ],
    result: "A standards-based test fit that shows whether a space works for the occupier, not just whether furniture fits.",
  },
  {
    number: "03",
    name: "Deliver",
    teaser: "A reviewed test fit in 48 hours",
    phase: "FROM REVIEW TO DECISION",
    heading: "A fast deliverable, checked by our team.",
    overview:
      "Our internal architectural team prepares and verifies the test fit. Standard delivery is two business days (typically 48 hours) after project details and invoice confirmation, giving your team a consistent result without restarting the design process at each address.",
    actions: [
      "Prepare a space-specific test fit using the confirmed drawings and occupier standards.",
      "Review the layout and its planning assumptions with our internal architectural team.",
      "Deliver an interactive 3D Spatial Intelligence Model (SIM) for review, discussion and future changes.",
    ],
    result: "A decision-ready test fit and reusable 3D SIM, with 12 months of SIM hosting included.",
  },
  {
    number: "04",
    name: "Operate",
    teaser: "Turn the chosen SIM into an asset",
    phase: "THE NEXT LIFE OF THE SPACE",
    heading: "The model carries forward after you choose the space.",
    overview:
      "When the occupier moves forward, the same test-fit SIM can become the spatial foundation for an operational digital twin rather than being recreated. With active SIM hosting and connected data sources, that record can support day-to-day decisions and portfolio reporting.",
    actions: [
      "Understand occupancy, utilization and how different zones are actually used.",
      "Connect service and energy usage, environmental conditions and operational-cost data.",
      "Organize assets, maintenance history, space changes and lifecycle planning.",
      "Build toward performance reporting, scenario comparisons and consistent portfolio oversight.",
    ],
    result: "An evolving digital twin linked to the space. IoT and operational integrations are expanding capabilities and require active SIM hosting and compatible data sources.",
    isExpansion: true,
  },
];

export default function ConnectedLifecycle() {
  const [active, setActive] = useState(0);
  const selected = steps[active];

  return (
    <section className="continuum-section section-pad" aria-labelledby="continuum-heading">
      <div className="page-shell">
        <p className="eyebrow">05 / A CONNECTED SPACE LIFECYCLE</p>
        <div className="continuum-intro">
          <h2 id="continuum-heading">
            The floor plan is the beginning.<br />
            <span>Not the final deliverable.</span>
          </h2>
          <p>
            Four connected stages, one spatial record. Select a stage to see how we take a
            space from early evaluation to long-term use.
          </p>
        </div>

        <div className={styles.timeline} aria-label="Explore the four stages of a connected space lifecycle">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActive(index)}
              className={`${styles.stage} ${active === index ? styles.stageActive : ""}`}
              aria-pressed={active === index}
              aria-controls="connected-lifecycle-detail"
              aria-label={`${step.number} ${step.name}: ${step.teaser}. Show details`}
            >
              <span className={styles.circle}>{step.number}</span>
              <span className={styles.stageTitle}>{step.name}</span>
              <span className={styles.stageTeaser}>{step.teaser}</span>
            </button>
          ))}
        </div>

        <div
          id="connected-lifecycle-detail"
          className={styles.detail}
          aria-live="polite"
          aria-atomic="true"
          key={selected.number}
        >
          <div className={styles.detailMain}>
            <span className={styles.detailEyebrow}>{selected.number} / {selected.phase}</span>
            <h3>{selected.heading}</h3>
            <p className={styles.overview}>{selected.overview}</p>
            <p className={styles.outcome}><span>THE RESULT</span>{selected.result}</p>
          </div>
          <div className={styles.detailAside}>
            <p className={styles.asideLabel}>WHAT ARCALOGIX DOES</p>
            <ul>
              {selected.actions.map((action) => <li key={action}>{action}</li>)}
            </ul>
            {selected.isExpansion && (
              <p className={styles.roadmapNote}>
                <span className={styles.roadmapDot} /> Connected operations is an expanding capability.
              </p>
            )}
          </div>
        </div>

        <div className="continuum-note">
          <span className="status-dot" />
          <span>CURRENT FOUNDATION: validated plans, standards-based test fits, architectural review and hosted SIMs</span>
          <span className="continuum-divider">/</span>
          <span>EXPANDING: connected operations, digital twins and IoT</span>
        </div>
      </div>
    </section>
  );
}
