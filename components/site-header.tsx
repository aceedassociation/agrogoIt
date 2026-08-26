"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  ["Home", "/"], ["Solutions", "/solutions"], ["Service Packages", "/service-packages"], ["Methodology", "/methodology"],
  ["Demonstrators", "/demonstrators"], ["About", "/about"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
        <Button asChild className="header-cta"><Link href="/contact?project=diagnostic" data-analytics-event="book_diagnostic">Book a Digital Diagnostic</Link></Button>
        <Sheet>
          <SheetTrigger asChild><Button variant="outline" size="icon" className="mobile-menu-button" aria-label="Open navigation"><Menu /></Button></SheetTrigger>
          <SheetContent className="mobile-sheet">
            <SheetHeader><SheetTitle><Brand /></SheetTitle><SheetDescription>Digital Transformation & Software Solutions</SheetDescription></SheetHeader>
            <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label, href]) => <SheetClose asChild key={href}><Link href={href}>{label}</Link></SheetClose>)}</nav>
            <SheetClose asChild><Button asChild size="lg" className="mobile-sheet-cta"><Link href="/contact?project=diagnostic" data-analytics-event="book_diagnostic">Book a Digital Diagnostic</Link></Button></SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
