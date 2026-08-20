"use client";

import { contactFaqGroups } from "@/content/faqs";
import { site } from "@/content/site";
import { useMemo, useState } from "react";
import { Accordion } from "../ui/Accordion";

export function FaqGroups({ heading }: { heading: string }) {
  const [tab, setTab] = useState(0);
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const items = useMemo(() => {
    if (!query) return contactFaqGroups[tab].items;
    return contactFaqGroups.flatMap((g) =>
      g.items.filter((item) => `${item.question} ${item.answer}`.toLowerCase().includes(query)),
    );
  }, [query, tab]);

  return (
    <div>
      <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold tracking-[-0.03em] text-forest">{heading}</h2>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={site.searchPlaceholder}
        aria-label={site.searchPlaceholder}
        className="mt-6 min-h-12 w-full max-w-md rounded-2xl border border-line bg-white px-5 text-sm outline-none focus:border-lime"
      />
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {contactFaqGroups.map((g, i) => (
          <button
            key={g.heading}
            type="button"
            onClick={() => setTab(i)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
              i === tab && !query ? "bg-forest text-white" : "bg-white text-forest hover:bg-mist"
            }`}
          >
            {g.heading}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {items.length ? (
          <Accordion items={items} heading={query ? heading : contactFaqGroups[tab].heading} />
        ) : (
          <p role="status" className="py-10 text-muted">
            {site.searchPlaceholder}
          </p>
        )}
      </div>
    </div>
  );
}
