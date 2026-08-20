"use client";

import { cn } from "@/lib/cn";
import { Container } from "../ui/Container";

export function TreatmentStickyNav({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-[60px] z-30 hidden border-b border-line bg-white/95 backdrop-blur lg:block"
    >
      <Container className="flex gap-1 overflow-x-auto py-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "inline-flex min-h-11 shrink-0 items-center rounded-full px-4 text-sm font-medium text-forest hover:bg-mist",
            )}
          >
            {item.label}
          </a>
        ))}
      </Container>
    </nav>
  );
}
