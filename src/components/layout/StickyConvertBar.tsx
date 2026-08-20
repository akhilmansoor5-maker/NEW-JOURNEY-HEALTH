"use client";

import { home } from "@/content/home";
import { site } from "@/content/site";
import { enquiryHref, hideConvertBar } from "@/lib/convert";
import { withSlash } from "@/lib/ui";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";

export function StickyConvertBar() {
  const pathname = withSlash(usePathname());
  if (hideConvertBar.has(pathname)) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-2 pr-14">
        <Button href={enquiryHref(pathname)} className="w-full px-3 text-sm">
          {home.heroCta}
        </Button>
        <Button href={site.whatsapp} variant="ghostDark" arrow={false} className="w-full px-3 text-sm">
          {home.chatExpert}
        </Button>
      </div>
    </div>
  );
}
