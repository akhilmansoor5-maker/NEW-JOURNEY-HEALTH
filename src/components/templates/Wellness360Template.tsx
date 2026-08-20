import { wellness360 } from "@/content/pages";
import { home } from "@/content/home";
import { media } from "@/lib/media";
import { site } from "@/content/site";
import Image from "next/image";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { EnquiryForm } from "../forms/EnquiryForm";
import { SectionHeading } from "../ui/SectionHeading";

export function Wellness360Template() {
  const w = wellness360;
  return (
    <article>
      <section className="relative isolate min-h-[80vh] overflow-hidden pt-24">
        <Image src={media.wellness} alt="" fill priority className="object-cover object-[center_30%]" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,56,62,0.82)_0%,rgba(11,56,62,0.35)_55%,rgba(11,56,62,0.08)_100%)]" />
        <Container className="relative flex min-h-[80vh] flex-col justify-end pb-16 pt-28">
          <Breadcrumbs light items={[{ name: "Home", href: "/" }, { name: "Health 360" }]} />
          <h1 className="max-w-[14ch] text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
            {w.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{w.heroBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#">{w.brochure}</Button>
            <Button href={site.whatsapp} variant="ghost">
              {w.bookNow}
            </Button>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <SectionHeading title={w.expectHeading} />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {w.days.map((day) => (
              <article key={day.label} className="rounded-2xl border border-line p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.16em] text-teal">{day.label}</p>
                <h2 className="mt-2 text-2xl font-bold text-forest">{day.title}</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  {day.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-sage py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-forest">{w.circleHeading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{w.circleBody}</p>
            <p className="mt-8 text-sm uppercase tracking-[0.14em] text-teal">{w.priceLabel}</p>
            <p className="mt-2 text-5xl font-semibold tracking-[-0.04em] text-forest">{w.price}</p>
            <p className="mt-1 text-muted">{w.priceFor}</p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-muted">
              {w.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <Button href={site.whatsapp} className="mt-8">
              {w.bookNow}
            </Button>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl">
            <Image src={media.wellness} alt="" fill className="object-cover" />
          </div>
        </Container>
      </section>
      <section id="enquiry" className="bg-forest py-20 text-white">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">{home.enquiryHeading}</h2>
            <p className="mt-4 text-white/75">{home.enquirySpecialtyBody}</p>
            <Button href={site.whatsapp} variant="ghost" arrow={false} className="mt-6">
              {home.chatExpert}
            </Button>
          </div>
          <EnquiryForm consent={site.consentSpecialty} dark />
        </Container>
      </section>
    </article>
  );
}
