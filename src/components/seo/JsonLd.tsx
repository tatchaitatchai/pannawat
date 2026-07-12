import { SITE_URL, company } from "@/data/site";

/** ฝัง JSON-LD structured data ลงในหน้า */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Schema.org LocalBusiness + Organization สำหรับทั้งเว็บ */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#organization`,
    name: company.name,
    alternateName: [company.nameEn, company.shortName],
    url: SITE_URL,
    logo: `${SITE_URL}/images/contact/business-card.webp`,
    image: `${SITE_URL}/images/home/slide-01-bored-pile-rig.webp`,
    description:
      "ผู้เชี่ยวชาญงานเสาเข็มเจาะ เสาเข็มเจาะแบบแห้ง แบบเปียก ไมโครไพล์ ทดสอบเสาเข็ม รับงานทั่วประเทศ ราคายุติธรรม",
    taxID: company.taxId,
    telephone: "+66-81-353-5465",
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.address.street} ${company.address.subDistrict}`,
      addressLocality: company.address.district,
      addressRegion: company.address.province,
      postalCode: company.address.postalCode,
      addressCountry: "TH",
    },
    areaServed: { "@type": "Country", name: "Thailand" },
    sameAs: [company.facebook, company.line.url],
  };
}

/** Schema.org Service สำหรับหน้าบริการแต่ละหน้า */
export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Thailand" },
  };
}

/** Schema.org BreadcrumbList */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
