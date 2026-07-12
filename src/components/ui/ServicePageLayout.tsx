import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd, serviceSchema } from "@/components/seo/JsonLd";

type ServicePageLayoutProps = {
  title: string;
  intro: string;
  path: string;
  children: ReactNode;
};

/** โครงหน้าเดียวกันของทุกหน้าบริการ: hero มืด + breadcrumb + เนื้อหา + CTA */
export function ServicePageLayout({
  title,
  intro,
  path,
  children,
}: ServicePageLayoutProps) {
  return (
    <>
      <JsonLd data={serviceSchema(title, intro, path)} />

      <section className="tech-grid relative overflow-hidden bg-ink-950 pb-16 pt-28 sm:pt-32">
        <div
          aria-hidden
          className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: title, path }]} />
          <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {intro}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        {children}
      </div>

      <CtaSection />
    </>
  );
}
