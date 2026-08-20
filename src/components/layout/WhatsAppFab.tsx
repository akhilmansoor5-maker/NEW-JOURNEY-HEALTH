"use client";

import { site } from "@/content/site";
import { hideConvertBar } from "@/lib/convert";
import { withSlash } from "@/lib/ui";
import { usePathname } from "next/navigation";

export function WhatsAppFab() {
  const pathname = withSlash(usePathname());
  const raised = !hideConvertBar.has(pathname);

  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={site.whatsappMessageLabel}
      title={site.whatsappWidget}
      className={`group fixed right-4 z-50 flex items-center justify-end ${raised ? "bottom-[4.85rem] md:bottom-6" : "bottom-5"} md:right-6`}
    >
      <span className="pointer-events-none mr-3 hidden max-w-[200px] rounded-2xl bg-forest px-3 py-2 text-sm text-white opacity-0 shadow-soft transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
        {site.whatsappWidget}
      </span>
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b383e] text-lime shadow-[0_10px_24px_rgba(11,56,62,0.35)] ring-2 ring-lime/70 transition group-hover:scale-105 group-focus-visible:scale-105 md:h-14 md:w-14">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current md:h-7 md:w-7" aria-hidden>
          <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.74.46 3.44 1.33 4.94L2 22l5.31-1.39a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.89-4.43 9.89-9.89C21.94 6.43 17.5 2 12.04 2Zm5.76 14.05c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.83-.12-.42-.13-.97-.32-1.67-.62-2.94-1.27-4.85-4.23-5-4.42-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.4.26-.28.58-.35.77-.35h.56c.18 0 .42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.14.31-.28.48-.14.16-.3.37-.42.5-.14.14-.29.29-.12.56.16.28.73 1.2 1.56 1.95 1.07.96 1.97 1.26 2.25 1.4.28.14.44.12.6-.07.16-.2.7-.81.88-1.09.18-.28.37-.23.62-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
        </svg>
      </span>
    </a>
  );
}
