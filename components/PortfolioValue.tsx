import Image from "next/image";
import styles from "./PortfolioValue.module.css";

const outcomes = [
  { number: "01", title: "Evaluate consistently", body: "Compare very different properties against the same occupier requirements." },
  { number: "02", title: "Stop duplicating work", body: "Carry verified spatial information forward instead of commissioning it again." },
  { number: "03", title: "Connect the lifecycle", body: "Link decisions made before a lease to delivery and ongoing space management." },
];

export default function PortfolioValue() {
  return (
    <section id="value" className={styles.section} aria-labelledby="value-heading">
      <div className="page-shell">
        <div className={styles.intro}>
          <div>
            <p className="eyebrow">01 / THE PORTFOLIO CHALLENGE</p>
            <h2 id="value-heading">Your portfolio is one business.<br /><span>Its information should work together.</span></h2>
          </div>
          <div className={styles.introAside}>
            <span className={styles.asideRule} />
            <p>Every new lease, workplace change or fit-out brings another set of drawings, assumptions and providers. Decisions become harder to compare, and work gets repeated.</p>
            <p><strong>Arcalogix connects the spatial information and company standards behind those decisions</strong> so occupiers can plan consistently across locations.</p>
          </div>
        </div>

        <div className={styles.system} aria-label="How Arcalogix brings people, place and policy into a shared spatial record">
          <div className={styles.systemHeading}>
            <span>THE COMMON FOUNDATION</span>
            <span>PEOPLE + PLACE + POLICY</span>
          </div>

          <div className={styles.foundationScene}>
            <div className={styles.sceneCanvas}>
              <div className={styles.modelBackdrop}>
                <Image
                  src="/images/common-foundation-model.png"
                  alt="Architectural 3D Spatial Intelligence Model emerging from a building floor plan"
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1100px) 90vw, 1200px"
                  className={styles.modelImage}
                />
              </div>

              <div className={`${styles.floatCard} ${styles.peopleCard}`}>
                <span className={styles.floatNumber}>01 / PEOPLE</span>
                <strong>What your teams need</strong>
                <p>Headcount, workstyles, capacity and space requirements.</p>
              </div>

              <div className={`${styles.floatCard} ${styles.placeCard}`}>
                <span className={styles.floatNumber}>02 / PLACE</span>
                <strong>What each property supports</strong>
                <p>Drawings, geometry, building conditions and spatial assets.</p>
              </div>

              <div className={`${styles.floatCard} ${styles.policyCard}`}>
                <span className={styles.floatNumber}>03 / POLICY</span>
                <strong>What the business expects</strong>
                <p>Workplace standards, utilization targets and financial rules.</p>
              </div>

              <p className={styles.sceneSignature}><span aria-hidden="true" /> ARCALOGIX / CONNECTED SPATIAL RECORD</p>
            </div>
          </div>

          <div className={styles.outcomes}>
            {outcomes.map((outcome) => (
              <div key={outcome.number} className={styles.outcome}>
                <span>{outcome.number}</span>
                <strong>{outcome.title}</strong>
                <p>{outcome.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
