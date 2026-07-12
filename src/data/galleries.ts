/** รายการรูปภาพผลงานแยกตามหมวด พร้อม alt text สำหรับ SEO */

export type GalleryImage = {
  src: string;
  alt: string;
};

const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1);
const pad = (i: number) => String(i).padStart(2, "0");

export const dryProcessGallery: GalleryImage[] = range(19).map((i) => ({
  src: `/images/dry-process/dry-process-${pad(i)}.webp`,
  alt: `ผลงานเสาเข็มเจาะแบบแห้ง ชนิดสามขาเจาะและรถสว่านเจาะ ภาพที่ ${i}`,
}));

export const wetProcessGallery: GalleryImage[] = range(8).map((i) => ({
  src: `/images/wet-process/wet-process-${pad(i)}.webp`,
  alt: `ผลงานเสาเข็มเจาะแบบเปียก (Wet Process) ภาพที่ ${i}`,
}));

export const micropileGallery: GalleryImage[] = [
  { src: "/images/micropile/i-pile-22x22.webp", alt: "เสาเข็มไอ Micro Pile ขนาด 22x22 ซม." },
  { src: "/images/micropile/i-pile-stack.webp", alt: "เสาเข็มไอสำหรับงานไมโครไพล์" },
  { src: "/images/micropile/spun-pile-20.webp", alt: "เสาเข็มกลมแรงเหวี่ยง Spun Micro Pile ขนาด 20 ซม." },
  { src: "/images/micropile/spun-pile-detail.webp", alt: "รายละเอียดเสาเข็มสปันไมโครไพล์" },
  { src: "/images/micropile/spun-pile-25.webp", alt: "เสาเข็มกลมแรงเหวี่ยง Spun Micro Pile ขนาด 25 ซม." },
  { src: "/images/micropile/micropile-work-01.webp", alt: "งานตอกเสาเข็มไมโครไพล์หน้างานจริง ภาพที่ 1" },
  { src: "/images/micropile/micropile-work-02.webp", alt: "งานตอกเสาเข็มไมโครไพล์หน้างานจริง ภาพที่ 2" },
  { src: "/images/micropile/micropile-work-03.webp", alt: "งานตอกเสาเข็มไมโครไพล์หน้างานจริง ภาพที่ 3" },
];

export const seismicTestGallery: GalleryImage[] = range(5).map((i) => ({
  src: `/images/pile-testing/seismic-test-${pad(i)}.webp`,
  alt: `การทดสอบความสมบูรณ์ของเสาเข็ม Seismic Test ภาพที่ ${i}`,
}));

export const dynamicLoadTestGallery: GalleryImage[] = range(4).map((i) => ({
  src: `/images/pile-testing/dynamic-load-test-${pad(i)}.webp`,
  alt: `การทดสอบกำลังรับน้ำหนักเสาเข็ม Dynamic Load Test ภาพที่ ${i}`,
}));

export const staticLoadTestGallery: GalleryImage[] = [
  { src: "/images/pile-testing/static-load-test-01.webp", alt: "การทดสอบกำลังรับน้ำหนักเสาเข็ม Static Load Test ภาพที่ 1" },
  { src: "/images/pile-testing/static-load-test-02.webp", alt: "การทดสอบกำลังรับน้ำหนักเสาเข็ม Static Load Test ภาพที่ 2" },
  { src: "/images/pile-testing/testing-equipment.webp", alt: "เครื่องมือทดสอบเสาเข็มมาตรฐานวิศวกรรม" },
];

export const drivenPileGallery: GalleryImage[] = range(6).map((i) => ({
  src: `/images/driven-pile/driven-pile-${pad(i)}.webp`,
  alt: `ผลงานเสาเข็มตอกโดยทีมงานมืออาชีพ ภาพที่ ${i}`,
}));

export const portfolioGallery: GalleryImage[] = range(12).map((i) => ({
  src: `/images/portfolio/project-${pad(i)}.webp`,
  alt: `ผลงานเจาะเสาเข็มของปรรณวัฒน์ วิศวกรรม โครงการที่ ${i}`,
}));

export const heroSlides: GalleryImage[] = [
  { src: "/images/home/slide-01-bored-pile-rig.webp", alt: "เครื่องเจาะเสาเข็มหน้างานจริง" },
  { src: "/images/home/slide-02-drilling-site.webp", alt: "งานเจาะเสาเข็มในไซต์ก่อสร้าง" },
  { src: "/images/home/slide-04-rebar-cage.webp", alt: "โครงเหล็กเสริมสำหรับเสาเข็มเจาะ" },
  { src: "/images/home/slide-05-concrete-pour.webp", alt: "การเทคอนกรีตลงหลุมเจาะเสาเข็ม" },
  { src: "/images/home/slide-07-drill-truck.webp", alt: "รถสว่านเจาะเสาเข็ม" },
];
