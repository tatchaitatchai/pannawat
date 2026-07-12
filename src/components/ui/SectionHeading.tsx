type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
};

/** หัวข้อ section มาตรฐาน: มี eyebrow, หัวเรื่อง และคำอธิบาย */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1 text-xs font-semibold tracking-wide text-accent-600">
          <span aria-hidden className="size-1.5 rounded-full bg-accent-500" />
          {eyebrow}
        </p>
      )}
      <Tag className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p>
      )}
    </div>
  );
}
