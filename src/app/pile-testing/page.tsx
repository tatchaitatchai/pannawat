import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/ui/ServicePageLayout";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { buildMetadata } from "@/lib/seo";
import {
  seismicTestGallery,
  dynamicLoadTestGallery,
  staticLoadTestGallery,
} from "@/data/galleries";

export const metadata: Metadata = buildMetadata({
  title: "การทดสอบเสาเข็ม Seismic Test, Dynamic & Static Load Test",
  description:
    "บริการทดสอบเสาเข็มโดยวิศวกรผู้เชี่ยวชาญ ทดสอบความสมบูรณ์ Seismic Test ทดสอบกำลังรับน้ำหนัก Dynamic Load Test และ Static Load Test ตามมาตรฐานวิศวกรรม",
  path: "/pile-testing",
  keywords: ["Seismic Test", "Dynamic Load Test", "Static Load Test", "ทดสอบความสมบูรณ์เสาเข็ม"],
  image: dynamicLoadTestGallery[0].src,
});

const tests = [
  {
    id: "seismic",
    title: "1. การทดสอบความสมบูรณ์ของเสาเข็ม (Seismic Test)",
    description:
      "ทดสอบว่าเสาเข็มมีการชำรุด แตก หัก หรือเป็นรูโหว่หรือไม่ เพื่อยืนยันความสมบูรณ์ของเสาเข็มทุกต้นก่อนรับน้ำหนักโครงสร้าง",
    gallery: seismicTestGallery,
  },
  {
    id: "dynamic",
    title: "2. การทดสอบกำลังรับน้ำหนักของเสาเข็ม (Dynamic Load Test)",
    description:
      "ทดสอบเพื่อให้ทราบถึงการรับน้ำหนักของเสาเข็ม ว่าสามารถรับน้ำหนักจริงได้ตามที่ออกแบบไว้หรือไม่",
    gallery: dynamicLoadTestGallery,
  },
  {
    id: "static",
    title: "3. การทดสอบกำลังรับน้ำหนักของเสาเข็ม (Static Load Test)",
    description:
      "ทดสอบการรับน้ำหนักจริงของเสาเข็มด้วยวิธีกดน้ำหนักโดยตรง โดยปกติใช้สำหรับงานหน่วยงานราชการ ซึ่งมีค่าใช้จ่ายค่อนข้างสูง",
    gallery: staticLoadTestGallery,
  },
];

export default function PileTestingPage() {
  return (
    <ServicePageLayout
      title="การทดสอบเสาเข็ม (Pile Testing)"
      intro="เราให้บริการทดสอบเสาเข็มโดยวิศวกรผู้เชี่ยวชาญ ทั้งการทดสอบความสมบูรณ์และการทดสอบกำลังรับน้ำหนัก เพื่อให้เสาเข็มทุกต้นได้มาตรฐานงานวิศวกรรม และรับน้ำหนักโครงสร้างอาคารได้อย่างปลอดภัย"
      path="/pile-testing"
    >
      <div className="space-y-16">
        {tests.map((test) => (
          <section key={test.id} aria-labelledby={`${test.id}-heading`}>
            <h2 id={`${test.id}-heading`} className="text-2xl font-bold text-ink-900">
              {test.title}
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
              {test.description}
            </p>
            <div className="mt-8">
              <GalleryGrid images={test.gallery} columns={4} />
            </div>
          </section>
        ))}
      </div>
    </ServicePageLayout>
  );
}
