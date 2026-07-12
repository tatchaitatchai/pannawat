import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/ui/ServicePageLayout";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { buildMetadata } from "@/lib/seo";
import { micropileGallery } from "@/data/galleries";

export const metadata: Metadata = buildMetadata({
  title: "เสาเข็มไมโครไพล์ (Micro Pile) เข็มไอ เข็มสปัน งานต่อเติม",
  description:
    "รับตอกเสาเข็มไมโครไพล์ เข็มไอ 18x18, 22x22 ซม. เข็มสปัน Ø 20, 25 ซม. รับน้ำหนัก 20-35 ตัน/ต้น แรงสั่นสะเทือนน้อย เหมาะงานต่อเติมพื้นที่แคบ มาตรฐาน มอก.",
  path: "/micropile",
  keywords: ["Micro Pile", "เสาเข็มไอ", "เสาเข็มสปัน", "เสาเข็มต่อเติม"],
  image: micropileGallery[5].src,
});

/** ตารางสเปคเสาเข็มไมโครไพล์จากเว็บเดิม */
const specs = [
  { type: "เสาเข็มไอ", size: "18x18 ซม.", load: "15–20 ตัน", standard: "มอก. 396-2549" },
  { type: "เสาเข็มไอ", size: "22x22 ซม.", load: "20–25 ตัน", standard: "มอก. 396-2549" },
  { type: "เสาเข็มไอ", size: "26x26 ซม.", load: "30–35 ตัน", standard: "มอก. 396-2549" },
  { type: "เสาเข็มสปันกลม", size: "Ø 21 ซม.", load: "20–25 ตัน", standard: "มอก. 397-2524" },
  { type: "เสาเข็มสปันกลม", size: "Ø 25 ซม.", load: "25–35 ตัน", standard: "มอก. 397-2524" },
  { type: "เสาเข็มสปันกลม", size: "Ø 30 ซม.", load: "30–50 ตัน", standard: "มอก. 397-2524" },
  { type: "เสาเข็มสี่เหลี่ยม", size: "18x18 ซม.", load: "18–22 ตัน", standard: "โรงงาน" },
  { type: "เสาเข็มสี่เหลี่ยม", size: "22x22 ซม.", load: "25–30 ตัน", standard: "โรงงาน" },
];

export default function MicropilePage() {
  return (
    <ServicePageLayout
      title="เสาเข็มไมโครไพล์ (Micro Pile)"
      intro="เสาเข็ม Micro Pile เป็นทางเลือกสำหรับหน้างานที่มีข้อจำกัด เช่น พื้นที่แคบมากหรือความสูงจำกัด ใช้เครื่องตอกขนาดเล็ก แรงสั่นสะเทือนน้อยมาก เข้าทำงานได้ในพื้นที่สูงตั้งแต่ 3 เมตร หรือกว้างตั้งแต่ 1.80 เมตรขึ้นไป เหมาะสำหรับงานต่อเติมและงานเสริมฐานราก"
      path="/micropile"
    >
      <section aria-labelledby="spec-heading">
        <h2 id="spec-heading" className="text-2xl font-bold text-ink-900">
          ขนาดและการรับน้ำหนักของเสาเข็มไมโครไพล์
        </h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-ink-950 text-white">
              <tr>
                <th scope="col" className="px-5 py-3.5 font-semibold">ชนิดเสาเข็ม</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">ขนาด</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">การรับน้ำหนัก</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">มาตรฐาน</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {specs.map((row, i) => (
                <tr key={`${row.type}-${row.size}`} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                  <td className="px-5 py-3 font-medium text-ink-900">{row.type}</td>
                  <td className="px-5 py-3 text-slate-600">{row.size}</td>
                  <td className="px-5 py-3 text-slate-600">{row.load}</td>
                  <td className="px-5 py-3 text-slate-600">{row.standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="detail-heading" className="mt-14 space-y-6">
        <h2 id="detail-heading" className="text-2xl font-bold text-ink-900">
          ชนิดเสาเข็มที่นิยมใช้
        </h2>
        <article className="rounded-3xl border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-ink-900">
            เสาเข็มไอ (Micro Pile) I 22x22 ซม.
          </h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            รับน้ำหนักปลอดภัย 20–25 ตัน/ต้น ความยาวท่อนละ 1.5 เมตร
            มีเหล็กเพลทหล่อติดบริเวณหัวเข็มและปลายเข็ม
            ต่อความยาวเพิ่มได้ด้วยการเชื่อมรอบเสาเข็มจนถึงชั้นดินดาน
            ตรวจสอบกำลังรับน้ำหนักด้วยวิธี Last 10 Blow Count หรือ Dynamic Load
            Test
          </p>
        </article>
        <article className="rounded-3xl border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-ink-900">
            เสาเข็มกลมแรงเหวี่ยง (Spun Micro Pile) Ø 20 ซม.
          </h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            รับน้ำหนักปลอดภัย 20–25 ตัน/ต้น ความยาวท่อนละ 1.5 เมตร
            มีเหล็กปลอกรัดหัวท้าย เชื่อมต่อเพิ่มความลึกได้ตามต้องการจนถึงชั้นดินดาน
            พร้อมตรวจสอบกำลังรับน้ำหนักปลอดภัยตามมาตรฐาน
          </p>
        </article>
        <article className="rounded-3xl border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-ink-900">
            เสาเข็มกลมแรงเหวี่ยง (Spun Micro Pile) Ø 25 ซม.
          </h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            รับน้ำหนักปลอดภัย 25–35 ตัน/ต้น ความยาวท่อนละ 1.5 เมตร
            เหมาะกับงานที่ต้องการกำลังรับน้ำหนักสูงขึ้นในพื้นที่จำกัด
            ทดสอบด้วยวิธี Last 10 Blow Count หรือ Dynamic Load Test
          </p>
        </article>
      </section>

      <section aria-labelledby="gallery-heading" className="mt-14">
        <h2 id="gallery-heading" className="mb-8 text-2xl font-bold text-ink-900">
          ภาพเสาเข็มและผลงานไมโครไพล์
        </h2>
        <GalleryGrid images={micropileGallery} columns={4} />
      </section>
    </ServicePageLayout>
  );
}
