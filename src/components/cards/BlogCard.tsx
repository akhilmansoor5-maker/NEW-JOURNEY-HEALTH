import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function BlogCard({
  href,
  image,
  title,
  heading,
  category,
  date,
  author,
  featured,
}: {
  href: string;
  image: string;
  title: string;
  heading: string;
  category: string;
  date: string;
  author: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group overflow-hidden bg-white",
        featured ? "relative rounded-2xl" : "rounded-2xl border border-line",
      )}
    >
      <div className={cn("img-zoom", featured ? "relative min-h-[280px] lg:min-h-[420px]" : "")}>
        <Image
          src={image}
          alt={title}
          width={900}
          height={560}
          className={cn("w-full object-cover", featured ? "h-[280px] lg:h-[420px]" : "h-44")}
        />
      </div>
      <div className={featured ? "absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep to-transparent p-6 text-white lg:p-8" : "p-5"}>
        {category ? (
          <p className={cn("text-[11px] uppercase tracking-[0.16em]", featured ? "text-lime" : "text-teal")}>{category}</p>
        ) : null}
        <h3 className={cn("mt-2 font-semibold leading-snug", featured ? "text-2xl lg:text-3xl" : "text-lg text-forest")}>{heading}</h3>
        <p className={cn("mt-3 text-sm", featured ? "text-white/70" : "text-muted")}>
          {date} {author}
        </p>
      </div>
    </Link>
  );
}
