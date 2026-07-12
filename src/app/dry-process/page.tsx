import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/ui/ServicePageLayout";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { buildMetadata } from "@/lib/seo";
import { dryProcessGallery } from "@/data/galleries";

export const metadata: Metadata = buildMetadata({
  title: "เสาเข็มเจาะแบบแห้ง ชนิดสามขาเจาะ รถสว่านเจาะ (Dry Process)",
  description:
    "รับทำเสาเข็มเจาะแบบแห้ง ชนิดสามขาเจาะและรถสว่านเจาะ ขนาด Ø 35, 40, 50, 60 ซม. เจาะลึก 18-24 เมตร พร้อมภาพผลงานหน้างานจริง ราคายุติธรรม",
  path: "/dry-process",
  keywords: ["เข็มเจาะสามขา", "รถสว่านเจาะ", "เข็มเจาะระบบแห้ง", "Dry Process"],
  image: dryProcessGallery[0].src,
});

export default function DryProcessPage() {
  return (
    <ServicePageLayout
      title="เสาเข็มเจาะแบบแห้ง ชนิดสามขาเจาะ, รถสว่านเจาะ"
      intro="เสาเข็มเจาะแบบแห้ง (Dry Process) ใช้ปั้นจั่นตั้งสามขาขนาดเล็กหรือรถสว่านเจาะ เจาะเสาเข็มขนาด 0.35, 0.40, 0.50 และ 0.60 เมตร เจาะได้ลึกประมาณ 18–24 เมตร โดยก้นหลุมเจาะอยู่ในชั้นดินเหนียวแข็ง (Stiff Clay) หรือชั้นทรายที่ไม่มีน้ำ เหมาะกับงานในพื้นที่จำกัดและงานเซฟตี้โรงงาน"
      path="/dry-process"
    >
      <h2 className="mb-8 text-2xl font-bold text-ink-900">
        ภาพผลงานเสาเข็มเจาะแบบแห้ง
      </h2>
      <GalleryGrid images={dryProcessGallery} columns={3} />
    </ServicePageLayout>
  );
}
