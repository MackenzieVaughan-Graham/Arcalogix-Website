import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import PlatformJourney from "@/components/PlatformJourney";
import { ContactButton } from "@/components/ContactProvider";

const services = [
  {
    number: "01",
    label: "PLANNING",
    title: "Test fitting",
    description: "Understand how a potential or existing space fits your requirements before moving forward. Our design team applies your workplace standards to each test fit.",
    priceQualifier: "PER PROJECT",
    price: "$0.15",
    priceUnit: "/ sq ft",
    priceDetail: "Includes 2 free iterations per project",
    items: ["Standards-based test fitting", "Space planning and layout options", "Two included iterations"],
    interest: "Test fits and planning",
  },
  {
    number: "02",
    label: "DELIVERY",
    title: "Design & permitting support",
    description: "Move an approved layout forward with professional design services, drawing coordination and permitting support, with local professional involvement where required.",
    priceQualifier: "PROFESSIONAL SERVICES FROM",
    price: "$75",
    priceUnit: "/ hour",
    priceDetail: "Starting rate for professional services",
    items: ["Design development", "Drawing and document coordination", "Permitting support"],
    interest: "Design and permitting",
  },
  {
    number: "03",
    label: "INTELLIGENCE",
    title: "Portfolio intelligence",
    description: "Keep your Spatial Intelligence Models (SIMs) active in one platform so teams can revisit spaces, compare options and use a consistent spatial record across the portfolio.",
    priceQualifier: "LIVE SIM HOSTING",
    price: "$0.01",
    priceUnit: "/ sq ft / month",
    priceDetail: "For each SIM kept live on the platform",
    items: ["Persistent spatial model records", "Portfolio-wide planning context", "Standards and scenario comparison"],
    interest: "Portfolio intelligence",
  },
  {
    number: "04",
    label: "OPERATIONS",
    title: "Digital twins, IoT & asset management",
    description: "Extend the spatial model into occupied operations with optional connected device data and asset information, designed to support space management over time.",
    priceQualifier: "CONNECTED OPERATIONS FROM",
    price: "$10",
    priceUnit: "/ device / month",
    priceDetail: "Starting price per connected device",
    items: ["Digital twin foundations", "IoT occupancy and environmental inputs", "Space and asset context"],
    interest: "Digital twins and IoT",
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

        {/* PLATFORM AND SERVICES — position the value proposition on the left, pricing on the right */}
        <section className="services-section section-pad" id="services" aria-labelledby="services-heading">
          <div className="page-shell services-layout">
            <div className="services-intro">
              <p className="eyebrow">03 / PLATFORM + SERVICES</p>
              <h2 id="services-heading">Software for the decisions.<br /><span>People for the delivery.</span></h2>
              <p className="section-lede">One connected spatial platform, backed by our internal design team. Standardize planning across locations, deliver your projects, and keep the information useful long after move-in.</p>
            </div>
            <div className="services-list">
              {services.map((service) => (
                <article className="service-row" key={service.number}>
                  <div className="service-row-top">
                    <span>{service.number} / {service.label}</span>
                    <span className="service-row-icon" aria-hidden="true">↗</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p className="service-row-description">{service.description}</p>
                  <div className="service-price" aria-label={`${service.priceQualifier}: ${service.price} ${service.priceUnit}`}>
                    <span className="service-price-qualifier">{service.priceQualifier}</span>
                    <div className="service-price-figure"><strong>{service.price}</strong><span>{service.priceUnit}</span></div>
                    <span className="service-price-detail">{service.priceDetail}</span>
                  </div>
                  <ul className="service-includes">
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <ContactButton className="service-link" interest={service.interest}>
                    Discuss this service <span aria-hidden="true">↗</span>
                  </ContactButton>
                </article>
              ))}
              <p className="services-note">Final scope, any applicable third-party costs, professional sign-off and service availability depend on the project and jurisdiction. Digital twin and IoT integrations are an expanding part of the offering.</p>
            </div>
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

        {/* VISION */}
        <section className="continuum-section section-pad" aria-labelledby="continuum-heading">
          <div className="page-shell">
            <p className="eyebrow">05 / A CONNECTED SPACE LIFECYCLE</p>
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
