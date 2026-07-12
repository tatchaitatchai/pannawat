import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0 },
    { path: "/bored-pile", priority: 0.9 },
    { path: "/dry-process", priority: 0.9 },
    { path: "/wet-process", priority: 0.9 },
    { path: "/micropile", priority: 0.9 },
    { path: "/pile-testing", priority: 0.8 },
    { path: "/driven-pile", priority: 0.8 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
