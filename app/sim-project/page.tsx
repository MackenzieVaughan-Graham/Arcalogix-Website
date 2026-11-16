import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { ContactButton } from "@/components/ContactProvider";
import ProjectScrollJourney from "./ProjectScrollJourney";
import styles from "./sim-project.module.css";

const PROJECT_URL = "https://arcalogixdashboard.com/general-submit-project";

export const metadata: Metadata = {
  title: "View a SIM Project | Arcalogix",
  description:
    "See how Arcalogix turns building drawings into machine-readable Spatial Intelligence Models (SIMs), with identifiable spaces, structured attributes, spatial relationships and reusable context across planning, delivery and operations.",
};

const modelStages = [
  {
    number: "01",
    label: "SOURCE",
    title: "Building information",
    image: "/images/floor-plan.webp",
    alt: "An existing floor plan used as the source for a SIM project",
  },
  {
    number: "02",
    label: "GEOMETRY",
    title: "Verified spatial structure",
    image: "/images/platform-model-shell.png",
    alt: "A three-dimensional shell model created from the source floor plan",
  },
  {
    number: "03",
    label: "CONTEXT",
    title: "Spaces with meaning",
    image: "/images/platform-furnished-model.png",
    alt: "A furnished three-dimensional SIM showing a planned workplace",
  },
  {
    number: "04",
    label: "REUSE",
    title: "Connected intelligence",
    image: "/images/portfolio-model.webp",
    alt: "A connected spatial model representing portfolio intelligence",
  },
] as const;

const connectedSignals = [
  ["OCCUPANCY", "Understand where and when space is being used."],
  ["ENVIRONMENT + ENERGY", "Relate building conditions and consumption to place."],
  ["ASSETS + MAINTENANCE", "Keep equipment and service information spatially grounded."],
  ["PORTFOLIO BENCHMARKS", "Compare consistent signals across buildings and regions."],
] as const;

