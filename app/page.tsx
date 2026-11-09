import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import PlatformJourney from "@/components/PlatformJourney";
import { ContactButton } from "@/components/ContactProvider";
import ServicesScrollScene from "@/components/ServicesScrollScene";
import ScrollEnhancer from "@/components/ScrollEnhancer";
import ConnectedLifecycle from "@/components/ConnectedLifecycle";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* PRIMARY POSITIONING */}
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-video-layer" aria-hidden="true">
            <video className="hero-backdrop-video" autoPlay muted loop playsInline preload="metadata" poster="/images/hero-animation-poster.webp" disablePictureInPicture>
              <source src="/video/arcalogix-spatial-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-video-wash" aria-hidden="true" />
          <div className="page-shell hero-inner">
            <p className="eyebrow hero-kicker"><span className="red-dot" /> BUILT FOR ENTERPRISE REAL ESTATE</p>
            <h1 id="hero-title">Every space.<br /><span>One strategy.</span></h1>
            <p className="hero-lede">Better real estate decisions start with a connected spatial portfolio. Standardize your spaces, test fit to your requirements, and move from planning to delivery with one platform and one team.</p>
            <div className="hero-actions">
              <ContactButton className="button button-primary button-large">Discuss your portfolio</ContactButton>
              <a href="#platform" className="button button-secondary button-large">Explore the platform</a>
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
              <div><p className="eyebrow">02 / STANDARDIZATION</p><h2 id="standards-heading">Your standards <em className="standards-heading-accent">shouldn&apos;t</em><br /><span>reset at every new address.</span></h2></div>
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

        {/* SERVICE PRICING — sticky, scroll-linked crossfades on desktop */}
        <ServicesScrollScene />

        {/* GLOBAL SERVICE DELIVERY */}
        <section className="delivery-section" aria-labelledby="delivery-heading">
          <Image src="/images/design-workflow.webp" alt="Architectural office model used as a reference for design delivery" fill sizes="100vw" />
          <div className="delivery-overlay" />
          <div className="page-shell delivery-content">
            <p className="eyebrow">04 / GLOBAL PORTFOLIOS, CONSISTENT SERVICE</p>
            <h2 id="delivery-heading">One relationship.<br /><em>Every next location.</em></h2>
            <p>Arcalogix combines a shared spatial platform with an internal design team. We help occupiers maintain consistent project standards and coordinate delivery across their portfolios, with locally qualified professionals involved where required.</p>
            <ContactButton className="button button-light">Plan your next location</ContactButton>
          </div>
        </section>

        {/* CONNECTED SPACE LIFECYCLE: four selectable stages */}
        <ConnectedLifecycle />

        {/* FINAL CALL TO ACTION */}
        <section className="final-cta" aria-labelledby="final-heading">
          <div className="final-cta-ghost" aria-hidden="true">NEXT.</div>
          <div className="page-shell final-cta-inner"><p className="eyebrow">START WITH ONE LOCATION. THINK PORTFOLIO-WIDE.</p><h2 id="final-heading">Make your next space<br /><span>a better decision.</span></h2><p>Tell us what you&apos;re planning. We&apos;ll help you identify the right place to begin—with a test fit, a spatial model, or a broader portfolio standard.</p><ContactButton className="button button-primary button-large">Talk to the Arcalogix team</ContactButton></div>
        </section>
        <ScrollEnhancer />
      </main>
      <footer className="site-footer"><div className="page-shell footer-inner"><div className="footer-top"><Link href="/" aria-label="Arcalogix home"><Image src="/images/arcalogix-logo.webp" alt="Arcalogix" width={149} height={38} /></Link><p>Spatial intelligence for better real estate decisions.</p></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Arcalogix. All rights reserved.</span><div><a href="#platform">Platform</a><a href="#services">Services</a><a href="mailto:sales@arcalogix.com">Contact</a><Link href="/privacy">Privacy</Link></div></div></div></footer>
    </>
  );
}
