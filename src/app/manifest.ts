import type { MetadataRoute } from "next";
import { company } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.shortName,
    description:
      "ผู้เชี่ยวชาญเสาเข็มเจาะ เสาเข็มเจาะแบบแห้ง แบบเปียก ไมโครไพล์ และทดสอบเสาเข็ม รับงานทั่วประเทศ",
    start_url: "/",
    display: "standalone",
    background_color: "#040914",
    theme_color: "#040914",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
