import Link from "next/link";
import { ArrowRight, BarChart3, ClipboardCheck, Compass, Gauge, Network, Route, ShieldCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "IT Consulting & Digital Transformation Roadmaps",
  description: "Digital and IT consulting for European organisations: operational diagnosis, COBIT-aligned governance review, transformation roadmaps and PMO delivery.",
  path: "/consulting",
});

const diagnosticAreas = [
  { icon: Network, title: "Processes & workflows", text: "Trace how work, decisions, handoffs and approvals actually move across the organization." },
  { icon: ShieldCheck, title: "Governance & controls", text: "Review roles, risks, controls and decision mechanisms through a COBIT-aligned lens." },
  { icon: BarChart3, title: "Data & management visibility", text: "Identify gaps in information quality, KPI ownership, reporting and operational traceability." },
  { icon: Gauge, title: "Systems & capability maturity", text: "Assess the current tools, integrations and delivery capability against the desired operating model." },
];

const stages = [
  { n: "01", title: "Observe", text: "Interview key teams, map the current reality and collect evidence from processes, systems and reporting." },
  { n: "02", title: "Assess", text: "Measure maturity, risks and control gaps; identify what is preventing performance, visibility or scale." },
  { n: "03", title: "Design", text: "Define the target operating model, priority initiatives, requirements and governance needed to close the gap." },
  { n: "04", title: "Execute", text: "Lead the roadmap through PMO, ERP/CRM, portals, data, automation and software delivery." },
];

const outputs = [
  "Current-state process and systems map",
  "COBIT-aligned governance and maturity view",
  "Risk, control and accountability matrix",
  "Target operating model and solution principles",
  "Prioritised digital transformation roadmap",
  "90-day action plan and 12-month investment sequence",
  "RACI, KPI and implementation governance recommendations",
];

export default function ConsultingPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Digital & IT consulting"
        title={<>Close the gap between <em>today&apos;s operation and tomorrow&apos;s model.</em></>}
        intro="Before changing systems, we diagnose how the organization works today, evaluate its governance and capability, and turn the findings into an actionable digital transformation path."
        aside={<div className="consulting-hero-aside"><span className="aside-label">Diagnostic outcome</span><strong>Clarity on what to change, why it matters and how to deliver it.</strong><div><span>Current state</span><i /><span>Target state</span></div><small>Business process · Controls · Data · Platforms · People</small></div>}
      />

      <section className="consulting-intro section-pad">
        <div className="section-shell consulting-intro-grid">
          <div className="consulting-photo" role="img" aria-label="Business team reviewing a digital transformation plan" />
          <div>
            <div className="eyebrow"><span /> Start with evidence</div>
            <h2>Digital transformation is a business change, not a software shopping list.</h2>
            <p>Agrogo works with leadership and operational teams to see the real operating model: where work slows down, where data disappears, who owns decisions and which systems add friction.</p>
            <p>We then make the gap visible between the current situation and the business you want to run, so each investment in ERP/CRM, portals, data or automation has a clear purpose.</p>
            <Button asChild size="lg" className="button-primary"><Link href="/about?project=Digital%20Diagnostic#contact">Book a Consulting Diagnostic <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      <section className="consulting-areas section-pad">
        <div className="section-shell">
          <div className="section-heading split-heading"><div><div className="eyebrow light"><span /> What we assess</div><h2>One view of the operation, systems and controls.</h2></div><p>Our diagnostic connects operational performance with the technology, governance and data needed to improve it.</p></div>
          <div className="consulting-area-grid">{diagnosticAreas.map(({ icon: Icon, title, text }, index) => <article key={title}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section-shell section-pad consulting-roadmap">
        <div className="section-heading centered"><div className="eyebrow"><span /> How it works</div><h2>From audit to controlled execution</h2><p>Each phase creates a decision-ready output rather than a generic report.</p></div>
        <div className="consulting-stage-grid">{stages.map(({ n, title, text }) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="consulting-outputs section-pad">
        <div className="section-shell consulting-output-grid">
          <div><div className="eyebrow light"><span /> What you receive</div><h2>A roadmap your leadership team can use.</h2><p>The work ends with practical priorities, accountable owners and an implementation sequence, not theory.</p><div className="consulting-output-icons"><Target /><Route /><Compass /></div></div>
          <div className="consulting-output-list">{outputs.map(output => <div key={output}><ClipboardCheck /><span>{output}</span></div>)}</div>
        </div>
      </section>

      <section className="section-shell section-pad consulting-eu-note">
        <div><div className="eyebrow"><span /> European delivery</div><h2>Prepared for cross-border business engagements.</h2></div>
        <p>For European projects, the commercial scope can include clear acceptance criteria, reporting rhythm, documentation, IP ownership, security expectations, support arrangements and project-specific data-processing terms.</p>
      </section>

      <FinalCta />
    </main>
  );
}
