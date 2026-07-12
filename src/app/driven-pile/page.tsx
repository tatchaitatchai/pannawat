import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/ui/ServicePageLayout";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { buildMetadata } from "@/lib/seo";
import { drivenPileGallery } from "@/data/galleries";

export const metadata: Metadata = buildMetadata({
  title: "เสาเข็มตอก (Driven Pile) บริการตอกเสาเข็มครบวงจร",
  description:
    "รับตอกเสาเข็มทุกชนิดด้วยทีมงานมืออาชีพและเครื่องจักรได้มาตรฐาน พร้อมให้คำปรึกษาเลือกชนิดเสาเข็มที่เหมาะกับงานก่อสร้างของคุณ ราคายุติธรรม",
  path: "/driven-pile",
  keywords: ["เสาเข็มตอก", "ตอกเสาเข็ม", "ปั้นจั่นตอกเสาเข็ม"],
  image: drivenPileGallery[0].src,
});

export default function DrivenPilePage() {
  return (
    <ServicePageLayout
      title="เสาเข็มตอก (Driven Pile)"
      intro="บริการเสาเข็มตอกครบวงจรด้วยทีมงานมืออาชีพ เครื่องจักรได้มาตรฐาน เหมาะกับงานที่ต้องการความรวดเร็วและประหยัดค่าใช้จ่าย พร้อมวิศวกรให้คำปรึกษาเลือกชนิดและขนาดเสาเข็มที่เหมาะสมกับโครงสร้างของคุณ"
      path="/driven-pile"
    >
      <h2 className="mb-8 text-2xl font-bold text-ink-900">
        ภาพผลงานเสาเข็มตอก
      </h2>
      <GalleryGrid images={drivenPileGallery} columns={3} />
    </ServicePageLayout>
  );
}
