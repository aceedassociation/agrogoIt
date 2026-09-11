import { Suspense } from "react";
import { Check, Compass, Globe2, Handshake, Layers3, Mail, MapPin, MapPinned, MessageSquareText, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Agrogo | Nearshore IT Consulting & Software Delivery",
  description: "Meet Agrogo IT Services: a Casablanca-based IT consulting and software delivery partner with a UK branch, supporting European organisations.",
  path: "/about",
});

const capabilities = [
  "Business and process diagnosis",
  "Requirements and solution definition",
  "IT project management and PMO",
  "Web and mobile software delivery",
  "ERP/CRM implementation and integration",
  "Deployment, training and support",
];

const principles = [
  { icon: Compass, title: "Operational clarity", text: "We define the problem, users and workflow before choosing technology." },
  { icon: ShieldCheck, title: "Controlled delivery", text: "Phases, reporting, QA and acceptance keep responsibility visible." },
  { icon: Handshake, title: "Accountability", text: "One team connects decisions, delivery, training and continuity." },
  { icon: Layers3, title: "Practical architecture", text: "We select the simplest useful system that can support the real operation." },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About Us"
        title={<>Digital transformation with <em>operational discipline.</em></>}
        intro="Agrogo combines consulting, project management and software delivery so organizations can move from fragmented work to useful, controlled systems."
        aside={<><span className="aside-label">Our promise</span><strong>Less friction. More visibility. One accountable partner.</strong><p>We stay close to the operating problem from the first diagnostic through adoption and support.</p></>}
      />

      <section className="section-shell section-pad about-intro">
        <div><div className="eyebrow"><span /> Who we are</div><h2>Consulting, project management and software delivery in one operating model.</h2></div>
        <div><p>We combine business understanding with technical delivery to make web, mobile and management systems work in real operations.</p><p>Our role covers diagnosis, requirements, governance, development, deployment, user training, maintenance and continuous improvement.</p></div>
      </section>

      <section className="about-principles section-pad">
        <div className="section-shell">
          <div className="section-heading centered"><div className="eyebrow"><span /> Working principles</div><h2>How we make the work dependable</h2></div>
          <div className="about-card-grid">{principles.map(({ icon: Icon, title, text }) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section-shell section-pad capability-block">
        <div><div className="eyebrow"><span /> Delivery capabilities</div><h2>One team across the project lifecycle</h2><div className="capability-checks">{capabilities.map((capability) => <div key={capability}><Check />{capability}</div>)}</div></div>
        <div className="readiness-cards"><article><MapPinned /><h3>Local understanding</h3><p>Morocco-based delivery informed by Arabic and French workflows and local organizational constraints.</p></article><article><Globe2 /><h3>International readiness</h3><p>Structured reporting, acceptance, support and delivery practices suited to Moroccan, African and European projects.</p></article></div>
      </section>

      <section className="about-location-section">
        <div className="section-shell about-location-grid">
          <div className="about-location-copy"><div className="eyebrow light"><span /> Where we operate</div><h2>Casablanca roots. UK presence. European delivery.</h2><p>Our Morocco office is located at 101 Najma, Casablanca. We also maintain a UK branch in London for closer communication with UK and European clients.</p><div className="about-location-lines"><span>🇲🇦 101 Najma, Casablanca, Morocco</span><span>🇬🇧 London, United Kingdom</span></div></div>
          <div className="about-map-frame"><iframe title="Approximate Casablanca office area" src="https://www.google.com/maps?q=Casablanca%2C%20Morocco&z=12&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="section-shell contact-grid">
          <div className="contact-intro">
            <div className="eyebrow"><span /> Start a conversation</div><h2>A useful first conversation starts with context.</h2><p>Tell us what is slow, fragmented or difficult to control. We will review your situation and discuss the right next step.</p>
            <div className="contact-note"><strong>What happens next</strong><ol><li>We review your challenge and current tools.</li><li>We identify the likely engagement, risks and open questions.</li><li>We contact you to agree the next useful step.</li></ol></div>
            <div className="about-contact-details"><div><MessageSquareText /><span><strong>Business-first discussion</strong><small>No technical specification is required to begin.</small></span></div><div><ShieldCheck /><span><strong>Structured review</strong><small>Your brief helps us prepare a focused conversation.</small></span></div>{siteConfig.email ? <div><Mail /><span><strong>Email</strong><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></span></div> : null}<div><Phone /><span><strong>Call us</strong>{siteConfig.offices.map((office) => <a href={office.phoneHref} key={office.phoneHref}>{office.flag} {office.phone}</a>)}</span></div>{siteConfig.location ? <div><MapPin /><span><strong>Morocco office</strong><small>{siteConfig.offices[0].address}</small></span></div> : null}</div>
          </div>
          <Suspense fallback={<div className="contact-form" aria-busy="true">Loading project form…</div>}><ContactForm /></Suspense>
        </div>
      </section>
    </main>
  );
}
