import Link from "next/link";

export default function NotFound() {
  return (
    <section className="tech-grid flex min-h-[70vh] items-center justify-center bg-ink-950 px-4 pt-16">
      <div className="text-center">
        <p className="text-7xl font-bold text-accent-400">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">ไม่พบหน้าที่คุณต้องการ</h1>
        <p className="mt-3 text-slate-400">
          หน้านี้อาจถูกย้ายหรือลบไปแล้ว
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-8 py-3.5 font-semibold text-white transition-transform hover:scale-105"
        >
          กลับหน้าแรก
        </Link>
      </div>
    </section>
  );
}
