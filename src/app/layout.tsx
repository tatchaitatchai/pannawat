import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import { JsonLd, organizationSchema } from "@/components/seo/JsonLd";
import { SITE_URL, company, defaultKeywords } from "@/data/site";
import "./globals.css";

const fontThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-thai",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `รับเจาะเสาเข็ม เสาเข็มเจาะ ทั่วประเทศ | ${company.shortName}`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "บริษัท ปรรณวัฒน์ วิศวกรรม แอนด์ คอนสตรัคชั่น จำกัด ผู้เชี่ยวชาญเสาเข็มเจาะ ขนาด Ø 35, 40, 50, 60 ซม. เสาเข็มเจาะแบบแห้ง แบบเปียก ไมโครไพล์ พร้อมทดสอบเสาเข็มโดยวิศวกร รับงานทั่วประเทศ ราคายุติธรรม",
  keywords: defaultKeywords,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  formatDetection: { telephone: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#040914",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={fontThai.variable}>
      <body className="font-sans">
        <JsonLd data={organizationSchema()} />
        <Navbar />
        <main className="pb-14 lg:pb-0">{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
