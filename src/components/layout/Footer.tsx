import Link from "next/link";
import { company, navigation } from "@/data/site";
import { services } from "@/data/services";

/** ส่วนท้ายเว็บ: ข้อมูลบริษัท เมนูบริการ และช่องทางติดต่อ */
export function Footer() {
  return (
    <footer className="tech-grid bg-ink-950 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-lg font-bold text-white">{company.name}</p>
          <p className="mt-1 text-sm text-accent-300">{company.nameEn}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed">
            ผู้เชี่ยวชาญงานเจาะเสาเข็มอย่างมืออาชีพ พร้อมประสบการณ์ยาวนาน
            รับเจาะเสาเข็มทั่วราชอาณาจักรโดยช่างผู้ชำนาญงาน
            มีวิศวกรสำรวจหน้างานและทดสอบเสาเข็มตามมาตรฐานวิศวกรรม
          </p>
          <p className="mt-4 text-sm">
            เลขประจำตัวผู้เสียภาษี {company.taxId} · บริหารงานโดย {company.manager}
          </p>
        </div>

        <nav aria-label="บริการของเรา">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            บริการของเรา
          </p>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={s.slug} className="transition-colors hover:text-accent-300">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            ติดต่อเรา
          </p>
          <address className="space-y-2.5 text-sm not-italic">
            <p>{company.address.full}</p>
            {company.phones.map((p) => (
              <p key={p.number}>
                <a href={p.href} className="transition-colors hover:text-accent-300">
                  โทร {p.number}
                </a>{" "}
                ({p.label})
              </p>
            ))}
            <p>
              <a
                href={`mailto:${company.email}`}
                className="transition-colors hover:text-accent-300"
              >
                {company.email}
              </a>
            </p>
            <p>
              LINE ID:{" "}
              <a
                href={company.line.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent-300"
              >
                {company.line.id}
              </a>
            </p>
            <p>
              <a
                href={company.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent-300"
              >
                Facebook: ปรรณวัฒน์ วิศวกรรม
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.shortName} — สงวนลิขสิทธิ์
          </p>
          <ul className="flex gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-accent-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
