"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/types";
import { cn } from "@/lib/cn";

export function Accordion({ items, heading }: { items: FaqItem[]; heading?: string }) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {heading ? <h2 className="sr-only">{heading}</h2> : null}
      <div className="divide-y divide-line border-y border-line">
        {items.map((item, i) => {
          const isOpen = open === i;
          const panelId = `faq-panel-${i}`;
          const btnId = `faq-btn-${i}`;
          return (
            <div key={item.question}>
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="font-semibold text-forest">{item.question}</span>
                <ChevronDown className={cn("h-5 w-5 shrink-0 text-teal transition duration-200", isOpen && "rotate-180")} />
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className={cn("grid transition-[grid-template-rows] duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-[15px] leading-relaxed text-muted">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
