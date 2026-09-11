"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Brand } from "@/components/brand";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  ["Home", "/"], ["Consulting", "/consulting"], ["Solutions", "/solutions"], ["Service Packages", "/service-packages"], ["Delivery Studio", "/methodology"], ["About Us", "/about"],
] as const;

export function SiteHeader() {
  const { t } = useLanguage();
  const labels: Record<string, string> = { Home: t("nav.home", "Home"), Consulting: t("nav.consulting", "Consulting"), Solutions: t("nav.solutions", "Solutions"), "Service Packages": t("nav.packages", "Service Packages"), "Delivery Studio": t("nav.deliveryStudio", "Delivery Studio"), "About Us": t("nav.aboutUs", "About Us") };
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(([label, href]) => <Link key={href} href={href}>{labels[label]}</Link>)}</nav>
        <LanguageSwitcher />
        <Button asChild className="header-cta"><Link href="/about?project=diagnostic#contact" data-analytics-event="book_diagnostic">{t("cta.diagnostic", "Book a Digital Diagnostic")}</Link></Button>
        <Sheet>
          <SheetTrigger asChild><Button variant="outline" size="icon" className="mobile-menu-button" aria-label="Open navigation"><Menu /></Button></SheetTrigger>
          <SheetContent className="mobile-sheet">
            <SheetHeader><SheetTitle><Brand /></SheetTitle><SheetDescription>Digital Transformation & Software Solutions</SheetDescription></SheetHeader>
            <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label, href]) => <SheetClose asChild key={href}><Link href={href}>{labels[label]}</Link></SheetClose>)}</nav>
            <div className="mobile-language"><LanguageSwitcher /></div>
            <SheetClose asChild><Button asChild size="lg" className="mobile-sheet-cta"><Link href="/about?project=diagnostic#contact" data-analytics-event="book_diagnostic">{t("cta.diagnostic", "Book a Digital Diagnostic")}</Link></Button></SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
