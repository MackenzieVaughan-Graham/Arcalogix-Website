import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import AboutTopReset from "./AboutTopReset";
import AboutMotion from "./AboutMotion";
import styles from "./about.module.css";
import AboutContactForm from "./AboutContactForm";

export const metadata: Metadata = {
  title: "About Arcalogix | Connecting the Built Environment",
  description:
    "Arcalogix connects the professionals who design and deliver spaces with the people who occupy and operate them. Discover our mission and the openArcade vision.",
};

// Active openArcade Vercel deployment and existing Arcalogix account destinations.
const destinations = {
  openArcade: "https://openarcade-nextjs-starter.vercel.app/",
  openArcadeParticipation: "https://openarcade-nextjs-starter.vercel.app/ownership#top",
  customerLogin: "https://arcalogixdashboard.com/login",
  customerSignup: "https://arcalogixdashboard.com/create-account",
  authoringLogin: "https://projects.arcalogix.com/login",
  authoringAccess: "https://projects.arcalogix.com/",
} as const;

const connections = [
  "Architects + AEC teams",
  "Enterprise occupiers",
  "Owners + operators",
  "Product + technology partners",
] as const;

const approach = [
  {
    number: "01",
    title: "Understand the need.",
    description:
      "Start with the people, policies, standards and business decisions a space needs to support—not just its floor plan.",
  },
  {
    number: "02",
    title: "Bring everyone into the same picture.",
    description:
      "Make spatial information accessible to the professionals developing a design and the customers evaluating the outcome.",
  },
  {
    number: "03",
    title: "Keep the information useful.",
    description:
      "Carry the model and its context beyond early planning, creating a foundation for revisions and ongoing operations.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Preserve the proven instant /about top-of-page navigation behaviour. */}
      <AboutTopReset />
      <AboutMotion />
      <div id="about-top" aria-hidden="true" />
      <SiteHeader />

      <main className={styles.aboutPage} data-page="arcalogix-about" id="main-content">
        <section className={styles.hero} aria-labelledby="about-title">
          <div className={`page-shell ${styles.heroLayout}`}>
            <div className={styles.heroCopy}>
              <p className="eyebrow">ABOUT ARCALOGIX</p>
              <h1 id="about-title">We believe space should <span>work together.</span></h1>
              <p className={styles.heroLead}>
                Arcalogix is a technology company connecting the professionals who design and deliver spaces with the people who occupy and operate them.
              </p>
              <p className={styles.heroSupporting}>
                Our purpose is simple: make it easier to share the right information, make informed decisions and carry that understanding through the life of a space.
              </p>
              <a className={styles.heroLink} href="#our-purpose">
                Get to know us
              </a>
            </div>

            <div className={styles.connectionVisual} aria-label="Arcalogix connects design and delivery professionals with occupiers and building operators">
              <div className={styles.visualTopline}><span>ARCALOGIX / ONE SHARED CONTEXT</span><span>01—03</span></div>
              <div className={styles.visualDiagram}>
                <div className={styles.diagramAudience}>
                  <small>PEOPLE WHO CREATE SPACE</small>
                  <strong>Design<br />+ deliver</strong>
                  <span>Architects / AEC teams</span>
                </div>
                <div className={styles.diagramJoin} aria-hidden="true"><i /></div>
                <div className={styles.diagramCentre}>
                  <div className={styles.diagramMark} aria-hidden="true"><i /><i /><i /><i /></div>
                  <small>ARCALOGIX</small>
                  <strong>One shared<br />spatial foundation</strong>
                </div>
                <div className={styles.diagramJoin} aria-hidden="true"><i /></div>
                <div className={styles.diagramAudience}>
                  <small>PEOPLE WHO USE SPACE</small>
                  <strong>Occupy<br />+ operate</strong>
                  <span>Owners / enterprise teams</span>
                </div>
              </div>
              <div className={styles.visualFooter}>PEOPLE <span>·</span> PLACE <span>·</span> POLICY</div>
            </div>
          </div>
        </section>

        <section id="our-purpose" className={`${styles.purpose} ${styles.anchorSection}`} aria-labelledby="purpose-title">
          <div className={`page-shell ${styles.purposeLayout}`}>
            <div data-about-reveal>
              <p className="eyebrow">01 / OUR PURPOSE</p>
              <h2 id="purpose-title">The best spaces start with <span>a shared understanding.</span></h2>
            </div>
            <div className={styles.purposeCopy} data-about-reveal>
              <p>
                A building project brings together different people with different priorities. Designers focus on the space they are creating. Customers need to know whether that space will work for their people, operations and business.
              </p>
              <p>
                We exist to close that gap. By connecting requirements, design decisions and spatial information, Arcalogix gives both sides a clearer way to collaborate.
              </p>
            </div>
          </div>
          <div className={`page-shell ${styles.partners}`} data-about-reveal>
            <p>WHO WE CONNECT</p>
            <div className={styles.partnerItems}>
              {connections.map((connection) => <span key={connection}>{connection}</span>)}
            </div>
          </div>
        </section>

        <section className={styles.approachSection} aria-labelledby="approach-title">
          <div className={`page-shell ${styles.approachLayout}`}>
            <div className={styles.approachIntro} data-about-reveal>
              <p className="eyebrow">02 / HOW WE WORK</p>
              <h2 id="approach-title">Connected thinking.<br /><span>Better decisions.</span></h2>
              <p>
                We create software around a continuous flow of information—not isolated drawings, disconnected teams or one-off project files.
              </p>
              <p className={styles.productReference}>
                Today, Arch!e, AxLayout, the customer dashboard and our AWS IoT Core integration provide a working foundation for model creation, authoring, customer planning and connected spatial data.
              </p>
            </div>
            <div className={styles.approachList}>
              {approach.map((step) => (
                <article key={step.number} className={styles.approachItem} data-about-reveal>
                  <span className={styles.approachNumber}>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.futureSection} aria-labelledby="future-title">
          <div className="page-shell">
            <div className={styles.futureIntro} data-about-reveal>
              <p className="eyebrow">03 / OUR BIG AMBITION</p>
              <h2 id="future-title">Make a connected digital foundation <span>the standard for the built environment.</span></h2>
              <div className={styles.futureBody}>
                <p>
                  Our ambition is bigger than a set of software tools. We want to change how the AEC industry works together—from the first customer requirement to design, construction and the ongoing operation of a space.
                </p>
                <p>
                  <strong>openArcade</strong> is the planned ecosystem to carry this forward: shared models, requirements, revisions and professional workflows in one connected environment. Its roadmap includes a documentation engine, project coordination, integrations and payments, with regulated design and approvals remaining with licensed professionals.
                </p>
              </div>
            </div>

            <div className={styles.futureContinuum} data-about-reveal aria-label="Arcalogix foundation today and planned openArcade evolution">
              <div><span>TODAY</span><strong>Arcalogix</strong><small>Planning + spatial intelligence</small></div>
              <i aria-hidden="true" />
              <div><span>BUILDING TOWARD</span><strong>openArcade</strong><small>Connected professional delivery</small></div>
              <i aria-hidden="true" />
              <div><span>THE AMBITION</span><strong>Industry-wide</strong><small>A shared digital foundation</small></div>
            </div>

            <div className={styles.invitation} data-about-reveal>
              <div>
                <p className="eyebrow">HELP SHAPE WHAT COMES NEXT</p>
                <h3>The future of this industry should be built with the people in it.</h3>
                <p>
                  We invite architects, AEC professionals and others who share this vision to explore openArcade—and register their interest in helping shape its future, including through a potential investment opportunity.
                </p>
                <small>Participation and investment are exploratory. Registration is an expression of interest only; no securities are being offered and no payment is requested.</small>
              </div>
              <div className={styles.invitationActions}>
                <a className={styles.primaryAction} href={destinations.openArcade} target="_blank" rel="noopener noreferrer">Discover openArcade</a>
                <a className={styles.secondaryAction} href={destinations.openArcadeParticipation} target="_blank" rel="noopener noreferrer">Explore participation / investment</a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.accessSection} aria-labelledby="access-title">
          <div className={`page-shell ${styles.accessLayout}`}>
            <div className={styles.accessIntro} data-about-reveal>
              <p className="eyebrow">04 / WORK WITH ARCALOGIX</p>
              <h2 id="access-title">Your workspace.<br /><span>Or a conversation.</span></h2>
              <p>
                Already working with Arcalogix? Sign in to the right platform. New to what we do? Send our team a message to arrange a conversation or explore a product demo.
              </p>
            </div>
            <div className={styles.accessRows} data-about-reveal>
              <div className={styles.accessRow}>
                <div className={styles.accessRowCopy}>
                  <span className={styles.accessKicker}>01 / CUSTOMER ACCESS</span>
                  <strong>Customer dashboard</strong>
                  <small>For occupiers and customer teams reviewing spaces, submissions, and project deliverables.</small>
                </div>
                <div className={styles.accessActions}>
                  <a href={destinations.customerLogin} target="_blank" rel="noopener noreferrer">Sign in</a>
                  <a href={destinations.customerSignup} target="_blank" rel="noopener noreferrer">Create account</a>
                </div>
              </div>
              <div className={styles.accessRow}>
                <div className={styles.accessRowCopy}>
                  <span className={styles.accessKicker}>02 / PROFESSIONAL ACCESS</span>
                  <strong>Arcalogix authoring</strong>
                  <small>For architects and AEC professionals developing layouts, working with models, and applying design standards.</small>
                </div>
                <div className={styles.accessActions}>
                  <a href={destinations.authoringLogin} target="_blank" rel="noopener noreferrer">Sign in</a>
                  <a href={destinations.authoringAccess} target="_blank" rel="noopener noreferrer">Request access</a>
                </div>
              </div>
              <div className={styles.contactRow}>
                <div className={styles.accessRowCopy}>
                  <span className={styles.accessKicker}>03 / SPEAK WITH OUR TEAM</span>
                  <strong>Start a conversation</strong>
                  <small>Want to see Arcalogix in action, discuss a project, or explore a partnership? Tell us a little about your needs and we can follow up about a chat or demo.</small>
                </div>
                <AboutContactForm />
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
              <Link href="/about" scroll={false}>About</Link>
              <a href={destinations.openArcade} target="_blank" rel="noopener noreferrer">openArcade</a>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
