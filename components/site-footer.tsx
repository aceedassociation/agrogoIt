"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Brand } from "@/components/brand";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/components/language-provider";

const solutions = ["Web Platforms", "Mobile Applications", "Management Systems", "Dolibarr ERP/CRM", "Dashboards & APIs", "AI & Automation"];

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-grid section-shell">
        <div className="footer-brand"><Brand /><p>{t("footer.brand", "Business clarity, controlled transformation and practical digital delivery.")}</p>{siteConfig.location ? <span><MapPin /> {siteConfig.location}</span> : null}</div>
        <div><h2>{t("footer.company", "Company")}</h2><Link href="/consulting">{t("nav.consulting", "Consulting")}</Link><Link href="/solutions">{t("nav.solutions", "Solutions")}</Link><Link href="/service-packages">{t("nav.packages", "Service Packages")}</Link><Link href="/methodology">{t("nav.methodology", "Methodology")}</Link><Link href="/about">{t("nav.about", "About")}</Link></div>
        <div><h2>{t("footer.solutions", "Solutions")}</h2>{solutions.map(item => <Link href="/solutions" key={item}>{item}</Link>)}</div>
        <div className="footer-contact"><h2>{t("footer.start", "Start a conversation")}</h2><p>{t("footer.description", "Define the problem, operating gap and right next step.")}</p>{siteConfig.email ? <a href={`mailto:${siteConfig.email}`}><Mail />{siteConfig.email}</a> : null}{siteConfig.offices.map(office => <a href={office.phoneHref} key={office.phoneHref}><Phone />{office.flag} {office.phone}</a>)}<Link href="/contact" className="footer-project-link">{t("footer.project", "Discuss Your Project")} <ArrowUpRight /></Link></div>
      </div>
      <div className="footer-offices section-shell" aria-label="Agrogo locations">
        {siteConfig.offices.map(office => <div key={office.label}><span>{office.flag}</span><div><strong>{office.label}</strong><p>{office.address}</p><a href={office.phoneHref}>{office.phone}</a></div></div>)}
      </div>
      <div className="footer-bottom section-shell"><p>© {new Date().getFullYear()} Agrogo IT Services. {t("footer.rights", "All rights reserved.")}</p><div><Link href="/privacy">{t("footer.privacy", "Privacy Policy")}</Link><Link href="/terms">{t("footer.terms", "Terms of Use")}</Link><Link href="/privacy#cookies">{t("footer.cookies", "Cookie settings")}</Link></div></div>
    </footer>
  );
}
