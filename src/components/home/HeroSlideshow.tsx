"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/data/galleries";

/** สไลด์ภาพหน้างานแบบ crossfade อัตโนมัติ ทุก 5 วินาที */
export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 glow-accent">
      {heroSlides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 44vw"
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* จุดบอกตำแหน่งสไลด์ */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`ดูภาพที่ ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-accent-400" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
