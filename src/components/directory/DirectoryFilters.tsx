"use client";

import { site } from "@/content/site";
import { SlidersHorizontal, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type Group = { key: string; all: string; options: string[] };

export function DirectoryFilters({
  groups,
  searchPlaceholder = site.searchPlaceholder,
  resultCount,
  clearLabel,
}: {
  groups: Group[];
  searchPlaceholder?: string;
  resultCount: number;
  clearLabel: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [open, setOpen] = useState(false);
  const q = params.get("q") ?? "";

  function write(next: Record<string, string | null>) {
    const sp = new URLSearchParams(params.toString());
    Object.entries(next).forEach(([key, value]) => {
      if (!value) sp.delete(key);
      else sp.set(key, value);
    });
    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  const active = groups
    .map((g) => ({ key: g.key, value: params.get(g.key), all: g.all }))
    .filter((a) => a.value);
  if (q) active.unshift({ key: "q", value: q, all: searchPlaceholder });

  const panel = (
    <div className="space-y-6">
      <input
        value={q}
        onChange={(e) => write({ q: e.target.value || null })}
        placeholder={searchPlaceholder}
        aria-label={searchPlaceholder}
        className="min-h-11 w-full rounded-lg border border-line bg-white px-3 text-sm outline-none transition focus:border-lime"
      />
      {groups.map((group) => {
        const selected = params.get(group.key);
        return (
          <fieldset key={group.key}>
            <legend className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">{group.all}</legend>
            <label className="flex min-h-10 cursor-pointer items-center gap-3 text-sm text-forest">
              <input
                type="checkbox"
                checked={!selected}
                onChange={() => write({ [group.key]: null })}
                className="h-4 w-4 accent-forest"
              />
              {group.all}
            </label>
            {group.options.map((opt) => (
              <label key={opt} className="flex min-h-10 cursor-pointer items-center gap-3 text-sm text-forest">
                <input
                  type="checkbox"
                  checked={selected === opt}
                  onChange={() => write({ [group.key]: selected === opt ? null : opt })}
                  className="h-4 w-4 accent-forest"
                />
                {opt}
              </label>
            ))}
          </fieldset>
        );
      })}
    </div>
  );

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 lg:hidden">
        <p className="text-sm tabular-nums text-muted" aria-live="polite">
          {resultCount}
        </p>
        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-semibold text-forest"
          onClick={() => setOpen(true)}
        >
          <SlidersHorizontal className="h-4 w-4" aria-hidden />
          {clearLabel}
        </button>
      </div>
      {active.length ? (
        <div className="mb-5 flex flex-wrap items-center gap-2 lg:hidden">
          {active.map((a) => (
            <button
              key={a.key + a.value}
              type="button"
              className="inline-flex min-h-9 items-center gap-2 rounded-full bg-forest px-3 text-sm text-white"
              onClick={() => write({ [a.key]: null })}
            >
              {a.value}
              <X className="h-3.5 w-3.5" aria-hidden />
            </button>
          ))}
          <button type="button" className="text-sm font-semibold text-teal" onClick={() => router.replace(pathname, { scroll: false })}>
            {clearLabel}
          </button>
        </div>
      ) : null}
      <aside className="hidden rounded-2xl border border-line bg-white p-5 lg:block">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm tabular-nums text-muted" aria-live="polite">
            {resultCount}
          </p>
          {active.length ? (
            <button type="button" className="text-sm font-semibold text-teal" onClick={() => router.replace(pathname, { scroll: false })}>
              {clearLabel}
            </button>
          ) : null}
        </div>
        {panel}
      </aside>
      {open ? (
        <div className="fixed inset-0 z-50 bg-forest/40 lg:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-auto rounded-t-3xl bg-white p-5 pb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold text-forest">{clearLabel}</p>
              <button type="button" aria-label="Close" className="flex h-11 w-11 items-center justify-center" onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>
            {panel}
          </div>
        </div>
      ) : null}
    </div>
  );
}
