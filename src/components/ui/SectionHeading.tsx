import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light,
  underline,
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  underline?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-[11px] font-semibold uppercase tracking-[0.18em]",
            light ? "text-lime" : "text-teal",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "text-[clamp(1.7rem,3.4vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em]",
          light ? "text-white" : "text-forest",
          underline && "underline-swoosh",
        )}
      >
        {title}
      </Tag>
      {subtitle ? (
        <p className={cn("mt-4 max-w-[36rem] text-base leading-relaxed", light ? "text-white/75" : "text-muted")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
