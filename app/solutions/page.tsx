import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, ChartNoAxesCombined, ClipboardCheck, Database, PanelsTopLeft, Route, Smartphone } from "lucide-react";
import { FinalCta } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Digital Solutions", description: "Web platforms, mobile applications, internal systems, Dolibarr ERP/CRM, dashboards, automation and IT consulting in Morocco." };

const items = [
  { icon: PanelsTopLeft, title: "Web Platforms and Portals", summary: "Structured digital access for customers, members, suppliers and service users.", bullets: ["Customer and user portals", "Student and parent portals", "Supplier and service-request platforms", "Secure document and status access"] },
  { icon: Smartphone, title: "Mobile Applications", summary: "Focused mobile experiences for customers, members and teams outside the office.", bullets: ["Customer and member applications", "Field-team workflows", "Notifications and task updates", "MVP design, backend and deployment"] },
  { icon: ClipboardCheck, title: "Internal Management Systems", summary: "Traceable workflows that replace spreadsheets, paper and individual follow-up.", bullets: ["Tasks, requests and approvals", "Documents, inventory and orders", "Projects, fees and HR workflows", "Roles, dashboards and reports"] },
  { icon: Database, title: "Dolibarr ERP/CRM", summary: "Practical ERP and CRM implementation without building everything from zero.", bullets: ["CRM, quotations and invoicing", "Products, stock and purchasing", "Projects and sales pipeline", "Migration, custom modules, training and support"] },
  { icon: ChartNoAxesCombined, title: "Dashboards and Integrations", summary: "Connected data and clear management visibility across business tools.", bullets: ["Operational and management dashboards", "API and CRM/ERP connections", "Data cleaning and reporting", "Filters, alerts and exports"] },
  { icon: Bot, title: "AI and Automation", summary: "Narrow, practical automation attached to a real business workflow.", bullets: ["Document processing", "Reporting assistance", "Customer-support workflows", "Repetitive task automation"] },
  { icon: Route, title: "IT Consulting and PMO", summary: "Independent structure and ownership for complex, delayed or fragmented projects.", bullets: ["Requirements and specifications", "Vendor selection and governance", "Delivery monitoring and reporting", "Project recovery and formal acceptance"] },
];

export default function SolutionsPage() {
  return (
    <main id="main-content"><PageHero eyebrow="What we build" title={<>Digital systems designed around <em>real operations.</em></>} intro="Agrogo selects and delivers the right combination of platform, process and project governance for each operational problem." aside={<><span className="aside-label">Solution principle</span><strong>Useful before impressive.</strong><p>Every feature should have a user, a decision or a measurable operational purpose.</p></>} />
      <section className="section-shell section-pad"><div className="solution-detail-list">{items.map(({ icon: Icon, title, summary, bullets }, i) => <article className="solution-detail" key={title}><div className="solution-detail-number">0{i + 1}</div><div className="icon-box"><Icon /></div><div><h2>{title}</h2><p>{summary}</p></div><ul>{bullets.map(x => <li key={x}>{x}</li>)}</ul><Button asChild variant="outline"><Link href={`/contact?project=${encodeURIComponent(title)}`}>Explore the Solution <ArrowRight /></Link></Button></article>)}</div></section>
      <FinalCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Digital Transformation and Software Delivery","provider":{"@type":"Organization","name":"Agrogo IT Services"},"areaServed":["Morocco","Africa","Europe"]})}} />
    </main>
  );
}
