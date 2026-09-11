import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Start a project conversation with Agrogo through the About Us contact form.",
  path: "/contact",
  noIndex: true,
});

export default function ContactPage() {
  return <main id="main-content"><section className="page-hero section-shell"><div><div className="eyebrow"><span /> Contact</div><h1>Contact is now part of <em>About Us.</em></h1><p>Open About Us to learn about Agrogo and send your project brief in the same place.</p><Button asChild size="lg" className="button-primary"><Link href="/about#contact">Open About Us <ArrowRight /></Link></Button></div></section></main>;
}
