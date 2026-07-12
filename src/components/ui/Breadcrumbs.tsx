import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

type Crumb = { name: string; path: string };

/** breadcrumb พร้อม JSON-LD BreadcrumbList */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "หน้าแรก", path: "/" }, ...items];
  return (
    <nav aria-label="breadcrumb" className="text-sm text-slate-400">
      <JsonLd data={breadcrumbSchema(all)} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((item, i) => {
          const last = i === all.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden>/</span>}
              {last ? (
                <span aria-current="page" className="font-medium text-accent-300">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition-colors hover:text-white">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
