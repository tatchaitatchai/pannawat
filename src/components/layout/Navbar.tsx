"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navigation } from "@/data/site";

/** แถบนำทางหลัก: glass effect, sticky, มี dropdown บริการ และเมนูมือถือ */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur-xl">
      <nav
        aria-label="เมนูหลัก"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 font-bold text-ink-950 glow-accent">
            P
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-white">
              {company.shortName}
            </span>
            <span className="block text-[11px] text-accent-300">
              รับเจาะเสาเข็มทั่วประเทศ
            </span>
          </span>
        </Link>

        {/* เมนู desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <li key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-accent-300"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}
                {"children" in item && (
                  <span aria-hidden className="ml-1 text-xs">▾</span>
                )}
              </Link>
              {"children" in item && (
                <ul className="invisible absolute left-0 top-full w-64 rounded-xl border border-white/10 bg-ink-900/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                          pathname === child.href
                            ? "bg-white/5 text-accent-300"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <a
          href={company.phones[0].href}
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 lg:inline-flex"
        >
          <PhoneIcon />
          {company.phones[0].number}
        </a>

        {/* ปุ่มเมนูมือถือ */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          className="rounded-lg p-2 text-slate-300 hover:bg-white/10 lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* เมนูมือถือ */}
      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 font-medium ${
                    isActive(item.href) ? "bg-white/5 text-accent-300" : "text-slate-200"
                  }`}
                >
                  {item.name}
                </Link>
                {"children" in item && (
                  <ul className="ml-3 border-l border-white/10 pl-3">
                    {item.children.slice(1).map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`block rounded-lg px-3 py-2 text-sm ${
                            pathname === child.href ? "text-accent-300" : "text-slate-400"
                          }`}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  );
}
