"use client";

import { megaMenu, primaryNav } from "@/content/navigation";
import { site } from "@/content/site";
import { home } from "@/content/home";
import { searchSite } from "@/lib/search";
import { media } from "@/lib/media";
import { cn } from "@/lib/cn";
import { isDarkHero } from "@/lib/ui";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../ui/Button";

const megaImages: Record<string, string> = {
  "Health 360": media.wellness,
  "Modern Medicine": media.modernMedicine,
  "Fertility and IVF": media.fertility,
  Ayurveda: media.ayurveda,
  Dental: media.dental,
  "EmpowHER Women's Health": media.heroPortrait,
};

const megaBlurbs: Record<string, string> = {
  "Health 360": home.treatmentCards[0].subtitle,
  "Modern Medicine": home.treatmentCards[1].subtitle,
  "Fertility and IVF": home.treatmentCards[2].subtitle,
  Ayurveda: home.treatmentCards[3].subtitle,
  Dental: home.treatmentCards[4].subtitle,
};

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");
  const [menuPath, setMenuPath] = useState(pathname);
  const [activeCol, setActiveCol] = useState(megaMenu[1].title);
  const [activeHit, setActiveHit] = useState(0);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  function openMega() {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setMega(true);
  }

  function closeMega() {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setMega(false), 160);
  }

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMobile(false);
    setMega(false);
    setSearch(false);
    setQ("");
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
        setActiveHit(0);
        return;
      }
      if (e.key === "Escape") {
        setMega(false);
        setMobile(false);
        setSearch(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
  }, []);

  const results = useMemo(() => searchSite(q), [q]);

  const dark = !scrolled && isDarkHero(pathname);
  const col = megaMenu.find((c) => c.title === activeCol) ?? megaMenu[1];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition duration-300",
        scrolled || !dark ? "bg-white/92 shadow-soft backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center gap-3 px-5 py-3 lg:px-8">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src={dark ? media.logoWhite : media.logo}
            alt="newjourney"
            width={180}
            height={40}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>
        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNav.map((item) =>
            item.label === "Treatments" ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
              >
                <button
                  className={cn(
                    "inline-flex min-h-11 items-center gap-1 text-[14px] font-medium tracking-[0.02em]",
                    dark ? "text-white" : "text-forest",
                    mega && "text-lime",
                  )}
                  aria-expanded={mega}
                  aria-haspopup="true"
                  aria-controls="treatments-menu"
                  onClick={() => setMega((v) => !v)}
                >
                  Treatments <ChevronDown className={cn("h-4 w-4 transition", mega && "rotate-180")} />
                </button>
                {mega ? <div className="absolute inset-x-[-48px] top-full z-50 h-5" aria-hidden /> : null}
                <AnimatePresence>
                  {mega ? (
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="fixed inset-x-0 top-[3.55rem] z-50 px-5 pt-4 lg:px-8"
                      id="treatments-menu"
                    >
                      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-2xl border border-line bg-white shadow-media lg:grid-cols-[240px_1fr]">
                        <div className="border-r border-line bg-mist p-3">
                          {megaMenu
                            .filter((c) => !c.launchingSoon)
                            .map((c) => (
                              <button
                                key={c.title}
                                type="button"
                                onMouseEnter={() => setActiveCol(c.title)}
                                onFocus={() => setActiveCol(c.title)}
                                className={cn(
                                  "flex min-h-12 w-full cursor-pointer items-center rounded-xl px-4 text-left text-[15px] font-semibold transition duration-200",
                                  c.title === col.title ? "bg-white text-forest shadow-soft" : "text-muted hover:text-forest",
                                )}
                              >
                                {c.title}
                              </button>
                            ))}
                          <div className="my-3 mx-3 border-t border-line" />
                          {megaMenu
                            .filter((c) => c.launchingSoon)
                            .map((c) => (
                              <button
                                key={c.title}
                                type="button"
                                onMouseEnter={() => setActiveCol(c.title)}
                                onFocus={() => setActiveCol(c.title)}
                                className={cn(
                                  "flex min-h-12 w-full cursor-pointer items-center justify-between gap-2 rounded-xl px-4 text-left text-sm transition duration-200",
                                  c.title === col.title ? "bg-white text-forest shadow-soft" : "text-muted hover:text-forest",
                                )}
                              >
                                <span>{c.title}</span>
                                <span className="rounded-full bg-sage px-2 py-0.5 text-[10px] uppercase tracking-wide text-forest">
                                  Launching Soon
                                </span>
                              </button>
                            ))}
                        </div>
                        <div className="grid min-h-[360px] lg:grid-cols-[0.9fr_1.1fr]">
                          <div className="relative hidden min-h-[360px] lg:block">
                            <Image
                              src={megaImages[col.title] ?? media.modernMedicine}
                              alt=""
                              fill
                              className="object-cover transition duration-200"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-forest/10" />
                            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                              <p className="text-[11px] uppercase tracking-[0.16em] text-lime">Treatments</p>
                              <p className="mt-2 text-2xl font-semibold">{col.title}</p>
                              {megaBlurbs[col.title] ? (
                                <p className="mt-2 text-sm text-white/75">{megaBlurbs[col.title]}</p>
                              ) : null}
                            </div>
                          </div>
                          <div className="flex flex-col p-5 lg:p-6">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">{col.title}</p>
                            <ul className="mt-4 grid flex-1 content-start gap-2 sm:grid-cols-2">
                              {col.children.map((child) => (
                                <li key={child.label}>
                                  {child.href ? (
                                    <Link
                                      href={child.href}
                                      className="flex min-h-12 items-center rounded-xl bg-mist px-4 text-[15px] text-forest transition duration-200 hover:bg-sage"
                                    >
                                      {child.label}
                                    </Link>
                                  ) : (
                                    <span className="flex min-h-12 items-center rounded-xl bg-mist px-4 text-[15px] text-muted/70">
                                      {child.label}
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                            {col.href ? (
                              <Link href={col.href} className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-teal">
                                {home.learnMore}
                              </Link>
                            ) : (
                              <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-teal">Launching Soon</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "link-underline text-[14px] font-medium tracking-[0.02em]",
                  dark ? "text-white" : "text-forest",
                  pathname === item.href && "text-lime",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="ml-auto flex items-center gap-1 lg:ml-5">
          <button
            aria-label={site.searchPlaceholder}
            aria-keyshortcuts="Control+K Meta+K"
            className={cn("flex h-11 w-11 items-center justify-center rounded-full", dark ? "text-white" : "text-forest")}
            onClick={() => {
              setSearch(true);
              setActiveHit(0);
            }}
          >
            <Search className="h-5 w-5" />
          </button>
          <Button href={site.whatsapp} className="px-4 py-2 text-sm sm:px-6">
            {site.enquireNow}
          </Button>
          <button
            className={cn("flex h-11 w-11 items-center justify-center rounded-full lg:hidden", dark ? "text-white" : "text-forest")}
            aria-label="Menu"
            onClick={() => setMobile(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile ? (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            className="fixed inset-0 z-50 bg-forest text-white lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Image src={media.logoWhite} alt="newjourney" width={160} height={36} className="h-8 w-auto" />
              <button aria-label="Close" className="flex h-11 w-11 items-center justify-center" onClick={() => setMobile(false)}>
                <X />
              </button>
            </div>
            <div className="h-[calc(100vh-148px)] overflow-y-auto px-5 pb-8">
              {primaryNav.map((item) =>
                item.label === "Treatments" ? (
                  <details key="t" open className="border-b border-white/10 py-3">
                    <summary className="flex min-h-11 cursor-pointer items-center font-medium">Treatments</summary>
                    <div className="mt-3 space-y-2 pl-1">
                      {megaMenu.map((c) => (
                        <details key={c.title} className="rounded-xl bg-white/5 px-3 py-2">
                          <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-3 text-sm font-semibold">
                            <span>{c.title}</span>
                            {c.launchingSoon ? (
                              <span className="text-[10px] uppercase tracking-wide text-lime">Launching Soon</span>
                            ) : null}
                          </summary>
                          <ul className="mt-1 pb-2 text-white/80">
                            {c.href ? (
                              <li className="min-h-11 flex items-center">
                                <Link href={c.href}>{home.learnMore}</Link>
                              </li>
                            ) : null}
                            {c.children.map((child) => (
                              <li key={child.label} className="min-h-11 flex items-center">
                                {child.href ? <Link href={child.href}>{child.label}</Link> : <span>{child.label}</span>}
                              </li>
                            ))}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link key={item.href} href={item.href} className="flex min-h-14 items-center border-b border-white/10 font-medium">
                    {item.label}
                  </Link>
                ),
              )}
            </div>
            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-forest p-4">
              <Button href={site.whatsapp} className="w-full">
                {site.enquireNow}
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {search ? (
        <div className="fixed inset-0 z-50 bg-forest/45 backdrop-blur-sm" onClick={() => setSearch(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label={site.searchPlaceholder}
            className="mx-auto mt-24 w-[min(92vw,640px)] rounded-3xl bg-white p-5 shadow-media"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setActiveHit(0);
              }}
              placeholder={site.searchPlaceholder}
              aria-autocomplete="list"
              aria-controls="search-results"
              className="min-h-11 w-full rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-lime"
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActiveHit((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
                }
                if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActiveHit((i) => Math.max(i - 1, 0));
                }
                if (e.key === "Enter" && results[activeHit]) {
                  e.preventDefault();
                  router.push(results[activeHit].href);
                  setSearch(false);
                }
              }}
            />
            <ul id="search-results" className="mt-3 max-h-80 overflow-auto" role="listbox">
              {results.map((r, i) => (
                <li key={`${r.kind}-${r.href}-${r.title}`}>
                  <Link
                    href={r.href}
                    role="option"
                    aria-selected={i === activeHit}
                    className={`flex min-h-14 flex-col justify-center rounded-xl px-3 py-2 ${i === activeHit ? "bg-mist" : "hover:bg-mist"}`}
                    onMouseEnter={() => setActiveHit(i)}
                    onClick={() => setSearch(false)}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-medium text-forest">{r.title}</span>
                      <span className="text-[11px] uppercase tracking-[0.12em] text-teal">{r.kind}</span>
                    </span>
                    <span className="truncate text-sm text-muted">{r.context}</span>
                  </Link>
                </li>
              ))}
            </ul>
            {q.trim().length >= 2 && results.length === 0 ? (
              <p role="status" className="mt-4 px-1 text-sm text-muted">
                {site.searchPlaceholder}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}
