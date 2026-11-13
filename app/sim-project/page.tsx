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
    "Follow an Arcalogix project from submission and pricing through a 3D SIM, design documentation, connected operations and portfolio intelligence.",
};

const modelStages = [
  {
    number: "01",
    label: "SOURCE",
    title: "Existing plan",
    image: "/images/floor-plan.webp",
    alt: "An existing floor plan used as the source for a SIM project",
  },
  {
    number: "02",
    label: "FOUNDATION",
    title: "Spatial model",
    image: "/images/platform-model-shell.png",
    alt: "A three-dimensional shell model created from the source floor plan",
  },
  {
    number: "03",
    label: "DECISION",
    title: "Furnished SIM",
    image: "/images/platform-furnished-model.png",
    alt: "A furnished three-dimensional SIM showing a planned workplace",
  },
  {
    number: "04",
    label: "INTELLIGENCE",
    title: "Connected portfolio",
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
              <h1 id="sim-project-title">From floor plan to <span>portfolio intelligence.</span></h1>
              <p className={styles.heroLead}>
                Start with one project. Get the clarity to approve a space, the spatial foundation to deliver it, and a 3D SIM that keeps working after construction.
              </p>
              <div className={styles.heroActions}>
                <a className="button button-primary button-large" href={PROJECT_URL} target="_blank" rel="noopener noreferrer">Submit a new project</a>
                <ContactButton className="button button-secondary button-large" interest="Test fits and planning">Talk through a project</ContactButton>
              </div>
            </div>

            <div className={styles.heroVisual} aria-label="A 3D SIM connects a project from planning through operation">
              <div className={styles.visualHeader}><span><i /> ARCALOGIX / PROJECT SIM</span><span>ONE CONNECTED RECORD</span></div>
              <div className={styles.visualImage}>
                <Image src="/images/common-foundation-model.png" alt="A three-dimensional workplace SIM used throughout a project" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
              </div>
              <div className={styles.visualFooter}><span>PLAN</span><i /><span>DECIDE</span><i /><span>DELIVER</span><i /><span>OPERATE</span></div>
            </div>
          </div>
        </section>

        <ProjectScrollJourney />

        <section className={styles.foundation} aria-labelledby="foundation-title">
          <div className="page-shell">
            <div className={styles.foundationIntro}>
              <div>
                <p className="eyebrow">02 / ONE SPATIAL FOUNDATION</p>
                <h2 id="foundation-title">Build the model once.<br /><span>Keep adding value.</span></h2>
              </div>
              <p>The information created to answer the first question—will this space work?—becomes the foundation for every decision that follows.</p>
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
          </div>
        </section>

        <section className={styles.integration} aria-labelledby="integration-title">
          <div className={`page-shell ${styles.integrationGrid}`}>
            <div className={styles.integrationCopy}>
              <p className="eyebrow">03 / CONNECTED OPERATIONS</p>
              <h2 id="integration-title">Your SIM should connect to the systems <span>you already use.</span></h2>
              <p>
                Arcalogix is designed to be software- and hardware-agnostic. Compatible sensors, gateways, APIs and enterprise platforms—including IBM environments and other building systems—can feed operational information into the spatial context of the SIM.
              </p>
              <ContactButton className={styles.textLink} interest="Digital twins and IoT">Discuss an IoT connection <span aria-hidden="true">↗</span></ContactButton>
            </div>
            <div className={styles.connectionPanel}>
              <div className={styles.connectionHeader}><span>CONNECTED DATA LAYER</span><span>PLATFORM AGNOSTIC</span></div>
              <div className={styles.connectionBody}>
                <div className={styles.connectionCore}><small>SPATIAL CONTEXT</small><strong>3D SIM</strong><span>One connected record</span></div>
                <div className={styles.connectionNodes}>
                  <div><span>01</span><strong>IoT sensors</strong></div>
                  <div><span>02</span><strong>IBM platforms</strong></div>
                  <div><span>03</span><strong>Building systems</strong></div>
                  <div><span>04</span><strong>Enterprise APIs</strong></div>
                </div>
              </div>
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
              <h2 id="portfolio-title">One SIM answers a project question. <span>A portfolio changes how decisions are made.</span></h2>
              <p>As locations are added, Arcalogix creates a more consistent view of the spaces your organization occupies and how they perform.</p>
              <ul>
                <li>Compare capacity, utilization and operational signals.</li>
                <li>Reuse workplace standards across future projects.</li>
                <li>See patterns across buildings, markets and regions.</li>
                <li>Prioritize leasing, improvement and investment decisions.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="start-title">
          <div className={`page-shell ${styles.finalCtaInner}`}>
            <p className="eyebrow">05 / START THE JOURNEY</p>
            <h2 id="start-title">Start with one space.<br /><span>Keep the intelligence.</span></h2>
            <p>Submit the next project you need to evaluate, or speak with us about connecting a wider real estate portfolio.</p>
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
