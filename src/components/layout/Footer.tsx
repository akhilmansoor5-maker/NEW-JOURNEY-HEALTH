import { footerCompactNav } from "@/content/navigation";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { media } from "@/lib/media";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src={media.logoWhite} alt="newjourney" width={180} height={40} className="h-8 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">{site.footerIntro}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/contact-us/#enquiry" className="px-5 text-sm">
              {home.heroCta}
            </Button>
            <Button href={site.whatsapp} variant="ghost" arrow={false} className="px-5 text-sm">
              {home.chatExpert}
            </Button>
          </div>
        </div>
        {site.offices.map((office) => (
          <div key={office.heading}>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lime">{office.heading}</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-white/70">
              {office.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 py-6 text-sm text-white/55">
        {footerCompactNav.slice(0, 12).map((l) => (
          <Link key={l.label + l.href} href={l.href} className="min-h-11 inline-flex items-center hover:text-white">
            {l.label}
          </Link>
        ))}
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-4 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/terms/" className="min-h-11 inline-flex items-center">
              {site.termsLabel}
            </Link>
            <Link href="/privacy/" className="min-h-11 inline-flex items-center">
              {site.privacyLabel}
            </Link>
            <a href={site.instagram} className="min-h-11 inline-flex items-center">
              Instagram
            </a>
            <a href={site.linkedin} className="min-h-11 inline-flex items-center">
              LinkedIn
            </a>
            <a href={site.youtube} className="min-h-11 inline-flex items-center">
              YouTube
            </a>
            <a href={site.x} className="min-h-11 inline-flex items-center">
              X
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
