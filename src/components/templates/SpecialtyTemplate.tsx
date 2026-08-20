import { featuredDoctors } from "@/content/doctors";
import { specialtyHipFaqs } from "@/content/faqs";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { anchorId } from "@/lib/anchors";
import type { SpecialtyPage } from "@/types";
import Image from "next/image";
import { Accordion } from "../ui/Accordion";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { EnquiryForm } from "../forms/EnquiryForm";
import { SectionHeading } from "../ui/SectionHeading";
import { DoctorCard } from "../cards/DoctorCard";
import { TestimonialsCarousel } from "../sections/TestimonialsCarousel";
import { TreatmentStickyNav } from "../navigation/TreatmentStickyNav";

export function SpecialtyTemplate({ page }: { page: SpecialtyPage }) {
  return (
    <article>
      <section id="overview" className="relative isolate min-h-[78vh] overflow-hidden pt-24">
        <Image src={page.image} alt="" fill priority className="object-cover object-[center_22%]" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,56,62,0.86)_0%,rgba(11,56,62,0.4)_48%,rgba(11,56,62,0.1)_100%)]" />
        <Container className="relative flex min-h-[78vh] flex-col justify-end pb-14 pt-28">
          <Breadcrumbs
            light
            items={[
              { name: "Home", href: "/" },
              { name: page.documentTitle.replace(" – New Journey Health", "") },
            ]}
          />
          <h1 className="max-w-[16ch] text-[clamp(2.2rem,5.4vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
            {page.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/78">{page.heroBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#enquiry">{home.bookConsultation}</Button>
            <Button href={site.whatsapp} variant="ghost" arrow={false}>
              {home.chatExpert}
            </Button>
          </div>
        </Container>
      </section>
      <TreatmentStickyNav
        items={[
          { href: "#treatments", label: page.treatmentsHeading },
          { href: "#why", label: home.whyHeading },
          { href: "#doctors", label: home.specialistsHeading },
          ...(page.showFaqs ? [{ href: "#faqs", label: home.specialtyFaqHeading }] : []),
        ]}
      />
      {page.introHeading ? (
        <section className="bg-sage py-16 lg:py-24">
          <Container className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-snug text-forest">{page.introHeading}</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{page.introBody}</p>
            </div>
            <div className="relative min-h-72 overflow-hidden rounded-2xl">
              <Image src={page.image} alt="" fill className="object-cover" />
            </div>
          </Container>
        </section>
      ) : null}
      <section id="treatments" className="scroll-mt-28 py-16 lg:py-20">
        <Container>
          <SectionHeading title={page.treatmentsHeading} subtitle={page.comprehensiveIntro} />
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
            {page.treatmentNames.map((name) => (
              <a
                key={name}
                href={`#${anchorId(name)}-0`}
                className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-line px-4 text-sm text-forest hover:border-lime"
              >
                {name}
              </a>
            ))}
          </div>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {page.procedures.map((proc, i) => (
              <article id={`${anchorId(proc.name)}-${i}`} key={`${proc.name}-${i}`} className="scroll-mt-36 grid gap-6 py-10 md:grid-cols-[88px_1fr]">
                <p className="text-3xl font-semibold text-lime/80">{String(i + 1).padStart(2, "0")}</p>
                <div>
                  <h2 className="text-2xl font-semibold text-forest">{proc.name}</h2>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted">
                    {proc.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section id="why" className="scroll-mt-28 bg-forest py-20 text-white">
        <Container>
          <SectionHeading title={home.whyHeading} light />
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {home.why.map((item, i) => (
              <article key={item.title} className="border-t border-white/15 pt-6">
                <p className="text-2xl font-semibold text-lime/70">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section id="doctors" className="scroll-mt-28 bg-mist py-20">
        <Container>
          <SectionHeading title={home.specialistsHeading} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {featuredDoctors.slice(0, 5).map((d) => (
              <DoctorCard key={d.name} {...d} />
            ))}
          </div>
        </Container>
      </section>
      <TestimonialsCarousel heading={home.specialtyTestimonialsHeading} items={home.specialtyTestimonials} />
      {page.showFaqs ? (
        <section id="faqs" className="scroll-mt-28 bg-sage py-20">
          <Container>
            <SectionHeading title={home.specialtyFaqHeading} className="mb-8" />
            <Accordion items={specialtyHipFaqs} heading={home.specialtyFaqHeading} />
          </Container>
        </section>
      ) : null}
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