export default function SimProjectPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} id="main-content">
        <section className={styles.hero} aria-labelledby="sim-project-title">
          <div className={`page-shell ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className="eyebrow"><span className="red-dot" /> VIEW A SIM PROJECT</p>
              <h1 id="sim-project-title">From floor plan to <span>machine-readable space.</span></h1>
              <p className={styles.heroLead}>
                A 3D model helps people see a building. A machine-readable Spatial Intelligence Model (SIM) gives its spaces identity, attributes and relationships that software can use—creating a foundation for planning, delivery, operations and portfolio decisions.
              </p>
              <div className={styles.heroActions}>
                <a className="button button-primary button-large" href={PROJECT_URL} target="_blank" rel="noopener noreferrer">Submit a new project</a>
                <ContactButton className="button button-secondary button-large" interest="Portfolio strategy">Discuss your spatial data</ContactButton>
              </div>
            </div>

            <div className={styles.heroVisual} aria-label="A 3D SIM connects a project from planning through operation">
              <div className={styles.visualHeader}><span><i /> ARCALOGIX / SPATIAL INTELLIGENCE MODEL</span><span>ONE CONNECTED RECORD</span></div>
              <div className={styles.visualImage}>
                <Image src="/images/common-foundation-model.png" alt="A three-dimensional workplace SIM used throughout a project" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
              </div>
              <div className={styles.visualFooter}><span>GEOMETRY</span><i /><span>IDENTITY</span><i /><span>CONTEXT</span><i /><span>REUSE</span></div>
            </div>
          </div>
        </section>

        <ProjectScrollJourney />

        <section className={styles.foundation} aria-labelledby="foundation-title">
          <div className="page-shell">
            <div className={styles.foundationIntro}>
              <div>
                <p className="eyebrow">02 / THE MACHINE-READABLE FOUNDATION</p>
                <h2 id="foundation-title">A model shows the space.<br /><span>A SIM gives it meaning.</span></h2>
              </div>
              <p>Geometry shows where spaces are. A structured SIM gives them consistent identities, classifications, attributes and relationships—so information can be referenced, compared and reused by people and software.</p>
            </div>
            <div className={styles.modelSequence}>
              {modelStages.map((stage, index) => (
                <article className={styles.modelCard} key={stage.number}>
                  <div className={styles.modelImage}>
                    <Image src={stage.image} alt={stage.alt} fill sizes="(max-width: 760px) 100vw, 25vw" />
                  </div>
                  <div className={styles.modelCaption}>
                    <span>{stage.number} / {stage.label}</span>
                    <strong>{stage.title}</strong>
                  </div>
                  {index < modelStages.length - 1 ? <i className={styles.sequenceArrow} aria-hidden="true">→</i> : null}
                </article>
              ))}
            </div>
            <div className={styles.recordExample} aria-label="Illustrative structured spatial record example">
              <div className={styles.recordExampleIntro}>
                <p className="eyebrow">SPATIAL DATA / AN ILLUSTRATIVE EXAMPLE</p>
                <h3>A room is more than <span>a shape.</span></h3>
                <p>A drawing depicts a room. A machine-readable SIM can describe what that room is, where it belongs, how it connects to other spaces and which standards apply. That makes spatial information useful beyond the original drawing or project.</p>
                <div className={styles.readableElements} aria-label="The building blocks of machine-readable space"><span>IDENTITY</span><span>ATTRIBUTES</span><span>RELATIONSHIPS</span><span>RULES</span></div>
              </div>
              <div className={styles.recordExampleDetail}>
                <div className={styles.recordExampleTop}><span>SIM / SPATIAL RECORD</span><strong>ROOM-042</strong></div>
                <dl className={styles.recordFields}>
                  <div><dt>SPACE ID</dt><dd>ROOM-042</dd></div>
                  <div><dt>TYPE</dt><dd>Meeting room</dd></div>
                  <div><dt>CAPACITY</dt><dd>6 people</dd></div>
                  <div><dt>AREA</dt><dd>180 sq ft</dd></div>
                  <div><dt>RELATIONSHIP</dt><dd>Adjacent to Corridor C-03</dd></div>
                  <div><dt>STANDARD</dt><dd>150 sq ft minimum</dd></div>
                </dl>
                <div className={styles.recordQuery}>
                  <span>EXAMPLE MACHINE-READABLE QUESTION</span>
                  <p>Which six-person meeting rooms meet our minimum area and connect to circulation?</p>
                  <span>ILLUSTRATIVE RESULT</span>
                  <strong>ROOM-042 qualifies: 180 sq ft, capacity for six, adjacent to Corridor C-03.</strong>
                </div>
                <p className={styles.recordExampleNote}>Illustrative spatial data and query, not a live platform result. The fields, level of structure and supported workflows depend on project inputs, verification and implementation scope.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.integration} aria-labelledby="integration-title">
          <div className={`page-shell ${styles.integrationGrid}`}>
            <div className={styles.integrationCopy}>
              <p className="eyebrow">03 / CONNECTED OPERATIONS</p>
              <h2 id="integration-title">Give your existing systems <span>a shared sense of place.</span></h2>
              <p>
                When a room has a persistent identity, otherwise disconnected information can be associated with the same place. Arcalogix is designed to be software- and hardware-agnostic: project-scoped connections may map a hosted SIM to IoT sensors, building management systems, energy platforms, IWMS/CAFM, CMMS, asset registers and real estate software through suitable APIs, exports or data pipelines.
              </p>
              <ContactButton className={styles.textLink} interest="Digital twins and IoT">Discuss an IoT connection <span aria-hidden="true">↗</span></ContactButton>
            </div>
            <div className={styles.connectionPanel}>
              <div className={styles.connectionHeader}><span>SHARED SPATIAL CONTEXT</span><span>PLATFORM AGNOSTIC</span></div>
              <div className={styles.connectionBody}>
                <div className={styles.connectionCore}><small>MACHINE-READABLE PLACE</small><strong>SIM</strong><span>Shared space identity</span></div>
                <div className={styles.connectionNodes}>
                  <div><span>01</span><strong>Sensors + IoT</strong></div>
                  <div><span>02</span><strong>BMS + energy</strong></div>
                  <div><span>03</span><strong>FM / IWMS / CMMS</strong></div>
                  <div><span>04</span><strong>Portfolio tools + APIs</strong></div>
                </div>
              </div>
              <p className={styles.connectionNote}>Example software categories, not a list of certified integrations. Availability depends on system access, data quality and agreed implementation scope.</p>
            </div>
          </div>
          <div className={`page-shell ${styles.signalGrid}`}>
            {connectedSignals.map(([title, description], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </section>

        <section className={styles.portfolio} aria-labelledby="portfolio-title">
          <div className={`page-shell ${styles.portfolioGrid}`}>
            <div className={styles.portfolioVisual}>
              <Image src="/images/portfolio-model.webp" alt="Multiple spaces connected into a portfolio intelligence platform" fill sizes="(max-width: 900px) 100vw, 52vw" />
              <div className={styles.portfolioTag}><span>PORTFOLIO STATUS</span><strong>Connected</strong></div>
            </div>
            <div className={styles.portfolioCopy}>
              <p className="eyebrow">04 / PORTFOLIO INTELLIGENCE</p>
              <h2 id="portfolio-title">One space becomes understandable. <span>Every location becomes comparable.</span></h2>
              <p>When spaces are described using consistent data, the same spatial foundation can support questions across buildings and portfolios—not just a single test fit. The value compounds as more locations and data sources are connected.</p>
              <ul>
                <li>Identify and compare rooms, zones and building attributes consistently.</li>
                <li>Apply people, place and policy requirements across locations.</li>
                <li>Relate operational and asset data to the right physical spaces.</li>
                <li>Support planning, design, utilization and investment decisions.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="start-title">
          <div className={`page-shell ${styles.finalCtaInner}`}>
            <p className="eyebrow">05 / PUT YOUR SPATIAL DATA TO WORK</p>
            <h2 id="start-title">Start with the building.<br /><span>Build on the intelligence.</span></h2>
            <p>Begin with a floor plan or existing building information, or talk with us about structuring spatial data across a larger portfolio. Test fitting is one way to use that foundation—not its limit.</p>
            <div className={styles.finalActions}>
              <a className="button button-primary button-large" href={PROJECT_URL} target="_blank" rel="noopener noreferrer">Submit a new project</a>
              <ContactButton className="button button-secondary button-large" interest="Portfolio strategy">Discuss your portfolio</ContactButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <div className="footer-top">
            <Link href="/" aria-label="Arcalogix home"><Image src="/images/arcalogix-logo.webp" alt="Arcalogix" width={149} height={38} /></Link>
            <p>One spatial intelligence platform. Every space, one strategy.</p>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Arcalogix. All rights reserved.</span>
            <div>
              <Link href="/#value">Why Arcalogix</Link>
              <Link href="/#platform">Platform</Link>
              <Link href="/#ecosystem">Who it connects</Link>
              <Link href="/#services">Services</Link>
              <Link href="/sim-project">View a SIM Project</Link>
              <Link href="/about">About Us</Link>
              <a href="mailto:sales@arcalogix.com">Contact</a>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
