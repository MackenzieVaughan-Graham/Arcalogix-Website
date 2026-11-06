import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import AboutTopReset from "./AboutTopReset";
import AboutMotion from "./AboutMotion";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us | Arcalogix",
  description:
    "Arcalogix connects the AEC professionals who design and deliver spaces with the customers who occupy and operate them. Learn about our technology and the openArcade vision.",
};

// These URLs are kept in one place for easy editing in VS Code.
// The openArcade destination uses the domain from the existing About page.
// Confirm that your new openArcade Next.js site has been deployed there before publishing.
const destinations = {
  openArcade: "https://openarcade.com/",
  openArcadeOwnership: "https://openarcade.com/ownership",
  customerLogin: "https://arcalogixdashboard.com/login",
  customerSignup: "https://arcalogixdashboard.com/create-account",
  authoringLogin: "https://projects.arcalogix.com/login",
  authoringSignup: "https://projects.arcalogix.com/",
} as const;

const products = [
  {
    number: "01",
    name: "Arch!e",
    tag: "PLAN → MODEL",
    description:
      "Our in-house AI turns 2D floor plans into interactive 3D spatial models—a faster, shared starting point for exploring a space.",
  },
  {
    number: "02",
    name: "AxLayout",
    tag: "MODEL → DESIGN",
    description:
      "AEC professionals author layouts, apply occupier standards and test design options against actual workplace requirements.",
  },
  {
    number: "03",
    name: "Customer dashboard + IoT",
    tag: "DESIGN → DECISIONS",
    description:
      "Customers review projects and spaces, while our AWS IoT Core integration can connect device data to spatial models for operational digital twins.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Keep the tested instant scroll reset and the existing navigation. */}
      <AboutTopReset />
      <AboutMotion />
      <div id="about-top" aria-hidden="true" />
      <SiteHeader />

      <main id="main-content" data-page="arcalogix-about" className={styles.aboutPage}>
        <section className={styles.hero} aria-labelledby="about-title">
          <div className={`page-shell ${styles.heroLayout}`}>
            <div className={styles.heroCopy}>
              <p className="eyebrow">ABOUT ARCALOGIX / OUR PURPOSE</p>
              <h1 id="about-title">Better spaces begin with <span>better connections.</span></h1>
              <p className={styles.heroLead}>
                We build web-based software that connects the professionals who design and deliver spaces with the customers who occupy and operate them.
              </p>
              <div className={styles.heroActions}>
                <a className="button button-primary button-large" href="#our-approach">
                  How we connect the industry <span aria-hidden="true">↓</span>
                </a>
                <a className={styles.heroTextLink} href={destinations.openArcade} target="_blank" rel="noopener noreferrer">
                  Explore openArcade <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className={styles.network} aria-label="Arcalogix connects AEC professionals with occupiers and operators through shared spatial information">
              <div className={styles.networkTop}>
                <span>ARCALOGIX / THE CONNECTED SPACE</span>
                <span>01—03</span>
              </div>
              <div className={styles.networkContent}>
                <div className={styles.networkSide}>
                  <span>THE PROFESSIONALS</span>
                  <strong>Design<br />+ deliver</strong>
                  <small>Architects, designers and AEC teams</small>
                </div>
                <div className={styles.networkLine} aria-hidden="true"><i /></div>
                <div className={styles.networkCore}>
                  <div className={styles.networkModel} aria-hidden="true">
                    <span className={styles.networkShapeA} />
                    <span className={styles.networkShapeB} />
                    <span className={styles.networkShapeC} />
                    <span className={styles.networkShapeD} />
                  </div>
                  <span>ARCALOGIX</span>
                  <strong>Shared spatial<br />intelligence</strong>
                </div>
                <div className={styles.networkLine} aria-hidden="true"><i /></div>
                <div className={styles.networkSide}>
                  <span>THE CUSTOMERS</span>
                  <strong>Occupy<br />+ operate</strong>
                  <small>Enterprise real estate and workplace teams</small>
                </div>
              </div>
              <div className={styles.networkBottom}>ONE MODEL FOUNDATION <span>•</span> CONNECTED REQUIREMENTS <span>•</span> BETTER DECISIONS</div>
            </div>
          </div>
        </section>

        <section id="our-approach" className={`${styles.connectionSection} ${styles.anchorSection}`} aria-labelledby="connect-title">
          <div className="page-shell">
            <div className={styles.sectionHeading} data-about-reveal>
              <p className="eyebrow">01 / WHY WE EXIST</p>
              <h2 id="connect-title">Two sides of every project.<br /><span>One shared understanding.</span></h2>
              <p>Design teams and building customers often work from the same space—but with different information, tools and objectives. We bring those perspectives closer together.</p>
            </div>
            <div className={styles.connectionGrid}>
              <article className={styles.connectionColumn} data-about-reveal>
                <div className={styles.columnMeta}>FOR THE PEOPLE WHO CREATE SPACE <span>01</span></div>
                <h3>Make design decisions easier to develop.</h3>
                <p>Give architects and AEC professionals the models, authoring tools and customer requirements they need to plan spaces with greater clarity.</p>
                <div className={styles.columnTag}>ARCH!E <span>+</span> AXLAYOUT</div>
              </article>
              <article className={styles.connectionColumn} data-about-reveal>
                <div className={styles.columnMeta}>FOR THE PEOPLE WHO USE SPACE <span>02</span></div>
                <h3>Make workplace decisions easier to understand.</h3>
                <p>Give occupiers and portfolio teams a clearer view of whether a space supports their people, policies and ongoing operations.</p>
                <div className={styles.columnTag}>CUSTOMER DASHBOARD <span>+</span> SPATIAL DATA</div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.productSection} aria-labelledby="products-title">
          <div className="page-shell">
            <div className={styles.sectionHeading} data-about-reveal>
              <p className="eyebrow">02 / WHAT WE BUILD</p>
              <h2 id="products-title">One connected workflow.<br /><span>Tools built for each step.</span></h2>
            </div>
            <div className={styles.productGrid}>
              {products.map((product) => (
                <article className={styles.productCard} key={product.number} data-about-reveal>
                  <div className={styles.productMeta}><span>{product.number} / 03</span><span>{product.tag}</span></div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </article>
              ))}
            </div>
            <p className={styles.productNote}>Existing tools and integrations shown above. Product availability and implementation vary by project.</p>
          </div>
        </section>

        <section className={styles.visionSection} aria-labelledby="vision-title">
          <div className={`page-shell ${styles.visionLayout}`}>
            <div className={styles.visionCopy} data-about-reveal>
              <p className="eyebrow">03 / OUR AMBITION</p>
              <h2 id="vision-title">This is the foundation.<br /><span>openArcade is the next step.</span></h2>
              <p>
                Our ambition is a shared digital foundation for the AEC industry: a place where professionals can deliver spaces and customers can manage them through connected models, requirements and revisions.
              </p>
              <p>
                The planned openArcade ecosystem builds toward documentation workflows with licensed AEC professionals, project coordination, integrations and payments—connecting design, delivery and ongoing operations.
              </p>
              <div className={styles.visionActions}>
                <a className={styles.visionPrimary} href={destinations.openArcade} target="_blank" rel="noopener noreferrer">
                  Discover openArcade <span aria-hidden="true">↗</span>
                </a>
                <a className={styles.visionSecondary} href={destinations.openArcadeOwnership} target="_blank" rel="noopener noreferrer">
                  Explore the ownership initiative <span aria-hidden="true">↗</span>
                </a>
              </div>
              <small className={styles.visionCaveat}>The openArcade expansion is a roadmap. The ownership initiative is exploratory and is not an offer of securities or a request for payment.</small>
            </div>
            <div className={styles.visionGraphic} data-about-reveal>
              <div className={styles.visionGraphicHeader}>THE OPENARCADE DIRECTION <span>PLANNED</span></div>
              <div className={styles.visionStep}><span>01</span><div><strong>Shared project information</strong><p>Models · Requirements · Revisions</p></div></div>
              <div className={styles.visionStep}><span>02</span><div><strong>Professional delivery</strong><p>Documentation · Coordination · Review</p></div></div>
              <div className={styles.visionStep}><span>03</span><div><strong>Connected operations</strong><p>Portfolio data · Integrations · Intelligence</p></div></div>
              <div className={styles.visionGraphicFooter}>FROM INITIAL REQUIREMENTS TO THE LIFE OF THE SPACE</div>
            </div>
          </div>
        </section>

        <section id="platform-access" className={`${styles.accessSection} ${styles.anchorSection}`} aria-labelledby="access-title">
          <div className="page-shell">
            <div className={styles.accessHeading} data-about-reveal>
              <p className="eyebrow">WORK WITH ARCALOGIX</p>
              <h2 id="access-title">Access your workspace.</h2>
              <p>Already working with us? Choose the platform for your role.</p>
            </div>
            <div className={styles.accessList}>
              <div className={styles.accessRow} data-about-reveal>
                <div><span>FOR OCCUPIERS AND CUSTOMERS</span><h3>Customer dashboard</h3></div>
                <div className={styles.accessLinks}>
                  <a href={destinations.customerLogin} target="_blank" rel="noopener noreferrer">Log in ↗</a>
                  <a href={destinations.customerSignup} target="_blank" rel="noopener noreferrer">Create an account ↗</a>
                </div>
              </div>
              <div className={styles.accessRow} data-about-reveal>
                <div><span>FOR DESIGN AND AEC TEAMS</span><h3>Arcalogix authoring</h3></div>
                <div className={styles.accessLinks}>
                  <a href={destinations.authoringLogin} target="_blank" rel="noopener noreferrer">Log in ↗</a>
                  <a href={destinations.authoringSignup} target="_blank" rel="noopener noreferrer">Join / sign up ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <div className="footer-top">
            <Link href="/" aria-label="Arcalogix home"><Image src="/images/arcalogix-logo.webp" alt="Arcalogix" width={149} height={38} /></Link>
            <p>Connecting the people who create spaces with the people who use them.</p>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Arcalogix</span>
            <div>
              <Link href="/">Home</Link>
              <a href="/about">About</a>
              <a href={destinations.openArcade} target="_blank" rel="noopener noreferrer">openArcade</a>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
