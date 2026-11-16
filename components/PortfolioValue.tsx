import Image from "next/image";
import styles from "./PortfolioValue.module.css";

const outcomes = [
  { number: "01", title: "Give software spatial context", body: "Make rooms, zones and assets identifiable so digital tools can work with what places are, not just what they look like." },
  { number: "02", title: "Connect the disconnected", body: "Use a common understanding of place to relate people, requirements and building information across different systems." },
  { number: "03", title: "Create value beyond one project", body: "Reuse spatial information across planning, design and operations—and as a foundation for future analytics and AI-enabled workflows." },
];

export default function PortfolioValue() {
  return (
    <section id="value" className={styles.section} aria-labelledby="value-heading">
      <div className="page-shell">
        <div className={styles.intro}>
          <div>
            <p className="eyebrow">01 / THE BUILT WORLD CHALLENGE</p>
            <h2 id="value-heading">Make the built world<br /><span>machine-readable.</span></h2>
          </div>
          <div className={styles.introAside}>
            <span className={styles.asideRule} />
            <p>We understand buildings through drawings, models, spreadsheets and disconnected software. But most of that information has no shared structure other systems can reliably interpret. A room may be visible on a plan without being identifiable as usable data.</p>
            <p><strong>Arcalogix is building the spatial intelligence foundation for the physical world.</strong> By turning spaces into structured, reusable records, we make building information useful beyond a single drawing, application or project.</p>
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
                <strong>Who a space serves</strong>
                <p>People, occupancy, accessibility, capacity and the needs of those using a place.</p>
              </div>

              <div className={`${styles.floatCard} ${styles.placeCard}`}>
                <span className={styles.floatNumber}>02 / PLACE</span>
                <strong>What the place contains</strong>
                <p>Identifiable spaces, geometry, relationships, assets and building conditions.</p>
              </div>

              <div className={`${styles.floatCard} ${styles.policyCard}`}>
                <span className={styles.floatNumber}>03 / POLICY</span>
                <strong>How a place should work</strong>
                <p>Standards, usage policies, performance targets and operational requirements.</p>
              </div>

              <p className={styles.sceneSignature}><span aria-hidden="true" /> ARCALOGIX / CONNECTED SPATIAL RECORD</p>
            </div>
          </div>

          <div className={styles.machineReadableNote}>
            <span>WHY MACHINE-READABLE MATTERS</span>
            <p>A floor plan shows where a room is. A structured spatial record can give that room an identity, dimensions, purpose and relationships to other spaces and systems. When software understands what a place represents, its information can be searched, compared, connected and reused—from early planning to ongoing operations.</p>
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
