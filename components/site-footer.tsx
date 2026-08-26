import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Brand } from "@/components/brand";
import { siteConfig } from "@/lib/site-config";

const solutions = ["Web Platforms", "Mobile Applications", "Management Systems", "Dolibarr ERP/CRM", "Dashboards & APIs", "AI & Automation"];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid section-shell">
        <div className="footer-brand"><Brand inverse /><p>Practical digital systems for real business operations.</p>{siteConfig.location ? <span><MapPin /> {siteConfig.location}</span> : null}</div>
        <div><h2>Company</h2><Link href="/solutions">Solutions</Link><Link href="/service-packages">Service Packages</Link><Link href="/methodology">Methodology</Link><Link href="/demonstrators">Demonstrators</Link><Link href="/about">About</Link></div>
        <div><h2>Solutions</h2>{solutions.map(item => <Link href="/solutions" key={item}>{item}</Link>)}</div>
        <div className="footer-contact"><h2>Start a conversation</h2><p>Define the problem, workflow and right next step.</p>{siteConfig.email ? <a href={`mailto:${siteConfig.email}`}><Mail />{siteConfig.email}</a> : null}{siteConfig.phones.map(phone => <a href={`tel:+212${phone.slice(1)}`} key={phone}><Phone />{phone}</a>)}<Link href="/contact" className="footer-project-link">Discuss Your Project <ArrowUpRight /></Link></div>
      </div>
      <div className="footer-bottom section-shell"><p>© {new Date().getFullYear()} Agrogo IT Services. All rights reserved.</p><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/privacy#cookies">Cookie settings</Link></div></div>
    </footer>
  );
}
