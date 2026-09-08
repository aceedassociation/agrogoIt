import { siteConfig } from "@/lib/site-config";

type InquiryPayload = Record<string, unknown>;

const required = ["fullName", "company", "email", "country", "projectType", "challenge"] as const;
const limits: Record<string, number> = { fullName:120, company:160, jobTitle:120, email:180, phone:40, country:100, projectType:120, challenge:3000, existingTools:1500, timeline:80, budget:80, additionalInfo:3000, website:200 };

function value(payload: InquiryPayload, key: string) {
  const raw = typeof payload[key] === "string" ? payload[key] as string : "";
  return raw.trim().slice(0, limits[key] ?? 1000);
}

export async function POST(request: Request) {
  try {
    const payload = await request.json() as InquiryPayload;
    if (value(payload, "website")) return Response.json({ received: true }, { status: 201 });
    for (const field of required) if (!value(payload, field)) return Response.json({ error: "Please complete all required fields." }, { status: 400 });
    const email = value(payload, "email");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ error: "Please enter a valid business email." }, { status: 400 });
    if (payload.privacyConsent !== "true" && payload.privacyConsent !== true) return Response.json({ error: "Privacy consent is required." }, { status: 400 });
    if (payload.termsAcceptance !== "true" && payload.termsAcceptance !== true) return Response.json({ error: "Terms acceptance is required." }, { status: 400 });
    const forwarded = await fetch(siteConfig.formEndpoint, {
      method: "POST",
      headers: { "accept": "application/json", "content-type": "application/json" },
      body: JSON.stringify({
        fullName: value(payload,"fullName"), company: value(payload,"company"), jobTitle: value(payload,"jobTitle"),
        email, phone: value(payload,"phone"), country: value(payload,"country"), projectType: value(payload,"projectType"),
        challenge: value(payload,"challenge"), existingTools: value(payload,"existingTools"), timeline: value(payload,"timeline"),
        budget: value(payload,"budget") || "To be discussed", additionalInfo: value(payload,"additionalInfo"),
        privacyConsent: "Yes", termsAcceptance: "Yes", _subject: `New Agrogo IT Services inquiry — ${value(payload,"projectType")}`,
      }),
    });
    if (!forwarded.ok) return Response.json({ error: "We could not email your request right now. Please try again." }, { status: 502 });
    return Response.json({ received: true }, { status: 201 });
  } catch {
    return Response.json({ error: "We could not send your request right now. Please try again." }, { status: 500 });
  }
}
