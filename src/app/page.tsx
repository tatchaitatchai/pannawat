import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/ui/CtaSection";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/data/site";
import { services } from "@/data/services";
import { portfolioGallery } from "@/data/galleries";

export const metadata: Metadata = buildMetadata({
  title: `รับเจาะเสาเข็ม เสาเข็มเจาะ ทั่วประเทศ ราคายุติธรรม | ${company.shortName}`,
  description:
    "ผู้เชี่ยวชาญงานเสาเข็มเจาะ Ø 35, 40, 50, 60 ซม. เสาเข็มเจาะแบบแห้ง แบบเปียก ไมโครไพล์ เสาเข็มตอก พร้อมบริการทดสอบเสาเข็มโดยวิศวกร มีวิศวกรสำรวจหน้างานก่อนเริ่มงาน รับงานทั่วประเทศ",
  path: "",
});

const stats = [
  { value: "35–60", unit: "ซม.", label: "ขนาดเข็มเจาะระบบแห้ง" },
  { value: "60–120", unit: "ซม.", label: "ขนาดเข็มเจาะระบบเปียก" },
  { value: "24", unit: "เมตร", label: "ความลึกสูงสุดระบบแห้ง" },
  { value: "40+", unit: "โครงการ", label: "ผลงานเอกชนและราชการ" },
];

const strengths = [
  {
    title: "วิศวกรสำรวจหน้างานจริง",
    detail:
      "มีวิศวกรผู้มีประสบการณ์สำรวจหน้างานก่อนลงมือทำจริง และควบคุมงานตลอดโครงการ",
  },
  {
    title: "ทดสอบเสาเข็มตามมาตรฐาน",
    detail:
      "ทดสอบความสมบูรณ์และกำลังรับน้ำหนักเสาเข็มทุกต้น เพื่อให้ได้มาตรฐานงานวิศวกรรม",
  },
  {
    title: "วัสดุคุณภาพรับรองมาตรฐาน",
    detail:
      "คัดสรรเฉพาะวัสดุคุณภาพสูงที่ผ่านการรับรองมาตรฐานวิศวกรรม จากแบรนด์คอนกรีตชั้นนำ",
  },
  {
    title: "เสร็จตามกำหนด ราคายุติธรรม",
    detail:
      "ทีมงานทำงานรวดเร็ว ได้มาตรฐาน ส่งมอบงานตรงเวลา พร้อมประเมินราคาฟรีก่อนเริ่มงาน",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="tech-grid relative overflow-hidden bg-ink-950 pb-16 pt-28 sm:pt-36">
        <div
          aria-hidden
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-ink-700/60 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold text-accent-300">
              <span aria-hidden className="size-1.5 animate-pulse rounded-full bg-accent-400" />
              รับงานทั่วราชอาณาจักร · ประเมินราคาฟรี
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              รับเจาะเสาเข็ม{" "}
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                เสาเข็มเจาะ
              </span>{" "}
              อย่างมืออาชีพ
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {company.name} ผู้เชี่ยวชาญงานเจาะเสาเข็มพร้อมประสบการณ์ยาวนาน
              บริการเสาเข็มเจาะขนาด Ø 35, 40, 50, 60 ซม.
              ทดสอบเสาเข็มเจาะเพื่อให้ได้มาตรฐานงานวิศวกรรม ราคายุติธรรม
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={company.phones[0].href}
                className="rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-7 py-3.5 font-semibold text-white transition-transform hover:scale-105 glow-accent"
              >
                โทร {company.phones[0].number}
              </a>
              <Link
                href="/portfolio"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                ดูผลงานของเรา →
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <dt className="order-last mt-1 text-xs text-slate-400">{s.label}</dt>
                  <dd className="text-2xl font-bold text-white">
                    {s.value}
                    <span className="ml-1 text-sm font-medium text-accent-300">{s.unit}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <HeroSlideshow />
        </div>
      </section>

      {/* บริการของเรา */}
      <section className="py-16 sm:py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="บริการของเรา"
            title="ครบทุกงานเสาเข็ม จบในที่เดียว"
            description="รับทำเสาเข็มเจาะ เจาะสำรวจชั้นดิน วางผัง และทดสอบความสมบูรณ์ของเสาเข็มโดยวิศวกรผู้เชี่ยวชาญ"
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-accent-400/50 hover:shadow-xl hover:shadow-accent-500/10"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={640}
                      height={420}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-ink-900">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                      ดูรายละเอียด
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* จุดแข็ง / วิสัยทัศน์ */}
      <section className="bg-slate-50 py-16 sm:py-24" aria-labelledby="why-us-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="ทำไมต้องเลือกเรา"
                title="มืออาชีพในงานเจาะเสาเข็ม ทุกขั้นตอน"
                description="เราคลุกคลีกับงานเจาะเสาเข็มมายาวนาน รู้จริงด้านการทำงานทุกขั้นตอน ผลิตงานเสาเข็มเจาะคุณภาพให้ความสมบูรณ์เพียงพอต่อการรับน้ำหนักโครงสร้างอาคาร"
                align="left"
              />
              <ul className="mt-8 space-y-5">
                {strengths.map((item, i) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-ink-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="rounded-3xl border border-slate-200 bg-white p-4">
                <Image
                  src="/images/home/dbd-certificate.webp"
                  alt="หนังสือรับรองการจดทะเบียนนิติบุคคล กรมพัฒนาธุรกิจการค้า ของบริษัท ปรรณวัฒน์ วิศวกรรม แอนด์ คอนสตรัคชั่น จำกัด"
                  width={480}
                  height={640}
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="w-full rounded-xl object-contain"
                />
                <figcaption className="mt-3 text-center text-xs text-slate-500">
                  หนังสือรับรองนิติบุคคล (DBD)
                </figcaption>
              </figure>
              <figure className="rounded-3xl border border-slate-200 bg-white p-4">
                <Image
                  src="/images/home/vat-certificate-pp20.webp"
                  alt="ใบทะเบียนภาษีมูลค่าเพิ่ม ภ.พ.20 ของบริษัท ปรรณวัฒน์ วิศวกรรม แอนด์ คอนสตรัคชั่น จำกัด"
                  width={480}
                  height={360}
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="w-full rounded-xl object-contain"
                />
                <figcaption className="mt-3 text-center text-xs text-slate-500">
                  ใบทะเบียนภาษีมูลค่าเพิ่ม (ภ.พ.20)
                </figcaption>
              </figure>
              <figure className="rounded-3xl border border-slate-200 bg-white p-4 sm:col-span-2">
                <Image
                  src="/images/home/partner-brands.webp"
                  alt="แบรนด์คอนกรีตคุณภาพที่เราเลือกใช้: CPAC, น่ำเฮง, TPI PL, อินทรี, Q-Mix, บัวคอนกรีต"
                  width={700}
                  height={100}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="w-full rounded-xl object-contain"
                />
                <figcaption className="mt-3 text-center text-xs text-slate-500">
                  เราใช้คอนกรีตจากแบรนด์ชั้นนำที่ได้มาตรฐานเท่านั้น
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ผลงานล่าสุด */}
      <section className="py-16 sm:py-24" aria-labelledby="portfolio-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ผลงานของเรา"
            title="ผลงานเจาะเสาเข็มทั่วประเทศ"
            description="ตัวอย่างผลงานทั้งภาคเอกชน โรงงานอุตสาหกรรม และหน่วยงานราชการ"
          />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {portfolioGallery.slice(0, 4).map((img) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={480}
                height={360}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="aspect-[4/3] w-full rounded-2xl border border-slate-200 object-cover"
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-ink-800"
            >
              ดูผลงานทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
