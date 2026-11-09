import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import PortfolioValue from "@/components/PortfolioValue";
import PlatformJourney from "@/components/PlatformJourney";
import ConnectedEcosystem from "@/components/ConnectedEcosystem";
import ServicesOverview from "@/components/ServicesOverview";
import { ContactButton } from "@/components/ContactProvider";
import ScrollEnhancer from "@/components/ScrollEnhancer";

const PROJECT_URL = "https://arcalogixdashboard.com/general-submit-project";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* THE PROMISE — preserve the approved enterprise positioning. */}
        <section className="hero-section simplified-hero" aria-labelledby="hero-title">
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
              <a href="#value" className="button button-primary button-large">Explore the approach</a>
              <ContactButton className="button button-secondary button-large" interest="Portfolio strategy">Discuss your portfolio</ContactButton>
            </div>
            <div className="hero-visual" aria-label="Illustrative spatial intelligence model representing a connected property portfolio">
              <div className="hero-visual-topline"><span><i /> ARCALOGIX / SPATIAL INTELLIGENCE</span><span>CONNECTED SPATIAL RECORD</span></div>
              <div className="hero-main-image">
                <Image src="/images/portfolio-model.webp" alt="Illustrative 3D commercial space representing reusable spatial information for planning and portfolio decisions" fill priority sizes="(max-width: 800px) 100vw, 1180px" />
              </div>
              <div className="hero-visual-bottomline"><span>PEOPLE · PLACE · POLICY</span><span>FROM PLANNING TO OPERATIONS</span></div>
            </div>
          </div>
        </section>

        {/* WHY: lead with the enterprise-level portfolio challenge. */}
        <PortfolioValue />

        {/* HOW: use the supplied architectural sequence to show the reusable SIM. */}
        <PlatformJourney />

        {/* WHO: a connected workflow for occupiers, professionals and suppliers. */}
        <ConnectedEcosystem />

        {/* WHAT: commercial applications of the platform, including current pricing. */}
        <ServicesOverview />

        {/* NEXT STEP: enterprise conversation first, direct project intake second. */}
        <section id="get-started" className="final-cta simplified-final-cta" aria-labelledby="final-heading">
          <div className="page-shell final-cta-inner">
            <p className="eyebrow">05 / GET STARTED</p>
            <h2 id="final-heading">Start with your next space.<br /><span>Think portfolio-wide.</span></h2>
            <p>Whether you&apos;re evaluating one location or looking for consistency across a global portfolio, let&apos;s work out where Arcalogix can make the biggest difference.</p>
            <div className="simplified-final-actions">
              <ContactButton className="button button-primary button-large" interest="Portfolio strategy">Discuss your portfolio</ContactButton>
              <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="button button-secondary button-large">Submit a new project</a>
            </div>
          </div>
        </section>
        <ScrollEnhancer />
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
              <a href="#value">Why Arcalogix</a>
              <a href="#platform">Platform</a>
              <a href="#ecosystem">Who it connects</a>
              <a href="#services">Services</a>
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
