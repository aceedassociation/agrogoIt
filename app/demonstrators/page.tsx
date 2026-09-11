import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Solution Demonstrators",
  description: "Solution demonstrators are now included in Agrogo Delivery Studio.",
  path: "/demonstrators",
  noIndex: true,
});

export default function DemonstratorsPage() {
  return <main id="main-content"><section className="page-hero section-shell"><div><div className="eyebrow"><span /> Solution demonstrators</div><h1>Demonstrators now live in <em>Delivery Studio.</em></h1><p>Explore the delivery approach and representative solution environments in one focused page.</p><Button asChild size="lg" className="button-primary"><Link href="/methodology#demonstrators">Open Delivery Studio <ArrowRight /></Link></Button></div></section></main>;
}
