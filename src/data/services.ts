/** ข้อมูลสรุปบริการ ใช้แสดงการ์ดบริการในหน้าแรกและลิงก์ภายใน */

export type ServiceSummary = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const services: ServiceSummary[] = [
  {
    slug: "/bored-pile",
    title: "เสาเข็มเจาะ (Bored Pile)",
    shortTitle: "เสาเข็มเจาะ",
    description:
      "เสาเข็มระบบพิเศษ ขุดเจาะดินถึงระดับความลึกที่ต้องการ ใส่เหล็กเสริมและเทคอนกรีตในหลุมเจาะ ลดแรงสั่นสะเทือน ทำงานในพื้นที่แคบได้",
    image: "/images/home/slide-01-bored-pile-rig.webp",
    imageAlt: "งานเสาเข็มเจาะ โดยปรรณวัฒน์ วิศวกรรม",
  },
  {
    slug: "/dry-process",
    title: "เสาเข็มเจาะแบบแห้ง (Dry Process)",
    shortTitle: "เสาเข็มเจาะแบบแห้ง",
    description:
      "ปั้นจั่นสามขาและรถสว่านเจาะ ขนาด Ø 35, 40, 50, 60 ซม. เจาะลึก 18–24 เมตร เหมาะกับชั้นดินเหนียวแข็งหรือชั้นทรายที่ไม่มีน้ำ",
    image: "/images/dry-process/dry-process-01.webp",
    imageAlt: "เสาเข็มเจาะแบบแห้ง ชนิดสามขาเจาะ",
  },
  {
    slug: "/wet-process",
    title: "เสาเข็มเจาะแบบเปียก (Wet Process)",
    shortTitle: "เสาเข็มเจาะแบบเปียก",
    description:
      "เสาเข็มเจาะขนาดใหญ่ Ø 60–120 ซม. ใช้ Bentonite Slurry ป้องกันผนังหลุมพัง เจาะได้ลึก เหมาะกับอาคารสูงที่รับน้ำหนักมาก",
    image: "/images/wet-process/wet-process-01.webp",
    imageAlt: "งานเสาเข็มเจาะแบบเปียก",
  },
  {
    slug: "/micropile",
    title: "เสาเข็มไมโครไพล์ (Micro Pile)",
    shortTitle: "เสาเข็มไมโครไพล์",
    description:
      "เหมาะกับพื้นที่แคบหรือความสูงจำกัด แรงสั่นสะเทือนน้อย รับน้ำหนัก 20–35 ตัน/ต้น เหมาะงานต่อเติมและเสริมฐานราก",
    image: "/images/micropile/micropile-work-01.webp",
    imageAlt: "งานเสาเข็มไมโครไพล์",
  },
  {
    slug: "/pile-testing",
    title: "การทดสอบเสาเข็ม (Pile Testing)",
    shortTitle: "ทดสอบเสาเข็ม",
    description:
      "บริการทดสอบ Seismic Test, Dynamic Load Test และ Static Load Test โดยวิศวกรผู้เชี่ยวชาญ เพื่อความสมบูรณ์และกำลังรับน้ำหนักตามมาตรฐาน",
    image: "/images/pile-testing/dynamic-load-test-01.webp",
    imageAlt: "การทดสอบเสาเข็มโดยวิศวกร",
  },
  {
    slug: "/driven-pile",
    title: "เสาเข็มตอก (Driven Pile)",
    shortTitle: "เสาเข็มตอก",
    description:
      "บริการเสาเข็มตอกครบวงจร ด้วยทีมงานมืออาชีพและเครื่องจักรได้มาตรฐาน พร้อมให้คำปรึกษาเลือกชนิดเสาเข็มที่เหมาะกับงาน",
    image: "/images/driven-pile/driven-pile-01.webp",
    imageAlt: "งานเสาเข็มตอก",
  },
];
