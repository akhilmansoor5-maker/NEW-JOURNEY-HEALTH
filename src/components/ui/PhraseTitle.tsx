import { cn } from "@/lib/cn";

export function PhraseTitle({
  text,
  mark,
  light,
  as: Tag = "h2",
  className,
}: {
  text: string;
  mark: string;
  light?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  const i = text.toLowerCase().indexOf(mark.toLowerCase());
  const before = i >= 0 ? text.slice(0, i) : text;
  const hit = i >= 0 ? text.slice(i, i + mark.length) : "";
  const after = i >= 0 ? text.slice(i + mark.length) : "";

  return (
    <Tag
      className={cn(
        "text-[clamp(1.7rem,3.4vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em]",
        light ? "text-white" : "text-forest",
        className,
      )}
    >
      {before}
      {hit ? (
        <span className="relative inline-block">
          {hit}
          <svg
            viewBox="0 0 240 12"
            className="pointer-events-none absolute -bottom-1 left-0 h-[10px] w-full"
            aria-hidden
          >
            <path
              d="M4 8.5c46-6 92 4 140-2 32-4 62 3 92 5"
              fill="none"
              stroke="#8cc63f"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      ) : null}
      {after}
    </Tag>
  );
}
