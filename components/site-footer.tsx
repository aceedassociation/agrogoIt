import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Brand } from "@/components/brand";
import { siteConfig } from "@/lib/site-config";

const solutions = ["Web Platforms", "Mobile Applications", "Management Systems", "Dolibarr ERP/CRM", "Dashboards & APIs", "AI & Automation"];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid section-shell">
        <div className="footer-brand"><Brand /><p>Business clarity, controlled transformation and practical digital delivery.</p>{siteConfig.location ? <span><MapPin /> {siteConfig.location}</span> : null}</div>
        <div><h2>Company</h2><Link href="/consulting">Consulting</Link><Link href="/solutions">Solutions</Link><Link href="/service-packages">Service Packages</Link><Link href="/methodology">Delivery Studio</Link><Link href="/about">About Us</Link></div>
        <div><h2>Solutions</h2>{solutions.map(item => <Link href="/solutions" key={item}>{item}</Link>)}</div>
        <div className="footer-contact"><h2>Start a conversation</h2><p>Define the problem, operating gap and right next step.</p>{siteConfig.email ? <a href={`mailto:${siteConfig.email}`}><Mail />{siteConfig.email}</a> : null}<div className="footer-office-contact-list">{siteConfig.offices.map(office => <div key={office.label}><strong>{office.flag} {office.label}</strong><span><MapPin />{office.address}</span><a href={office.phoneHref}><Phone />{office.phone}</a></div>)}</div><Link href="/about#contact" className="footer-project-link">Discuss Your Project <ArrowUpRight /></Link></div>
      </div>
      <div className="footer-bottom section-shell"><p>© {new Date().getFullYear()} Agrogo IT Services. All rights reserved.</p><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/privacy#cookies">Cookie settings</Link></div></div>
    </footer>
  );
}
