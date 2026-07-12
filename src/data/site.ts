/** ข้อมูลกลางของบริษัท — แก้ไขที่นี่ที่เดียว ใช้ทั้งเว็บ */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.xn--22cm2ad5aj0cla5b9a5egrd2tcc5kzd.com";

export const company = {
  name: "บริษัท ปรรณวัฒน์ วิศวกรรม แอนด์ คอนสตรัคชั่น จำกัด",
  shortName: "ปรรณวัฒน์ วิศวกรรม",
  nameEn: "Pannawat Engineering and Construction Co., Ltd.",
  brand: "PNW",
  taxId: "0115559015252",
  manager: "นายวรทร วสุศุภธรม์",
  address: {
    street: "998/93 หมู่ 5 ถนนสุขุมวิท",
    subDistrict: "ตำบลท้ายบ้านใหม่",
    district: "อำเภอเมืองสมุทรปราการ",
    province: "จังหวัดสมุทรปราการ",
    postalCode: "10280",
    full: "998/93 หมู่ 5 ถนนสุขุมวิท ตำบลท้ายบ้านใหม่ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ 10280",
  },
  phones: [
    { label: "คุณวรทร (เจี๊ยบ)", number: "081-353-5465", href: "tel:0813535465" },
    { label: "คุณอ้อ", number: "062-606-5988", href: "tel:0626065988" },
    { label: "สำนักงาน / แฟกซ์", number: "02-138-1693", href: "tel:021381693" },
  ],
  email: "pnw.khemjoh@gmail.com",
  line: {
    id: "pnw123",
    url: "https://line.me/ti/p/~pnw123",
  },
  facebook: "https://web.facebook.com/profile.php?id=100069092461420",
} as const;

/** เมนูหลักของเว็บไซต์ */
export const navigation = [
  { name: "หน้าแรก", href: "/" },
  {
    name: "บริการของเรา",
    href: "/bored-pile",
    children: [
      { name: "เสาเข็มเจาะ", href: "/bored-pile" },
      { name: "เสาเข็มเจาะแบบแห้ง", href: "/dry-process" },
      { name: "เสาเข็มเจาะแบบเปียก", href: "/wet-process" },
      { name: "เสาเข็มไมโครไพล์", href: "/micropile" },
      { name: "การทดสอบเสาเข็ม", href: "/pile-testing" },
      { name: "เสาเข็มตอก", href: "/driven-pile" },
    ],
  },
  { name: "ผลงาน", href: "/portfolio" },
  { name: "ติดต่อเรา", href: "/contact" },
] as const;

export const defaultKeywords = [
  "เสาเข็มเจาะ",
  "รับเจาะเสาเข็ม",
  "เจาะเสาเข็ม",
  "เสาเข็มเจาะแบบแห้ง",
  "เสาเข็มเจาะแบบเปียก",
  "เสาเข็มไมโครไพล์",
  "ทดสอบเสาเข็ม",
  "เสาเข็มตอก",
  "เสาเข็มเจาะสมุทรปราการ",
  "เสาเข็มเจาะ กรุงเทพฯ",
  "ราคาเสาเข็มเจาะ",
  "บริษัทรับทำเสาเข็มเจาะ",
  "ปรรณวัฒน์ วิศวกรรม",
];
