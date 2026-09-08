import type { Metadata } from "next";
import { CookieConsent } from "@/components/cookie-consent";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LanguageProvider } from "@/components/language-provider";
import { defaultLocale, localeConfig } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Agrogo IT Services | Consulting & Digital Transformation", template: "%s | Agrogo IT Services" },
  description: "Agrogo helps organizations close the gap between today’s operations and their target model through digital consulting, PMO and software delivery.",
  keywords: ["IT consulting Morocco", "digital transformation consulting", "COBIT assessment", "ERP CRM implementation", "business process digitalization", "IT project management", "nearshore software delivery"],
  openGraph: { type: "website", locale: "en_US", title: "Agrogo IT Services", description: "Digital consulting, transformation roadmaps and software delivery for real operations.", siteName: "Agrogo IT Services" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", name: "Agrogo IT Services",
  description: "An IT consulting and digital transformation partner helping organizations move from fragmented operations to controlled digital systems.",
  address: { "@type": "PostalAddress", streetAddress: "101 Najma", addressLocality: "Casablanca", addressCountry: "MA" }, areaServed: ["Morocco", "United Kingdom", "Europe"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={defaultLocale} dir={localeConfig[defaultLocale].dir} data-locale={defaultLocale}>
      <body><LanguageProvider><a className="skip-link" href="#main-content">Skip to main content</a><SiteHeader />{children}<SiteFooter /><WhatsAppButton /><CookieConsent /></LanguageProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /></body>
    </html>
  );
}
