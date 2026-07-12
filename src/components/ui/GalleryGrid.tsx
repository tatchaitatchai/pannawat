"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/data/galleries";

/** กริดรูปภาพ responsive พร้อม lightbox ดูรูปเต็มจอ (ปิดด้วย Esc / ปุ่มลูกศรเลื่อนรูป) */
export function GalleryGrid({
  images,
  columns = 3,
}: {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) =>
        cur === null ? cur : (cur + dir + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <>
      <ul className={`grid grid-cols-1 gap-4 ${gridCols}`}>
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 focus-visible:outline-2 focus-visible:outline-accent-500"
              aria-label={`ดูรูปขยาย: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={640}
                height={480}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[active].alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <figure
            className="relative max-h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              width={1280}
              height={960}
              sizes="100vw"
              className="max-h-[82vh] w-auto rounded-xl object-contain"
              priority
            />
            <figcaption className="mt-3 text-center text-sm text-slate-300">
              {images[active].alt} ({active + 1}/{images.length})
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={close}
            aria-label="ปิด"
            className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="รูปก่อนหน้า"
            className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="รูปถัดไป"
            className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
