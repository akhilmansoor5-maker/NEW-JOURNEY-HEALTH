import { doctorDetail } from "@/content/doctors";
import { media } from "@/lib/media";
import { home } from "@/content/home";
import { site } from "@/content/site";
import Image from "next/image";
import Link from "next/link";
import { EnquiryBand } from "../forms/EnquiryBand";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { PageShell } from "../ui/PageShell";

export function DoctorDetailTemplate() {
  const d = doctorDetail;
  return (
    <PageShell>
      <section className="bg-mist py-14 lg:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="overflow-hidden rounded-2xl">
            <Image src={media.doctors[0].src} alt={media.doctors[0].alt} width={800} height={1000} className="w-full object-cover" />
          </div>
          <div>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Doctors", href: "/doctors-listing/" }, { name: d.name }]} />
            <p className="text-[11px] uppercase tracking-[0.18em] text-teal">{d.specialtyLine}</p>
            <h1 className="mt-3 text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold tracking-[-0.04em] text-forest">{d.name}</h1>
            <dl className="mt-8 grid gap-5 border-y border-line py-6 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-teal">Experience</dt>
                <dd className="mt-1 font-semibold">{d.experience}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-teal">Department</dt>
                <dd className="mt-1 font-semibold">{d.department}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-teal">Languages</dt>
                <dd className="mt-1 font-semibold">{d.languages}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.whatsapp}>{d.bookHeading}</Button>
              <Button href={site.whatsapp} variant="ghostDark" arrow={false}>
                {home.chatExpert}
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-14 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-forest">{d.overviewHeading}</h2>
            <p className="mt-4 leading-relaxed text-muted">{d.bio1}</p>
            <p className="mt-4 leading-relaxed text-muted">{d.bio2}</p>
            <p className="mt-4 leading-relaxed text-muted">{d.overview}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-forest">{d.educationHeading}</h2>
            <ul className="mt-4 space-y-2 text-muted">
              {d.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl font-semibold text-forest">{d.expertiseHeading}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {d.expertise.map((item) => (
                <li key={item} className="rounded-full bg-sage px-4 py-2 text-sm text-forest">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="bg-sage py-14 lg:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-forest">{d.journeyHeading}</h2>
          <ol className="mt-6 divide-y divide-forest/10 border-y border-forest/10">
            {d.journey.map((item, i) => (
              <li key={item.role + item.org} className="grid gap-2 py-5 md:grid-cols-[64px_1fr]">
                <p className="text-sm font-semibold text-teal">{String(i + 1).padStart(2, "0")}</p>
                <div>
                  <p className="font-semibold text-forest">{item.role}</p>
                  <p className="text-sm text-muted">
                    {item.org} {item.years}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <h2 className="mt-12 text-2xl font-semibold text-forest">{d.hospitalsHeading}</h2>
          <ul className="mt-4 space-y-2 text-muted">
            {d.hospitals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2 className="mt-12 text-2xl font-semibold text-forest">{d.membershipsHeading}</h2>
          <p className="mt-3 max-w-3xl text-muted">{d.memberships}</p>
          {d.department.toLowerCase().includes("orthop") ? (
            <p className="mt-10">
              <Link href="/orthopedics/" className="text-sm font-semibold text-teal">
                {home.learnMore}
              </Link>
            </p>
          ) : null}
          <p className="mt-8 max-w-3xl text-sm text-muted">{d.productExcerpt}</p>
          <p className="mt-6 text-sm text-muted">{d.instagramShortcode}</p>
        </Container>
      </section>
      <EnquiryBand body={home.enquirySpecialtyBody} consent={site.consentSpecialty} />
    </PageShell>
  );
}
