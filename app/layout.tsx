import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { defaultLocale, localeConfig } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Agrogo IT Services | Digital Transformation Morocco", template: "%s | Agrogo IT Services" },
  description: "Agrogo helps organizations replace fragmented, manual work with useful web, mobile, ERP/CRM and management systems.",
  keywords: ["IT consulting company in Morocco", "digital transformation company Morocco", "Dolibarr implementation Morocco", "business process digitalization", "IT project management Morocco"],
  openGraph: { type: "website", locale: "en_US", title: "Agrogo IT Services", description: "Digital transformation and software solutions built for real operations.", siteName: "Agrogo IT Services" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", name: "Agrogo IT Services",
  description: "A Morocco-based IT and digital transformation company helping organizations replace manual and fragmented work with useful digital systems.",
  address: { "@type": "PostalAddress", addressCountry: "MA" }, areaServed: ["Morocco", "Africa", "Europe"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={defaultLocale} dir={localeConfig[defaultLocale].dir} data-locale={defaultLocale}>
      <body><a className="skip-link" href="#main-content">Skip to main content</a><SiteHeader />{children}<SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /></body>
    </html>
  );
}
