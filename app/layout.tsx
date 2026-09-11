import type { Metadata } from "next";
import { CookieConsent } from "@/components/cookie-consent";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollExperience } from "@/components/scroll-experience";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LanguageProvider } from "@/components/language-provider";
import { defaultLocale, localeConfig } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "IT Consulting & Digital Transformation Partner | Agrogo", template: "%s | Agrogo IT Services" },
  description: "Nearshore IT consulting, PMO, ERP/CRM implementation and custom software delivery for European organisations that need clearer, more controlled operations.",
  applicationName: siteConfig.name,
  category: "IT consulting and software delivery",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    title: "Agrogo IT Services | IT Consulting & Digital Transformation",
    description: "Nearshore IT consulting, transformation roadmaps and software delivery for real operations.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary",
    title: "Agrogo IT Services | IT Consulting & Digital Transformation",
    description: "Nearshore IT consulting, transformation roadmaps and software delivery for real operations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/agrogo-it-services-logo-transparent.png`,
      description: "Nearshore IT consulting and software delivery partner for organisations that need clearer, more controlled digital operations.",
      email: siteConfig.email,
      telephone: siteConfig.offices[0].phone.replace(/\s/g, ""),
      address: { "@type": "PostalAddress", streetAddress: "101 Najma", addressLocality: "Casablanca", addressCountry: "MA" },
      location: [
        { "@type": "Place", name: "Agrogo Morocco office", address: { "@type": "PostalAddress", streetAddress: "101 Najma", addressLocality: "Casablanca", addressCountry: "MA" } },
        { "@type": "Place", name: "Agrogo UK branch", address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" } },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: siteConfig.whatsapp.replace(/\s/g, ""),
        email: siteConfig.email,
        availableLanguage: ["English", "French", "Arabic"],
      },
      areaServed: ["Morocco", "Europe"],
      knowsLanguage: ["en", "fr", "ar"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT consulting and software delivery services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT consulting and digital transformation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT project management and PMO" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP and CRM implementation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom web and mobile software delivery" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dashboards, integrations and automation" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "en",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={defaultLocale} dir={localeConfig[defaultLocale].dir} data-locale={defaultLocale}>
      <body><LanguageProvider><ScrollExperience /><a className="skip-link" href="#main-content">Skip to main content</a><SiteHeader />{children}<SiteFooter /><WhatsAppButton /><CookieConsent /></LanguageProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /></body>
    </html>
  );
}
