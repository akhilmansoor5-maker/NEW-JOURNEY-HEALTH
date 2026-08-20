import { hospitalDetail } from "@/content/hospitals";
import { EnquiryBand } from "../forms/EnquiryBand";
import { home } from "@/content/home";
import { media } from "@/lib/media";
import { site } from "@/content/site";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function HospitalDetailTemplate() {
  const h = hospitalDetail;
  const stats = h.stats.split(" | ");
  const accreditation = h.facilities.find((item) => item.toLowerCase().includes("nabh"));

  return (
    <article>
      <section className="relative isolate min-h-[72vh] overflow-hidden pt-24">
        <Image src={media.hospitalPhotos[0]} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,56,62,0.86)_0%,rgba(11,56,62,0.28)_100%)]" />
        <Container className="relative flex min-h-[72vh] flex-col justify-end pb-12 pt-28">
          <Breadcrumbs
            light
            items={[
              { name: "Home", href: "/" },
              { name: "Hospitals", href: "/hospitals/" },
              { name: h.name },
            ]}
          />
          <h1 className="max-w-[14ch] text-[clamp(2.2rem,5vw,3.8rem)] font-semibold tracking-[-0.04em] text-white">
            {h.name}
          </h1>
          <p className="mt-3 text-white/75">{h.location}</p>
          {accreditation ? <p className="mt-3 max-w-xl text-sm text-lime">{accreditation}</p> : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.whatsapp}>{h.book}</Button>
            <Button href={site.whatsapp} variant="ghost" arrow={false}>
              {home.chatExpert}
            </Button>
          </div>
        </Container>
      </section>
      <section className="bg-forest py-8 text-white">
        <Container className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <p key={stat} className="border-t border-white/15 pt-4 text-sm text-white/80">
              {stat}
            </p>
          ))}
        </Container>
      </section>
      <section className="py-14 lg:py-20">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-muted">{h.about}</p>
        </Container>
      </section>
      <section className="bg-mist py-14 lg:py-20">
        <Container>
          <SectionHeading title={h.facilitiesHeading} />
          <ul className="mt-8 space-y-3">
            {h.facilities.map((item) => (
              <li key={item} className="border-t border-line pt-3 text-muted">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="py-14 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-3">
          {[
            { title: h.inclusionsHeading, items: h.inclusions },
            { title: h.stayHeading, items: h.stay },
            { title: h.moneyHeading, items: h.money },
          ].map((col) => (
            <article key={col.title} className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-forest">{col.title}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>
      <section id="departments" className="scroll-mt-28 bg-sage py-14 lg:py-20">
        <Container>
          <SectionHeading title={h.departmentsHeading} subtitle={h.departmentsSub} />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {h.treatmentPlaceholders.map((item, i) => (
              <article key={`${item.name}-${i}`} className="border-t border-forest/15 pt-4">
                <h3 className="font-semibold text-forest">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-14 lg:py-20">
        <Container>
          <SectionHeading title={h.servicesHeading} />
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {h.services.map((item) => (
              <li key={item} className="border-t border-line pt-4 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-forest py-14 text-white lg:py-20">
        <Container>
          <h2 className="text-3xl font-semibold">{h.travelHeading}</h2>
          <p className="mt-4 max-w-2xl text-white/70">{h.address}</p>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="border-t border-white/15 pt-5">
              <dt className="text-lime">{h.airportFrom}</dt>
              <dd className="mt-2">
                {h.airport.km} · {h.airport.time}
              </dd>
            </div>
            <div className="border-t border-white/15 pt-5">
              <dt className="text-lime">{h.railFrom}</dt>
              <dd className="mt-2">
                {h.rail.km} · {h.rail.time}
              </dd>
            </div>
          </dl>
          <Link href="/doctors-listing/" className="mt-10 inline-flex min-h-11 items-center text-sm font-semibold text-lime">
            {home.learnMore}
          </Link>
        </Container>
      </section>
      <EnquiryBand body={home.enquirySpecialtyBody} consent={site.consentSpecialty} />
    </article>
  );
}
