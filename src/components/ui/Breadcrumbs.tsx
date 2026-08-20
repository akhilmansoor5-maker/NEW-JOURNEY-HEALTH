import Link from "next/link";
import { cn } from "@/lib/cn";
import { BreadcrumbJsonLd } from "../seo/JsonLd";

export function Breadcrumbs({
  items,
  light,
}: {
  items: { name: string; href?: string }[];
  light?: boolean;
}) {
  const json = items.map((item) => ({ name: item.name, path: item.href ?? "/" }));
  return (
    <nav aria-label="Breadcrumb" className={cn("mb-8 text-sm", light ? "text-white/60" : "text-muted")}>
      <BreadcrumbJsonLd items={json} />
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden>/</span> : null}
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-lime">
                {item.name}
              </Link>
            ) : (
              <span className={light ? "text-white" : "text-forest"}>{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
