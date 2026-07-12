import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/ui/ServicePageLayout";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { buildMetadata } from "@/lib/seo";
import { wetProcessGallery } from "@/data/galleries";

export const metadata: Metadata = buildMetadata({
  title: "เสาเข็มเจาะแบบเปียก (Wet Process) Ø 60-120 ซม.",
  description:
    "รับทำเสาเข็มเจาะแบบเปียก ขนาด Ø 60, 80, 100, 120 ซม. ใช้ Bentonite Slurry ป้องกันผนังหลุมพัง เหมาะกับอาคารสูงรับน้ำหนักมาก พร้อมภาพผลงานหน้างานจริง",
  path: "/wet-process",
  keywords: ["เสาเข็มเจาะระบบเปียก", "Wet Process", "Bentonite Slurry"],
  image: wetProcessGallery[0].src,
});

export default function WetProcessPage() {
  return (
    <ServicePageLayout
      title="เสาเข็มเจาะแบบเปียก (Wet Process)"
      intro="เสาเข็มเจาะแบบเปียก ใช้สำหรับเสาเข็มเจาะขนาดใหญ่ Ø 60–120 ซม. เจาะลึกถึงชั้นทรายหรือชั้นดินที่มีน้ำใต้ดิน โดยฉีด Bentonite Slurry ลงในหลุมเจาะเพื่อสร้างแรงดันและยึดประสานผิวดิน ป้องกันผนังหลุมพังทลาย เหมาะสำหรับอาคารสูงที่ต้องรับน้ำหนักมาก"
      path="/wet-process"
    >
      <h2 className="mb-8 text-2xl font-bold text-ink-900">
        ภาพผลงานเสาเข็มเจาะแบบเปียก
      </h2>
      <GalleryGrid images={wetProcessGallery} columns={4} />
    </ServicePageLayout>
  );
}
