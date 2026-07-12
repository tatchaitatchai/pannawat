import { company } from "@/data/site";

/** แถบชวนติดต่อ (Call to Action) ใช้ปิดท้ายทุกหน้า */
export function CtaSection() {
  return (
    <section className="tech-grid relative overflow-hidden bg-ink-950 py-16 sm:py-20">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          ต้องการประเมินราคาเสาเข็มเจาะ?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          ปรึกษาฟรี ประเมินราคาไว รับงานทั่วประเทศ
          มีวิศวกรสำรวจหน้างานก่อนลงมือทำจริง ราคายุติธรรม
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={company.phones[0].href}
            className="rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-8 py-3.5 font-semibold text-white transition-transform hover:scale-105 glow-accent"
          >
            โทร {company.phones[0].number}
          </a>
          <a
            href={company.line.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            LINE ID: {company.line.id}
          </a>
        </div>
      </div>
    </section>
  );
}
