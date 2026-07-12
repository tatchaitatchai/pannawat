# ปรรณวัฒน์ วิศวกรรม — เว็บไซต์บริษัท

เว็บไซต์บริษัท ปรรณวัฒน์ วิศวกรรม แอนด์ คอนสตรัคชั่น จำกัด (รับเจาะเสาเข็ม เสาเข็มเจาะ)
สร้างด้วย Next.js App Router + TypeScript + Tailwind CSS v4 เน้น SEO เป็นหลัก

## เริ่มต้นใช้งาน

```bash
npm install
npm run dev      # เปิด http://localhost:3000
npm run build    # build สำหรับ production
```

ตั้งค่าโดเมนจริงก่อน deploy ผ่าน environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://www.ปรรณวัฒน์เสาเข็มเจาะ.com
```

(ถ้าไม่ตั้ง จะ fallback เป็นโดเมน punycode เดิมใน `src/data/site.ts`)

## โครงสร้างโปรเจกต์

```
src/
├── app/                    # เพจทั้งหมด (App Router)
│   ├── page.tsx            # หน้าแรก
│   ├── bored-pile/         # เสาเข็มเจาะ (ภาพรวม)
│   ├── dry-process/        # เสาเข็มเจาะแบบแห้ง
│   ├── wet-process/        # เสาเข็มเจาะแบบเปียก
│   ├── micropile/          # เสาเข็มไมโครไพล์
│   ├── pile-testing/       # การทดสอบเสาเข็ม
│   ├── driven-pile/        # เสาเข็มตอก
│   ├── portfolio/          # ผลงาน
│   ├── contact/            # ติดต่อเรา
│   ├── sitemap.ts          # สร้าง /sitemap.xml อัตโนมัติ
│   ├── robots.ts           # สร้าง /robots.txt อัตโนมัติ
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── layout/             # Navbar, Footer, MobileContactBar
│   ├── home/               # HeroSlideshow
│   ├── seo/                # JsonLd (structured data)
│   └── ui/                 # GalleryGrid, Breadcrumbs, CTA ฯลฯ
├── data/                   # ★ แก้เนื้อหาเว็บที่นี่ ★
│   ├── site.ts             # ข้อมูลบริษัท เบอร์โทร ที่อยู่ เมนู
│   ├── services.ts         # การ์ดบริการหน้าแรก
│   ├── projects.ts         # รายการผลงาน
│   └── galleries.ts        # รูปภาพ + alt text ทุกแกลเลอรี
└── lib/seo.ts              # helper สร้าง metadata ทุกหน้า
public/images/              # รูป WebP จากเว็บเดิม แยกโฟลเดอร์ตามหน้า
```

## สิ่งที่ทำเพื่อ SEO

- **Metadata ครบทุกหน้า** — title, description, keywords, canonical URL ผ่าน `buildMetadata()` ใน `src/lib/seo.ts`
- **Open Graph + Twitter Card** ทุกหน้า พร้อมรูปประกอบ
- **JSON-LD Structured Data** — `GeneralContractor` (ทั้งเว็บ), `Service` (หน้าบริการ), `BreadcrumbList` (ทุกหน้าใน)
- **sitemap.xml / robots.txt / manifest** generate อัตโนมัติ
- **Semantic HTML** — h1 เดียวต่อหน้า, `<address>`, `<figure>`, `<nav>`, breadcrumb
- **รูปภาพ** — WebP ทั้งหมด (บีบอัดจาก 24MB เหลือ 13MB), `next/image` (lazy load + AVIF/WebP + responsive `sizes`), alt text ภาษาไทยทุกรูป
- **ภาษา** — `<html lang="th">`, `og:locale=th_TH`, ฟอนต์ IBM Plex Sans Thai ผ่าน `next/font` (ไม่มี layout shift)
- **ทุกหน้าเป็น Static** (SSG) — โหลดเร็ว, Core Web Vitals ดี
- เนื้อหาและคีย์เวิร์ดเดิมทั้งหมดจากเว็บเก่า (เสาเข็มเจาะ, รับเจาะเสาเข็ม, เสาเข็มเจาะสมุทรปราการ ฯลฯ)

## หลัง Deploy อย่าลืม

1. ตั้ง `NEXT_PUBLIC_SITE_URL` เป็นโดเมนจริง
2. ยืนยันเว็บใน [Google Search Console](https://search.google.com/search-console) แล้ว submit sitemap
3. ถ้าเปลี่ยนโดเมน ให้ทำ 301 redirect จากโดเมนเก่า
