import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaSection } from "@/components/ui/CtaSection";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { buildMetadata } from "@/lib/seo";
import { portfolioGallery } from "@/data/galleries";
import { privateProjects, governmentProjects, type Project } from "@/data/projects";

export const metadata: Metadata = buildMetadata({
  title: "ผลงานเจาะเสาเข็ม โครงการเอกชนและหน่วยงานราชการ",
  description:
    "รวมผลงานเจาะเสาเข็มของปรรณวัฒน์ วิศวกรรม กว่า 40 โครงการ ทั้งอาคารสูง โรงงานอุตสาหกรรม โรงเรียน โรงพยาบาล และหน่วยงานราชการทั่วประเทศ",
  path: "/portfolio",
  keywords: ["ผลงานเสาเข็มเจาะ", "โครงการเสาเข็มเจาะ"],
  image: portfolioGallery[0].src,
});

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {projects.map((project, i) => (
        <li
          key={project.title}
          className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-accent-400/50"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-ink-950 text-sm font-bold text-accent-300">
            {i + 1}
          </span>
          <div>
            <h3 className="font-semibold leading-snug text-ink-900">
              {project.title}
            </h3>
            {project.detail && (
              <p className="mt-1 text-sm text-slate-500">{project.detail}</p>
            )}
            <p className="mt-1.5 text-sm text-slate-500">
              ผู้ว่าจ้าง: <span className="font-medium text-slate-700">{project.client}</span>
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <section className="tech-grid relative overflow-hidden bg-ink-950 pb-16 pt-28 sm:pt-32">
        <div
          aria-hidden
          className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "ผลงาน", path: "/portfolio" }]} />
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            ผลงานของเรา
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            รวมผลงานเจาะเสาเข็มเพียงบางส่วนจากประสบการณ์ยาวนาน
            ครอบคลุมอาคารสูง โรงงานอุตสาหกรรม โรงเรียน โรงพยาบาล
            และหน่วยงานราชการทั่วประเทศ
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <section aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="mb-8 text-2xl font-bold text-ink-900">
            ภาพหน้างานจริง
          </h2>
          <GalleryGrid images={portfolioGallery} columns={4} />
        </section>

        <section aria-labelledby="private-heading">
          <h2 id="private-heading" className="mb-8 text-2xl font-bold text-ink-900">
            ผลงานภาคเอกชนและโรงงานอุตสาหกรรม
          </h2>
          <ProjectList projects={privateProjects} />
        </section>

        <section aria-labelledby="gov-heading">
          <h2 id="gov-heading" className="mb-8 text-2xl font-bold text-ink-900">
            ผลงานกับหน่วยงานราชการ
          </h2>
          <ProjectList projects={governmentProjects} />
        </section>

        <section aria-labelledby="telecom-heading">
          <h2 id="telecom-heading" className="mb-8 text-2xl font-bold text-ink-900">
            งานฐานเสาโทรคมนาคม
          </h2>
          <figure className="overflow-hidden rounded-3xl border border-slate-200">
            <Image
              src="/images/portfolio/telecom-base-works.webp"
              alt="งานฐานเสาโทรคมนาคม TRUE DTAC CAT ที่ทำเป็นประจำทุกเดือน เดือนละกว่า 10 ฐาน"
              width={1280}
              height={720}
              sizes="(max-width: 1024px) 100vw, 60rem"
              className="w-full object-cover"
            />
            <figcaption className="bg-slate-50 px-6 py-4 text-sm text-slate-600">
              งานฐานเสาโทรคมนาคม TRUE, DTAC, CAT ทำเป็นประจำทุกเดือน
              เดือนละกว่า 10 ฐาน รวมถึงงานบ้านลูกค้าและงานวัดต่าง ๆ
            </figcaption>
          </figure>
        </section>
      </div>

      <CtaSection />
    </>
  );
}
