import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

function toAbsoluteUrl(path: string) {
  return path === "/" ? siteConfig.url : new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({ title, description, path, noIndex = false }: PageSeo): Metadata {
  const url = toAbsoluteUrl(path);
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      locale: "en_GB",
      siteName: siteConfig.name,
      title: socialTitle,
      description,
    },
    twitter: { card: "summary", title: socialTitle, description },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
