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
      <section className="relative isolate overflow-hidden bg-forest pt-28 pb-16 text-white lg:min-h-[82vh] lg:pt-36 lg:pb-24">
        <div className="absolute inset-y-0 right-0 hidden w-[40%] lg:block">
          <Image src={media.heroPortrait} alt="" fill className="object-cover object-[center_20%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/50 to-transparent" />
        </div>
        <Container className="relative">
          <Breadcrumbs light items={[{ name: "Home", href: "/" }, { name: "About Us" }]} />
          <h1 className="sr-only">About Us</h1>
          <h2 className="max-w-[14ch] text-[clamp(2.2rem,5.2vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
            {about.h2a}
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-white/75">
            <p>{about.p1}</p>
            <p>{about.p2}</p>
          </div>
        </Container>
      </section>
      <section className="bg-sage py-14 lg:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-snug text-forest">{about.h2b}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">{about.p3}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">{about.p4}</p>
        </Container>
      </section>
      <section className="grid lg:grid-cols-2">
        <article className="bg-forest px-6 py-16 text-white md:px-16">
          <p className="text-[11px] uppercase tracking-[0.18em] text-lime">{about.missionEyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight">{about.missionTitle}</h2>
          <p className="mt-6 max-w-md text-white/70">{about.missionBody}</p>
        </article>
        <article className="bg-mist px-6 py-16 md:px-16">
          <p className="text-[11px] uppercase tracking-[0.18em] text-teal">{about.visionEyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-forest">{about.visionTitle}</h2>
          <p className="mt-6 max-w-md text-muted">{about.visionBody}</p>
        </article>
      </section>
      <section className="py-14 lg:py-20">
        <Container>
          <SectionHeading title={about.valuesHeading} />
          <div className="mt-10 space-y-8">
            {about.values.map((value) => (
              <article key={value.title} className="border-t border-line pt-5 md:grid md:grid-cols-2 md:gap-10">
                <h3 className="text-xl font-semibold text-forest">{value.title}</h3>
                <p className="mt-2 text-muted md:mt-0">{value.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-sage py-14 lg:py-20">
        <Container>
          <SectionHeading title={about.teamHeading} />
          <div className="mt-10 divide-y divide-forest/10 border-y border-forest/10">
            {about.team.map((member, i) => (
              <article key={member.name} className="grid gap-1 py-6 md:grid-cols-[64px_1fr]">
                <p className="text-sm font-semibold text-teal">{String(i + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="text-xl font-semibold text-forest">{member.name}</h3>
                  <p className="text-muted">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <EnquiryBand stillQuery />
    </article>
  );
}
