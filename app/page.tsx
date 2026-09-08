import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Bot,
  ChartNoAxesCombined,
  Check,
  ClipboardCheck,
  Database,
  FileStack,
  LayoutDashboard,
  Network,
  PanelsTopLeft,
  Route,
  ShieldCheck,
  Smartphone,
  Target,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoScreen } from "@/components/demo-screen";
import { LocaleText } from "@/components/language-provider";

const problems = [
  { icon: FileStack, title: "Manual and repetitive operations", text: "Critical work depends on repeated data entry, paper forms and individual follow-up." },
  { icon: Network, title: "Disconnected information and tools", text: "Excel, email, WhatsApp and isolated software create duplicated records and gaps." },
  { icon: ChartNoAxesCombined, title: "Limited management visibility", text: "Decision-makers lack reliable status, performance and accountability data." },
  { icon: UsersRound, title: "Projects without clear ownership", text: "Requirements, vendors and delivery decisions are managed without one accountable lead." },
];

const solutions = [
  { icon: PanelsTopLeft, title: "Web Platforms and Portals", text: "Customer, student, parent, supplier and service-request portals." },
  { icon: Smartphone, title: "Mobile Applications", text: "Customer, member and field-team applications with notifications." },
  { icon: ClipboardCheck, title: "Internal Management Systems", text: "Tasks, approvals, documents, inventory, projects, fees, HR and reporting." },
  { icon: Database, title: "Dolibarr ERP/CRM", text: "CRM, sales, invoicing, stock, purchasing, projects, migration and support." },
  { icon: LayoutDashboard, title: "Dashboards and Integrations", text: "Management dashboards, APIs, reporting, filters, alerts and exports." },
  { icon: Bot, title: "AI and Automation", text: "Focused automation for documents, reporting, support and repetitive workflows." },
  { icon: Route, title: "IT Consulting and PMO", text: "Requirements, governance, vendor selection, delivery monitoring and recovery." },
];

const process = [
  { n: "01", title: "Discover", text: "Understand the problem, users, tools and constraints." },
  { n: "02", title: "Define", text: "Map processes, prioritize requirements and set acceptance criteria." },
  { n: "03", title: "Build", text: "Deliver in controlled phases with weekly reporting and QA." },
  { n: "04", title: "Deploy", text: "Migrate, test, configure production and formally validate." },
  { n: "05", title: "Improve", text: "Train users, monitor adoption, support and improve." },
];

const differentiators = [
  "Consulting, delivery, project management and support under one accountable team",
  "Morocco-based understanding of Arabic and French business workflows",
  "Systems designed around measurable operational outcomes",
  "Phased delivery that reduces implementation risk",
  "Weekly reporting, quality assurance and formal acceptance",
  "Training and maintenance planned from the beginning",
  "Delivery discipline for Moroccan, African and European projects",
];

const packagePreview = [
  { title:"Digital Diagnostic", for:"Leaders unsure what to build or improve", problem:"Unclear priorities and operational waste", deliverable:"Process map, requirements and roadmap" },
  { title:"Workflow System Pilot", for:"Teams with one urgent process", problem:"A slow or untraceable workflow", deliverable:"Working module, dashboard and training" },
  { title:"Business Website & Portal", for:"Organizations needing credibility and structure", problem:"Unorganized customer interactions", deliverable:"Responsive site or portal with lead handoff" },
  { title:"Dolibarr Implementation", for:"SMEs needing practical ERP/CRM", problem:"Fragmented sales, stock and projects", deliverable:"Configured system, migration and training" },
  { title:"Mobile MVP", for:"Customer, member or field use cases", problem:"Work needs to happen away from desktop", deliverable:"App, backend, notifications and testing" },
  { title:"Support Retainer", for:"Clients after launch", problem:"Continuity, updates and user support", deliverable:"Monitoring, maintenance and improvements" },
];

const consultingHighlights = [
  { icon: ClipboardCheck, title: "Digital & IT diagnostic", text: "See the real operating model, systems, workflows and friction points before choosing technology." },
  { icon: ShieldCheck, title: "COBIT-aligned governance review", text: "Assess decision rights, controls, risk ownership and capability maturity in the areas that matter." },
  { icon: Target, title: "Gap-to-roadmap advisory", text: "Turn the gap between today’s operation and the target model into prioritised initiatives and accountable actions." },
];

