import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicePageLayout } from "@/components/ui/ServicePageLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "เสาเข็มเจาะ (Bored Pile) รับเจาะเสาเข็ม Ø 35-60 ซม.",
  description:
    "เสาเข็มเจาะคืออะไร ข้อดีของเสาเข็มเจาะ ตารางการรับน้ำหนักแต่ละขนาด เสาเข็มเจาะขนาดเล็กระบบแห้ง และขนาดใหญ่ระบบเปียก โดยผู้เชี่ยวชาญประสบการณ์ยาวนาน",
  path: "/bored-pile",
  keywords: ["Bored Pile", "เสาเข็มเจาะขนาดเล็ก", "เสาเข็มเจาะขนาดใหญ่"],
  image: "/images/home/slide-01-bored-pile-rig.webp",
});

const advantages = [
  "ลดแรงสั่นสะเทือนและเสียงรบกวนเมื่อเทียบกับการตอกเสาเข็ม",
  "เข้าทำงานในพื้นที่แคบหรือพื้นที่ที่มีความสูงจำกัดได้",
  "ไม่ทำให้ฐานรากหรือโครงสร้างอาคารข้างเคียงเสียหายจากการไหลของดินอ่อน",
  "เคลื่อนย้ายเครื่องมือสะดวกรวดเร็ว พร้อมแล้วเริ่มงานได้ทันที",
  "ทดสอบความสมบูรณ์ของเสาเข็มได้ทุกต้น",
];

export default function BoredPilePage() {
  return (
    <ServicePageLayout
      title="เสาเข็มเจาะ (Bored Pile)"
      intro="เสาเข็มเจาะ คือเสาเข็มระบบพิเศษที่ขุดเจาะดิน ณ ตำแหน่งของเสาเข็มจนถึงระดับความลึกที่ต้องการ แล้วจึงใส่เหล็กเสริมและเทคอนกรีตลงในหลุมเจาะ หล่อเป็นเสาเข็มที่หน้างานจริง"
      path="/bored-pile"
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-10">
          <section aria-labelledby="types-heading">
            <h2 id="types-heading" className="text-2xl font-bold text-ink-900">
              ประเภทของเสาเข็มเจาะ
            </h2>
            <div className="mt-6 space-y-6">
              <article className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-ink-900">
                  1. เสาเข็มเจาะขนาดเล็ก (Small Diameter Bored Pile)
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  ขนาดเส้นผ่านศูนย์กลาง 35–60 ซม. (ส่วนใหญ่ 35, 40, 50, 60 ซม.)
                  ความลึกประมาณ 18–23 เมตร ใช้กรรมวิธีเจาะแบบแห้ง (Dry Process)
                  เป็นปั้นจั่นสามขาขนาดเล็ก ก้นหลุมเจาะอยู่ในชั้นดินเหนียวแข็ง
                  (Stiff Clay) หรือชั้นทรายที่ไม่มีน้ำ
                </p>
                <Link href="/dry-process" className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">
                  ดูผลงานเสาเข็มเจาะแบบแห้ง →
                </Link>
              </article>
              <article className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-ink-900">
                  2. เสาเข็มเจาะขนาดใหญ่ (Large Diameter Bored Pile)
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  ขนาดเส้นผ่านศูนย์กลางมากกว่า 60 ซม. ขึ้นไป (ส่วนใหญ่ 80, 100,
                  120, 150 ซม.) ความลึกประมาณ 25–65 เมตร ใช้ระบบเปียก (Wet
                  Process) โดยฉีด Bentonite Slurry ลงในหลุมเจาะ
                  เพื่อสร้างแรงดันและยึดประสานผิวดิน
                  ป้องกันผนังหลุมเจาะพังทลาย เหมาะกับหลุมลึกถึงชั้นทรายหรือมีน้ำใต้ดิน
                </p>
                <Link href="/wet-process" className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">
                  ดูผลงานเสาเข็มเจาะแบบเปียก →
                </Link>
              </article>
            </div>
          </section>

          <section aria-labelledby="advantages-heading">
            <h2 id="advantages-heading" className="text-2xl font-bold text-ink-900">
              ข้อดีของเสาเข็มเจาะ
            </h2>
            <ul className="mt-6 space-y-3">
              {advantages.map((item, i) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                  <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-accent-500/15 text-sm font-bold text-accent-600">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-slate-600">
              การใช้เสาเข็มเจาะไม่ก่อให้เกิดแรงสั่นสะเทือนที่เป็นอันตรายต่ออาคารข้างเคียง
              จึงเหมาะอย่างยิ่งสำหรับอาคารสูงที่ต้องรับน้ำหนักมาก
              และอาคารที่ก่อสร้างใกล้ชิดกับสิ่งปลูกสร้างเดิม
              อีกทั้งยังสามารถทำงานภายในตัวอาคาร เช่น โกดัง ได้อีกด้วย
            </p>
          </section>
        </div>

        <aside className="space-y-6">
          <figure className="rounded-3xl border border-slate-200 p-4">
            <Image
              src="/images/bored-pile/load-capacity-table.webp"
              alt="ตารางการรับน้ำหนักของเสาเข็มเจาะแต่ละขนาด"
              width={640}
              height={480}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="w-full rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              ตารางการรับน้ำหนักของเสาเข็มเจาะแต่ละขนาด
            </figcaption>
          </figure>
          <figure className="rounded-3xl border border-slate-200 p-4">
            <Image
              src="/images/bored-pile/small-bored-pile-process.webp"
              alt="ขั้นตอนการทำเสาเข็มเจาะขนาดเล็กระบบแห้ง"
              width={640}
              height={480}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="w-full rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              ขั้นตอนการทำเสาเข็มเจาะขนาดเล็ก (Dry Process)
            </figcaption>
          </figure>
          {[1, 2, 3, 4].map((i) => (
            <figure key={i} className="rounded-3xl border border-slate-200 p-4">
              <Image
                src={`/images/bored-pile/wet-process-diagram-0${i}.webp`}
                alt={`แผนภาพขั้นตอนการทำเสาเข็มเจาะระบบเปียก ขั้นตอนที่ ${i}`}
                width={640}
                height={480}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full rounded-xl object-contain"
              />
            </figure>
          ))}
        </aside>
      </div>
    </ServicePageLayout>
  );
}
