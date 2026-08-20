"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FilterGroup = {
  key: string;
  all: string;
  options: string[];
};

export function DirectoryToolbar({
  searchPlaceholder = "Search...",
  filters,
  children,
}: {
  searchPlaceholder?: string;
  filters: FilterGroup[];
  children: (state: { query: string; selected: Record<string, string> }) => ReactNode;
}) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Record<string, string>>(() =>
    Object.fromEntries(filters.map((f) => [f.key, f.all])),
  );

  const state = useMemo(() => ({ query, selected }), [query, selected]);

  return (
    <div>
      <div className="rounded-[1.8rem] bg-white p-5 shadow-soft md:p-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
          className="min-h-12 w-full rounded-full border border-line bg-mist px-5 py-3 text-sm outline-none transition focus:border-lime focus:bg-white"
        />
        <div className="mt-5 flex flex-col gap-4">
          {filters.map((group) => (
            <div key={group.key} className="flex flex-wrap gap-2">
              {[group.all, ...group.options.filter((opt) => opt !== group.all)].map((opt) => {
                const active = selected[group.key] === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelected((s) => ({ ...s, [group.key]: opt }))}
                    className={cn(
                      "inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm transition",
                      active
                        ? "border-forest bg-forest text-white"
                        : "border-line bg-white text-forest hover:border-lime",
                    )}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">{children(state)}</div>
    </div>
  );
}

