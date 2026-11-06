"use client";

import { useState } from "react";
import { ContactButton } from "./ContactProvider";

const audiences = [
  {
    label: "Enterprise occupiers",
    eyebrow: "PORTFOLIO-WIDE CONSISTENCY",
    heading: "One standard across every location.",
    copy: "Give corporate real estate teams one place to compare new sites, relocations, expansions, and refreshes—using the same workplace standards each time.",
    points: ["Reusable People–Place–Policy standards", "Comparable test fits and build-out options", "Central oversight with coordinated design delivery"],
    interest: "Portfolio strategy",
  },
  {
    label: "Landlords & owners",
    eyebrow: "KNOW WHAT YOUR ASSET CAN SUPPORT",
    heading: "Make your space easier to evaluate.",
    copy: "Provide prospective tenants with clearer possibilities, support leasing decisions, and maintain a more useful spatial record of your assets.",
    points: ["Space plans and marketing layouts", "Tenant-fit scenario testing", "Spatial information across properties"],
    interest: "Landlord space marketing",
  },
  {
    label: "Tenants & occupiers",
    eyebrow: "SPACE THAT FITS THE BUSINESS",
    heading: "Plan the next space with confidence.",
    copy: "See how a new or existing location supports your team, policies, and future workplace requirements before committing to a plan.",
    points: ["Requirements-based test fitting", "Options for refresh and reconfiguration", "A clear path from concept to design coordination"],
    interest: "Test fits and planning",
  },
];

export default function AudienceSelector() {
  const [selected, setSelected] = useState(0);
  const active = audiences[selected];
  return (
    <section className="audience-section section-pad" id="who-its-for" aria-labelledby="audience-heading">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">05 / WHO IT'S FOR</p>
          <h2 id="audience-heading">One platform.<br /><span>Different real estate priorities.</span></h2>
        </div>
        <div className="audience-shell">
          <div className="audience-tabs" role="group" aria-label="Choose your organization type">
            {audiences.map((a, index) => (
              <button type="button" key={a.label} aria-pressed={selected === index} aria-controls="audience-content" className={selected === index ? "audience-tab audience-tab-active" : "audience-tab"} onClick={() => setSelected(index)}>
                <span>0{index + 1}</span>{a.label}<span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <div className="audience-content" id="audience-content" aria-live="polite" key={selected}>
            <p className="eyebrow">{active.eyebrow}</p>
            <h3>{active.heading}</h3>
            <p>{active.copy}</p>
            <ul>{active.points.map((point) => <li key={point}><span aria-hidden="true">↗</span>{point}</li>)}</ul>
            <ContactButton interest={active.interest} className="text-link">Discuss your requirements <span aria-hidden="true">↗</span></ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}