const demoPreview = [
  { type:"workflow" as const, title:"Internal workflow and approvals", purpose:"Traceable requests and multi-level validation." },
  { type:"portal" as const, title:"Customer and user portal", purpose:"Secure self-service, documents and status." },
  { type:"erp" as const, title:"Dolibarr ERP/CRM environment", purpose:"Essential SME management functions." },
  { type:"mobile" as const, title:"Mobile field-team application", purpose:"Tasks, forms, photos and reporting." },
  { type:"dashboard" as const, title:"Management dashboard", purpose:"KPIs, filters, alerts and exports." },
];

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Consulting and digital transformation visual">
      <div className="hero-photo" role="img" aria-label="Business team planning a digital transformation" />
      <div className="hero-visual-label">
        <span className="status-dot" /> DIGITAL TRANSFORMATION
        <span>Strategy · Governance · Delivery</span>
      </div>
      <div className="hero-insight-card">
        <div className="hero-insight-top"><span>Transformation focus</span><strong>Q1–Q4</strong></div>
        <div className="hero-insight-title"><ChartNoAxesCombined size={16} /> Operating gap view</div>
        <div className="hero-gap-bars">
          <div><span>Process</span><i><b /></i></div><div><span>Data</span><i><b /></i></div><div><span>Governance</span><i><b /></i></div>
        </div>
      </div>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" /><div className="hero-orbit hero-orbit-two" aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span /> <LocaleText id="hero.eyebrow">Digital Transformation & Software Solutions</LocaleText></div>
          <h1><LocaleText id="hero.title.1">Turn fragmented work into</LocaleText> <em><LocaleText id="hero.title.2">useful digital systems.</LocaleText></em></h1>
          <p className="hero-lead"><LocaleText id="hero.lead">Agrogo combines consulting, project management and software delivery to build web, mobile and management systems that work in real operations.</LocaleText></p>
          <div className="button-row">
            <Button asChild size="lg" className="button-primary"><Link href="/contact?project=diagnostic" data-analytics-event="book_diagnostic"><LocaleText id="cta.diagnostic">Book a Digital Diagnostic</LocaleText> <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline" className="button-secondary"><Link href="/solutions"><LocaleText id="cta.exploreSolutions">Explore Our Solutions</LocaleText></Link></Button>
          </div>
          <div className="capability-line" aria-label="Capabilities"><LocaleText id="hero.capabilities">Consulting · Project Management · Software Delivery · Training · Support</LocaleText></div>
        </div>
        <HeroVisual />
      </section>

      <section className="problem-band section-pad">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div><div className="eyebrow dark"><span /> The operational reality</div><h2>Technology should solve operational problems—not create new ones.</h2></div>
            <p>Disconnected spreadsheets, paper, email, WhatsApp and isolated software create duplicated work, weak traceability, delays and poor visibility.</p>
          </div>
          <div className="problem-grid">
            {problems.map(({ icon: Icon, title, text }, index) => <article className="problem-card" key={title}><div className="card-index">0{index + 1}</div><Icon /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="consulting-home-section section-pad" id="consulting">
        <div className="section-shell consulting-home-grid">
          <div className="consulting-home-copy"><div className="eyebrow light"><span /> <LocaleText id="home.consulting.label">Consulting</LocaleText></div><h2><LocaleText id="home.consulting.title">Start with the operating gap—not the tool.</LocaleText></h2><p><LocaleText id="home.consulting.text">We audit how the business works today, assess its governance and digital capability, then design the most credible path toward the operating model it wants to reach.</LocaleText></p><div className="consulting-home-metric"><span>0–5</span><div><strong>Capability maturity view</strong><small>Process · Data · Systems · Governance</small></div></div><Button asChild size="lg" className="button-white"><Link href="/consulting"><LocaleText id="home.consulting.action">Explore IT Consulting</LocaleText> <ArrowRight /></Link></Button></div>
          <div className="consulting-highlight-list">{consultingHighlights.map(({ icon: Icon, title, text }, index) => <article key={title}><span>0{index + 1}</span><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="section-shell section-pad" id="solutions">
        <div className="section-heading"><div className="eyebrow"><span /> <LocaleText id="home.solutions.label">Solutions</LocaleText></div><h2><LocaleText id="home.solutions.title">What We Build</LocaleText></h2><p><LocaleText id="home.solutions.text">Practical systems shaped around the workflow, users and decisions that matter to your organization.</LocaleText></p></div>
        <div className="solutions-grid">
          {solutions.map(({ icon: Icon, title, text }) => <article className="solution-card" key={title}><div className="icon-box"><Icon /></div><h3>{title}</h3><p>{text}</p><Link href="/solutions">Learn More <ArrowRight /></Link></article>)}
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="section-shell">
          <div className="section-heading centered"><div className="eyebrow"><span /> Delivery lifecycle</div><h2>From the real problem to a working system</h2><p>One controlled path from diagnosis and requirements to adoption and continuous improvement.</p></div>
          <div className="process-grid">
            {process.map((item) => <article className="process-step" key={item.n}><span className="process-number">{item.n}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
          <div className="center-action"><Button asChild variant="outline" size="lg" className="button-secondary"><Link href="/methodology">Explore Our Methodology <ArrowRight /></Link></Button></div>
        </div>
      </section>

      <section className="section-shell section-pad package-preview-section">
        <div className="section-heading split-heading"><div><div className="eyebrow"><span /> Service packages</div><h2>Start with the right engagement</h2></div><p>Choose a controlled starting point based on the business problem and delivery risk—not a generic list of development hours.</p></div>
        <div className="package-preview-grid">{packagePreview.map((item,i)=><article key={item.title}><span className="package-kicker">0{i+1}</span><h3>{item.title}</h3><dl><div><dt>Who it is for</dt><dd>{item.for}</dd></div><div><dt>Problem</dt><dd>{item.problem}</dd></div><div><dt>Main output</dt><dd>{item.deliverable}</dd></div></dl><Link href={`/contact?project=${encodeURIComponent(item.title)}`}>Request This Package <ArrowRight/></Link></article>)}</div>
        <div className="center-action"><Button asChild variant="outline" size="lg" className="button-secondary"><Link href="/service-packages">Compare All Packages <ArrowRight/></Link></Button></div>
      </section>

      <section className="demo-preview-section section-pad">
        <div className="section-shell"><div className="section-heading split-heading"><div><div className="eyebrow"><span /> Solution demonstrators</div><h2>See how the solutions work</h2></div><p>Illustrative environments for understanding the workflow and interface. These are clearly presented as demonstrators—not completed client projects.</p></div><div className="demo-preview-scroll">{demoPreview.map((item,i)=><article key={item.title}><div className="demo-preview-frame"><DemoScreen type={item.type}/></div><span className="demo-badge">DEMONSTRATOR · 0{i+1}</span><h3>{item.title}</h3><p>{item.purpose}</p><Link href={`/contact?project=${encodeURIComponent(item.title)}`}>Request a Demonstration <ArrowRight/></Link></article>)}</div><div className="center-action"><Button asChild variant="outline" size="lg" className="button-secondary"><Link href="/demonstrators">View All Demonstrators <ArrowRight/></Link></Button></div></div>
      </section>

      <section className="section-shell section-pad why-grid">
        <div className="why-panel">
          <div className="eyebrow light"><span /> Why Agrogo</div>
          <h2>One accountable partner from strategy to support</h2>
          <p>Responsibility stays clear across decisions, delivery, adoption and continuity.</p>
          <div className="why-art"><Blocks /><span>Business</span><ArrowRight /><span>System</span><ArrowRight /><span>Outcome</span></div>
        </div>
        <div className="check-list">
          {differentiators.map((item) => <div key={item}><span><Check /></span><p>{item}</p></div>)}
        </div>
      </section>

      <section className="cta-section section-shell">
        <div><div className="eyebrow light"><span /> Start with clarity</div><h2>Start with the business problem—not the software.</h2><p>Tell us what is slowing down your organization. Agrogo will help define the right workflow, system and implementation roadmap.</p></div>
        <div className="button-row">
          <Button asChild size="lg" className="button-white"><Link href="/contact?project=diagnostic">Book a Digital Diagnostic <ArrowRight /></Link></Button>
          <Button asChild size="lg" variant="outline" className="button-on-dark"><Link href="/contact">Discuss Your Project</Link></Button>
        </div>
      </section>
    </main>
  );
}
