import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "ghostDark" | "text";
  href?: string;
  arrow?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  href,
  className,
  children,
  arrow = variant === "primary",
  ...props
}: Props) {
  const styles = {
    primary: "bg-lime text-forest hover:bg-[#7ab336]",
    ghost: "border border-white/70 text-white hover:bg-white hover:text-forest",
    ghostDark: "border border-forest/20 text-forest hover:border-lime hover:bg-sage/40",
    text: "text-forest hover:text-teal px-0",
  }[variant];

  const cls = cn(
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold tracking-[0.01em] transition duration-200",
    "hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2",
    styles,
    className,
  );

  const inner = (
    <>
      {children}
      {arrow ? (
        <ArrowUpRight className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {inner}
    </button>
  );
}
