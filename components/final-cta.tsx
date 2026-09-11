import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCta({ title = "Start with the business problem, not the software.", text = "Tell us what is slowing down your organization. We will help define the right workflow, system and implementation roadmap." }: { title?: string; text?: string }) {
  return (
    <section className="cta-section section-shell">
      <div><div className="eyebrow light"><span /> A controlled first step</div><h2>{title}</h2><p>{text}</p></div>
      <div className="button-row"><Button asChild size="lg" className="button-white"><Link href="/about?project=diagnostic#contact" data-analytics-event="book_diagnostic">Book a Digital Diagnostic <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="button-on-dark"><Link href="/about#contact" data-analytics-event="discuss_project">Discuss Your Project</Link></Button></div>
    </section>
  );
}
