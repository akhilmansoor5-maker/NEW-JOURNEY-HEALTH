import { about } from "@/content/pages";
import { media } from "@/lib/media";
import Image from "next/image";
import { EnquiryBand } from "../forms/EnquiryBand";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutTemplate() {
  return (
    <article>
      <section className="relative isolate overflow-hidden bg-forest pt-28 pb-20 text-white lg:pt-36 lg:pb-28">
        <Container className="relative grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs light items={[{ name: "Home", href: "/" }, { name: "About Us" }]} />
            <h1 className="sr-only">About Us</h1>
            <h2 className="mt-6 max-w-[16ch] text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.04em]">
              {about.h2a}
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-white/75">{about.p1}</p>
        </Container>
      </section>
      <section className="bg-white py-14 lg:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl lg:min-h-[420px]">
            <Image src={media.wellness} alt="" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted">{about.p2}</p>
          </div>
        </Container>
      </section>
      <section className="bg-sage py-14 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <h2 className="max-w-md text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-snug text-forest">{about.h2b}</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            <p>{about.p3}</p>
            <p>{about.p4}</p>
          </div>
        </Container>
      </section>
      <section className="grid lg:grid-cols-2">
        <article className="bg-forest px-6 py-16 text-white md:px-16 lg:py-20">
          <p className="text-[11px] uppercase tracking-[0.18em] text-lime">{about.missionEyebrow}</p>
          <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight">{about.missionTitle}</h2>
          <p className="mt-6 max-w-md text-white/70">{about.missionBody}</p>
        </article>
        <article className="bg-mist px-6 py-16 md:px-16 lg:py-20">
          <p className="text-[11px] uppercase tracking-[0.18em] text-teal">{about.visionEyebrow}</p>
          <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight text-forest">{about.visionTitle}</h2>
          <p className="mt-6 max-w-md text-muted">{about.visionBody}</p>
        </article>
      </section>
      <section className="py-14 lg:py-20">
        <Container>
          <SectionHeading title={about.valuesHeading} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {about.values.map((value) => (
              <article key={value.title} className="rounded-2xl bg-mist p-6">
                <h3 className="text-xl font-semibold text-forest">{value.title}</h3>
                <p className="mt-3 text-muted">{value.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-sage py-14 lg:py-20">
        <Container>
          <SectionHeading title={about.teamHeading} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {about.team.map((member, i) => (
              <article key={member.name} className="rounded-2xl bg-white p-6">
                <p className="text-sm font-semibold text-teal">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-semibold text-forest">{member.name}</h3>
                <p className="mt-1 text-muted">{member.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <EnquiryBand stillQuery />
    </article>
  );
}
