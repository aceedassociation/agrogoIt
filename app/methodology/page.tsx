import Link from "next/link";
import { ArrowRight, Check, Gauge, GraduationCap, Search, Settings2 } from "lucide-react";
import { DemoScreen } from "@/components/demo-screen";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "IT Project Delivery & Software Implementation Method",
  description: "Explore Agrogo's controlled digital delivery method: diagnose operations, define the scope, implement software and support adoption with clear accountability.",
  path: "/methodology",
});

const phases = [
  { icon: Search, title: "Diagnose the operation", text: "Understand the users, process, tools, constraints and operational gap before proposing technology.", outputs: ["Current-state process", "Priority problem", "Decision context"] },
  { icon: Settings2, title: "Design the right system", text: "Focus on the highest-value workflow, define what success looks like and set clear acceptance criteria.", outputs: ["Requirements", "Delivery scope", "Acceptance criteria"] },
  { icon: Gauge, title: "Deliver with control", text: "Build in visible phases with regular review, QA and ownership of decisions, risks and next steps.", outputs: ["Working releases", "Progress review", "Structured QA"] },
  { icon: GraduationCap, title: "Adopt and improve", text: "Prepare deployment, train users, support the team and measure what improves after launch.", outputs: ["User enablement", "Handover", "Improvement plan"] },
];

const controls = [
  "One accountable team from diagnosis to support",
  "Weekly visibility on delivery, decisions and risks",
  "Formal validation before each important handover",
  "Start with one workflow, then scale after proof",
];

const demos = [
  { type: "workflow" as const, title: "Internal workflow", text: "Traceable requests, approvals and accountability." },
  { type: "portal" as const, title: "Customer portal", text: "Secure self-service, documents and status visibility." },
  { type: "erp" as const, title: "ERP / CRM operations", text: "Customers, quotations, invoices, stock and projects." },
  { type: "dashboard" as const, title: "Management dashboard", text: "KPIs, filters, alerts and exceptions in one view." },
];

export default function MethodologyPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Delivery Studio"
        title={<>From operational friction to a <em>working system.</em></>}
        intro="A focused view of how Agrogo defines, delivers and proves the systems that matter to your operation."
        aside={<><span className="aside-label">Delivery model</span><strong>Start with one workflow. Scale only after proof.</strong><p>Every step has a clear output, a visible decision and a reason to move forward.</p></>}
      />

      <section className="section-shell section-pad">
        <div className="section-heading split-heading"><div><div className="eyebrow"><span /> How we deliver</div><h2>Four clear stages. No unnecessary complexity.</h2></div><p>We keep the delivery path practical: understand the problem, define the right scope, deliver with control and make sure the system is adopted.</p></div>
        <div className="method-timeline">{phases.map(({ icon: Icon, title, text, outputs }) => <article key={title}><div className="method-marker"><Icon /></div><div className="method-phase">DELIVERY STAGE</div><h2>{title}</h2><p>{text}</p><div className="output-chips">{outputs.map((output) => <span key={output}>{output}</span>)}</div></article>)}</div>
      </section>

      <section className="principles-section section-pad">
        <div className="section-shell principles-grid"><div className="section-heading"><div className="eyebrow dark"><span /> What stays controlled</div><h2>Useful disciplines that reduce project risk.</h2></div><div className="principles-list">{controls.map((control) => <div key={control}><span><Check /></span><p>{control}</p></div>)}</div></div>
      </section>

      <section className="demo-preview-section section-pad" id="demonstrators">
        <div className="section-shell">
          <div className="section-heading split-heading"><div><div className="eyebrow"><span /> Solution demonstrators</div><h2>See the logic before you commit.</h2></div><p>These are illustrative environments, not client projects. They make the workflow, interface and management value concrete before scope is finalised.</p></div>
          <div className="demo-preview-scroll delivery-studio-demos">{demos.map((demo) => <article key={demo.title}><div className="demo-preview-frame"><DemoScreen type={demo.type} /></div><span className="demo-badge">SOLUTION DEMONSTRATOR</span><h3>{demo.title}</h3><p>{demo.text}</p><Link href={`/about?project=${encodeURIComponent(demo.title)}#contact`}>Request this demonstration <ArrowRight /></Link></article>)}</div>
          <div className="center-action"><Button asChild size="lg" className="button-primary"><Link href="/about?project=diagnostic#contact">Book a Digital Diagnostic <ArrowRight /></Link></Button></div>
        </div>
      </section>
    </main>
  );
}
