import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import PlatformJourney from "@/components/PlatformJourney";
import AudienceSelector from "@/components/AudienceSelector";
import { ContactButton } from "@/components/ContactProvider";

const services = [
  {
    number: "01",
    label: "PLANNING",
    title: "Test fits & space planning",
    description: "See what a space can support before a lease, move, expansion, or reconfiguration. Every layout is informed by your requirements—not a generic template.",
    items: ["Program-based test fits", "Workplace standards applied", "Options and adjustments"],
    interest: "Test fits and planning",
    image: "/images/portfolio-model.webp",
    alt: "Architectural 3D office model used to explore test-fit scenarios",
  },
  {
    number: "02",
    label: "DELIVERY",
    title: "Design & permitting support",
    description: "Carry approved spatial decisions into design development, drawing coordination, and jurisdiction-appropriate permitting workflows with professional oversight.",
    items: ["Design and layout development", "Drawing coordination", "Local professional review where required"],
    interest: "Design and permitting",
    image: "/images/drawing-workflow.webp",
    alt: "Illustrative Arcalogix drawing workflow prototype",
  },
  {
    number: "03",
    label: "INTELLIGENCE",
    title: "Portfolio intelligence",
    description: "Turn isolated floor plans into comparable spatial information for capacity, design standards, real estate options, and long-term space decisions.",
    items: ["Consistent portfolio records", "Scenario comparisons", "Standard-based decision inputs"],
    interest: "Portfolio intelligence",
    image: null,
    alt: "",
  },
  {
    number: "04",
    label: "OPERATIONS",
    title: "Digital twins, IoT & assets",
    description: "Extend the spatial record into occupied operations with connected space information, asset context, and optional occupancy or environmental data integrations.",
    items: ["Digital twin foundations", "IoT data integration pathways", "Space and asset context"],
    interest: "Digital twins and IoT",
    image: null,
    alt: "",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* PRIMARY POSITIONING */}
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-ghost" aria-hidden="true">PORTFOLIO</div>
          <div className="page-shell hero-inner">
            <p className="eyebrow hero-kicker"><span className="red-dot" /> BUILT FOR ENTERPRISE REAL ESTATE</p>
            <h1 id="hero-title">Every space.<br /><span>One strategy.</span></h1>
            <p className="hero-lede">Better real estate decisions start with a connected spatial portfolio. Standardize your spaces, test fit to your requirements, and move from planning to delivery with one platform and one team.</p>
            <div className="hero-actions">
              <ContactButton className="button button-primary button-large">Discuss your portfolio <span aria-hidden="true">↗</span></ContactButton>
              <a href="#platform" className="button button-secondary button-large">Explore the platform <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-visual" aria-label="Illustrative spatial model experience">
              <div className="hero-visual-topline"><span><i /> ARCALOGIX / SPATIAL PLATFORM</span><span>FROM MODEL TO DECISION</span></div>
              <div className="hero-main-image">
                <Image src="/images/portfolio-model.webp" alt="Axonometric commercial office model representing a structured spatial portfolio" fill priority sizes="(max-width: 800px) 100vw, 1150px" />
              </div>
              <div className="hero-float hero-float-left"><span>01 / SPATIAL RECORD</span><strong>One source of spatial truth.</strong><small>Models · Standards · Scenarios</small></div>
              <div className="hero-float hero-float-right"><span>02 / DECISION SUPPORT</span><strong>Compare before you commit.</strong><small>Capacity · Planning · Portfolio</small><div className="mini-bars"><i /><i /><i /><i /><i /></div></div>
              <div className="hero-visual-bottomline"><span>MODEL-DRIVEN PORTFOLIO PLANNING</span><span>ILLUSTRATIVE PROJECT VIEW</span></div>
            </div>
            <div className="hero-footnote"><span className="hero-footline" /><span>START WITH A FLOOR PLAN. BUILD TOWARD PORTFOLIO INTELLIGENCE.</span><span>SCROLL TO EXPLORE ↓</span></div>
          </div>
        </section>

        {/* SHORT PROPOSITION STRIP */}
        <section className="principle-strip" aria-label="Arcalogix benefits">
          <div className="page-shell principle-grid">
            <div><span>01 /</span><strong>One spatial record</strong><small>Consistent information across locations</small></div>
            <div><span>02 /</span><strong>Your standards, reused</strong><small>People, place, and policy in every plan</small></div>
            <div><span>03 /</span><strong>One connected workflow</strong><small>From early planning to ongoing operations</small></div>
          </div>
        </section>

        {/* SCROLL DRIVEN PLATFORM STORY */}
        <PlatformJourney />

        {/* STANDARDS AND DECISIONS */}
        <section id="standards" className="standards-section section-pad" aria-labelledby="standards-heading">
          <div className="page-shell">
            <div className="standards-heading-grid">
              <div><p className="eyebrow">02 / STANDARDIZATION</p><h2 id="standards-heading">Your standards shouldn&apos;t reset<br /><span>at every new address.</span></h2></div>
              <p>Every move, refresh, or lease decision needs the same inputs. Arcalogix helps you build a reusable spatial standard so teams evaluate different properties on common terms.</p>
            </div>
            <div className="standards-cards">
              <article className="standard-card"><span className="card-index">01 / PEOPLE</span><div className="standard-glyph standard-people" aria-hidden="true"><i /><i /><i /><i /></div><h3>What your teams need.</h3><p>Headcount, workplace ratios, room programs, capacity targets, and the way people work.</p></article>
              <article className="standard-card"><span className="card-index">02 / PLACE</span><div className="standard-glyph standard-place" aria-hidden="true"><i /><i /><i /><i /></div><h3>What the space can support.</h3><p>Floor area, geometry, existing conditions, spatial relationships, and fit-out constraints.</p></article>
              <article className="standard-card"><span className="card-index">03 / POLICY</span><div className="standard-glyph standard-policy" aria-hidden="true"><i /><i /><i /></div><h3>What the portfolio must achieve.</h3><p>Space standards, target utilization, design requirements, and financial benchmarks.</p></article>
            </div>
            <p className="standards-bottom"><span aria-hidden="true">↗</span> The outcome: options you can compare across sites—not isolated drawings you have to reconcile.</p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services-section section-pad" id="services" aria-labelledby="services-heading">
          <div className="page-shell">
            <div className="section-heading services-heading">
              <p className="eyebrow">03 / PLATFORM + SERVICES</p>
              <h2 id="services-heading">Software for the decisions.<br /><span>People for the delivery.</span></h2>
              <p className="section-lede">Use the spatial platform to see the options. Work with our internal design team to carry projects forward, across your locations and through the right professional workflows.</p>
            </div>
            <div className="service-grid">
              {services.map((s, index) => (
                <article className="service-card" key={s.number}>
                  <div className="service-card-top"><span>{s.number} / {s.label}</span><span aria-hidden="true">↗</span></div>
                  <div className="service-art">
                    {s.image ? <Image src={s.image} alt={s.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /> : index === 2 ? (
                      <div className="service-analytics" aria-label="Illustration of standardized information across a portfolio"><div className="service-chart-head"><i /> STANDARDIZED PORTFOLIO <small>ILLUSTRATIVE</small></div><div className="service-chart-row"><b>Site readiness</b><span className="bar-track"><i style={{ width: "78%" }} /></span></div><div className="service-chart-row"><b>Capacity fit</b><span className="bar-track"><i style={{ width: "61%" }} /></span></div><div className="service-chart-row"><b>Program alignment</b><span className="bar-track"><i style={{ width: "86%" }} /></span></div></div>
                    ) : (
                      <div className="service-network" aria-label="Illustration of optional occupancy sensors and asset information connected to a model"><div className="network-core">SIM</div><div className="network-item network-item-a">SPACE</div><div className="network-item network-item-b">IOT</div><div className="network-item network-item-c">ASSETS</div><span className="network-line network-line-a" /><span className="network-line network-line-b" /><span className="network-line network-line-c" /></div>
                    )}
                  </div>
                  <div className="service-card-body"><h3>{s.title}</h3><p>{s.description}</p><ul>{s.items.map((item) => <li key={item}>{item}</li>)}</ul><ContactButton className="service-link" interest={s.interest}>Explore this service <span aria-hidden="true">↗</span></ContactButton></div>
                </article>
              ))}
            </div>
            <p className="services-note">Service scope and professional sign-off depend on the project and jurisdiction. Digital-twin and IoT integrations are an evolving part of the platform offering.</p>
          </div>
        </section>

        {/* GLOBAL SERVICE DELIVERY */}
        <section className="delivery-section" aria-labelledby="delivery-heading">
          <Image src="/images/design-workflow.webp" alt="Architectural office model used as a reference for design delivery" fill sizes="100vw" />
          <div className="delivery-overlay" />
          <div className="page-shell delivery-content">
            <p className="eyebrow">04 / GLOBAL PORTFOLIOS, CONSISTENT SERVICE</p>
            <h2 id="delivery-heading">One relationship.<br /><em>Every next location.</em></h2>
            <p>Arcalogix combines a shared spatial platform with an internal design team. We help occupiers maintain consistent project standards and coordinate delivery across their portfolios, with locally qualified professionals involved where required.</p>
            <ContactButton className="button button-light">Plan your next location <span aria-hidden="true">↗</span></ContactButton>
          </div>
        </section>

        {/* AUDIENCES */}
        <AudienceSelector />

        {/* VISION */}
        <section className="continuum-section section-pad" aria-labelledby="continuum-heading">
          <div className="page-shell">
            <p className="eyebrow">06 / A CONNECTED SPACE LIFECYCLE</p>
            <div className="continuum-intro"><h2 id="continuum-heading">The floor plan is the beginning.<br /><span>Not the final deliverable.</span></h2><p>Keep the spatial record useful as a site moves from consideration to occupation and, ultimately, to its next change.</p></div>
            <div className="continuum-line">
              <div><span className="continuum-node">01</span><h3>Evaluate</h3><p>Understand the existing space</p></div>
              <div><span className="continuum-node">02</span><h3>Plan</h3><p>Test options against standards</p></div>
              <div><span className="continuum-node">03</span><h3>Deliver</h3><p>Coordinate design and permitting</p></div>
              <div><span className="continuum-node">04</span><h3>Operate</h3><p>Extend to digital twins and IoT</p></div>
            </div>
            <div className="continuum-note"><span className="status-dot" /> CURRENT FOUNDATION: intake, spatial modelling and test fitting <span className="continuum-divider">/</span> EXPANDING: documentation, portfolio operations and IoT</div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="final-cta" aria-labelledby="final-heading">
          <div className="final-cta-ghost" aria-hidden="true">NEXT.</div>
          <div className="page-shell final-cta-inner"><p className="eyebrow">START WITH ONE LOCATION. THINK PORTFOLIO-WIDE.</p><h2 id="final-heading">Make your next space<br /><span>a better decision.</span></h2><p>Tell us what you&apos;re planning. We&apos;ll help you identify the right place to begin—with a test fit, a spatial model, or a broader portfolio standard.</p><ContactButton className="button button-primary button-large">Talk to the Arcalogix team <span aria-hidden="true">↗</span></ContactButton></div>
        </section>
      </main>
      <footer className="site-footer"><div className="page-shell footer-inner"><div className="footer-top"><Link href="/" aria-label="Arcalogix home"><Image src="/images/arcalogix-logo.webp" alt="Arcalogix" width={149} height={38} /></Link><p>Spatial intelligence for better real estate decisions.</p></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Arcalogix. All rights reserved.</span><div><a href="#platform">Platform</a><a href="#services">Services</a><a href="mailto:sales@arcalogix.com">Contact</a><Link href="/privacy">Privacy</Link></div></div></div></footer>
    </>
  );
}
