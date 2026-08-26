import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DemoScreen } from "@/components/demo-screen";
import { FinalCta } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title:"Solution Demonstrators", description:"Explore Agrogo solution demonstrators for workflows, portals, Dolibarr ERP/CRM, mobile field work and management dashboards." };
const demos=[
  {type:"workflow" as const,title:"Internal Workflow and Approvals",purpose:"Transform an uncontrolled manual process into a traceable digital workflow.",functions:["User roles","Request submission","Multi-level validation","Comments and attachments","Audit trail","Status tracking","Management dashboard"]},
  {type:"portal" as const,title:"Customer / User Portal",purpose:"Improve self-service and the customer experience through one secure access point.",functions:["Secure login","Request submission","Document exchange","Notifications","Status tracking","Account information"]},
  {type:"erp" as const,title:"Dolibarr ERP/CRM Environment",purpose:"Demonstrate fast deployment of essential SME management functions.",functions:["Customers","Products","Quotations","Invoices","Stock","Projects","Sales pipeline"]},
  {type:"mobile" as const,title:"Mobile Field Application",purpose:"Enable data collection and coordination outside the office.",functions:["Assigned tasks","Forms","Photos","Optional GPS","Reports","Notifications","Offline-ready concept"]},
  {type:"dashboard" as const,title:"Management Dashboard",purpose:"Give directors clear visibility over operations and exceptions.",functions:["KPIs","Filters","Charts","Alerts","Status summaries","Data exports"]},
];
export default function DemonstratorsPage(){return <main id="main-content"><PageHero eyebrow="Solution demonstrators" title={<>See the workflow before <em>you commit.</em></>} intro="These controlled environments help decision-makers understand a solution's logic, user experience and management value before defining project scope." aside={<><span className="demo-badge">DEMONSTRATOR — NOT A CLIENT PROJECT</span><strong>Realistic interfaces, honest context.</strong><p>Every screen on this page is an illustrative solution demonstrator and is not presented as completed client work.</p></>}/><section className="section-shell section-pad"><div className="demo-list">{demos.map((demo,i)=><article className="demo-detail" key={demo.title}><div className="demo-copy"><span className="demo-badge">SOLUTION DEMONSTRATOR · 0{i+1}</span><h2>{demo.title}</h2><p>{demo.purpose}</p><h3>Main functions</h3><div className="function-chips">{demo.functions.map(x=><span key={x}>{x}</span>)}</div><Button asChild className="button-primary"><Link href={`/contact?project=${encodeURIComponent(demo.title)}`}>Request a Demonstration <ArrowRight/></Link></Button></div><div className="demo-frame"><div className="frame-bar"><i/><i/><i/><span>demo.agrogo.system</span></div><DemoScreen type={demo.type}/></div></article>)}</div></section><FinalCta title="Want to see a workflow relevant to your organization?" text="Tell us which process is difficult to control. We will prepare the right demonstration context for your discussion."/></main>}
