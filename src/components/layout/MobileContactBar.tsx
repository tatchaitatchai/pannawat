import { company } from "@/data/site";

/** แถบติดต่อด่วนล่างจอ แสดงเฉพาะมือถือ: โทร / LINE */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden">
      <a
        href={company.phones[0].href}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
      >
        <span className="grid size-7 place-items-center rounded-full bg-accent-500">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
          </svg>
        </span>
        โทรเลย
      </a>
      <a
        href={company.line.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border-l border-white/10 py-3.5 text-sm font-semibold text-white"
      >
        <span className="grid size-7 place-items-center rounded-full bg-[#06C755] text-[10px] font-bold">
          LINE
        </span>
        {company.line.id}
      </a>
    </div>
  );
}
