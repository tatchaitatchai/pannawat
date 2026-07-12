import type { Metadata } from "next";
import { SITE_URL, company, defaultKeywords } from "@/data/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

/** สร้าง Metadata มาตรฐานให้ทุกหน้า: canonical, Open Graph, Twitter Card */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/images/home/slide-01-bored-pile-rig.webp",
}: PageSeo): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords: [...keywords, ...defaultKeywords],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: company.shortName,
      locale: "th_TH",
      type: "website",
      images: [{ url: image, width: 1200, height: 900, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
