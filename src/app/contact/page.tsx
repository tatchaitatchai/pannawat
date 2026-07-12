import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "ติดต่อเรา ขอใบเสนอราคาเสาเข็มเจาะ",
  description: `ติดต่อ ${company.name} โทร 081-353-5465, 062-606-5988 LINE ID: pnw123 ที่อยู่ ${company.address.full} ประเมินราคาเสาเข็มเจาะฟรี`,
  path: "/contact",
  keywords: ["ติดต่อเสาเข็มเจาะ", "ขอใบเสนอราคาเสาเข็มเจาะ"],
  image: "/images/contact/business-card.webp",
});

export default function ContactPage() {
  return (
    <>
      <section className="tech-grid relative overflow-hidden bg-ink-950 pb-16 pt-28 sm:pt-32">
        <div
          aria-hidden
          className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "ติดต่อเรา", path: "/contact" }]} />
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            ติดต่อเรา
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            ปรึกษางานเสาเข็มเจาะ ประเมินราคาฟรี รับงานทั่วประเทศ
            ทีมงานพร้อมให้บริการทุกวัน
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* ช่องทางติดต่อ */}
          <section aria-labelledby="channels-heading" className="space-y-4">
            <h2 id="channels-heading" className="text-2xl font-bold text-ink-900">
              ช่องทางติดต่อ
            </h2>

            {company.phones.map((phone) => (
              <a
                key={phone.number}
                href={phone.href}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-colors hover:border-accent-400/60 hover:bg-accent-500/5"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-lg font-bold text-ink-900">{phone.number}</span>
                  <span className="block text-sm text-slate-500">{phone.label}</span>
                </span>
              </a>
            ))}

            <a
              href={company.line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-colors hover:border-[#06C755]/60 hover:bg-[#06C755]/5"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#06C755] text-xs font-bold text-white">
                LINE
              </span>
              <span>
                <span className="block text-lg font-bold text-ink-900">{company.line.id}</span>
                <span className="block text-sm text-slate-500">เพิ่มเพื่อนเพื่อส่งแบบและขอใบเสนอราคา</span>
              </span>
            </a>

            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-colors hover:border-accent-400/60 hover:bg-accent-500/5"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-ink-900 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span>
                <span className="block text-lg font-bold text-ink-900">{company.email}</span>
                <span className="block text-sm text-slate-500">อีเมล</span>
              </span>
            </a>

            <a
              href={company.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-colors hover:border-[#1877F2]/60 hover:bg-[#1877F2]/5"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#1877F2] text-lg font-bold text-white">
                f
              </span>
              <span>
                <span className="block text-lg font-bold text-ink-900">ปรรณวัฒน์ วิศวกรรม - เสาเข็มเจาะ</span>
                <span className="block text-sm text-slate-500">Facebook Page</span>
              </span>
            </a>

            <address className="rounded-2xl bg-slate-50 p-6 not-italic">
              <h3 className="font-bold text-ink-900">ที่อยู่สำนักงาน</h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {company.name}
                <br />
                {company.address.full}
              </p>
              <p className="mt-3 text-sm text-slate-500">
                เลขประจำตัวผู้เสียภาษี {company.taxId} · บริหารงานโดย {company.manager}
              </p>
            </address>
          </section>

          {/* นามบัตรและแผนที่ */}
          <section aria-labelledby="map-heading" className="space-y-6">
            <h2 id="map-heading" className="text-2xl font-bold text-ink-900">
              แผนที่และข้อมูลบริษัท
            </h2>
            <figure className="overflow-hidden rounded-3xl border border-slate-200">
              <Image
                src="/images/contact/business-card.webp"
                alt={`นามบัตร ${company.name} พร้อมข้อมูลติดต่อครบถ้วน`}
                width={700}
                height={440}
                sizes="(max-width: 1024px) 100vw, 40rem"
                className="w-full object-contain"
                priority
              />
            </figure>
            <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <Image
                src="/images/contact/office-map.webp"
                alt={`แผนที่เดินทางมายังสำนักงาน ${company.shortName} ${company.address.full}`}
                width={960}
                height={720}
                sizes="(max-width: 1024px) 100vw, 40rem"
                className="w-full object-contain"
              />
              <figcaption className="border-t border-slate-100 px-6 py-4 text-sm text-slate-600">
                แผนที่เดินทางมายังสำนักงาน — ใกล้ถนนสุขุมวิท ต.ท้ายบ้านใหม่
                อ.เมืองสมุทรปราการ
              </figcaption>
            </figure>
          </section>
        </div>
      </div>
    </>
  );
}
