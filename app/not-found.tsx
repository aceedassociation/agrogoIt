import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound(){return <main id="main-content" className="not-found section-shell"><span>404</span><h1>This page could not be found.</h1><p>The link may be outdated or the address may be incorrect.</p><Button asChild className="button-primary"><Link href="/"><ArrowLeft/> Return to Home</Link></Button></main>}
