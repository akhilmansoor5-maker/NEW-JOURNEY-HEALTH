import { modernMedicine } from "@/content/treatments";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { media } from "@/lib/media";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { EnquiryForm } from "../forms/EnquiryForm";
import { SectionHeading } from "../ui/SectionHeading";

export function ModernMedicineTemplate() {
  return (
    <article>
      <section className="relative isolate min-h-[78vh] overflow-hidden pt-24">
        <Image src={media.modernMedicine} alt="" fill priority className="object-cover object-[center_26%]" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,56,62,0.88)_0%,rgba(11,56,62,0.4)_48%,rgba(11,56,62,0.1)_100%)]" />
        <Container className="relative flex min-h-[78vh] flex-col justify-end pb-16 pt-28">
          <Breadcrumbs light items={[{ name: "Home", href: "/" }, { name: "Modern Medicine" }]} />
          <h1 className="max-w-[16ch] text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
            {modernMedicine.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{modernMedicine.heroBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#enquiry">{home.bookConsultation}</Button>
            <Button href={site.whatsapp} variant="ghost" arrow={false}>
              {home.chatExpert}
            </Button>
          </div>
        </Container>
      </section>
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading title={modernMedicine.specialtiesHeading} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {modernMedicine.specialties.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                className="group grid overflow-hidden rounded-2xl border border-line bg-white transition duration-200 hover:-translate-y-0.5 md:grid-cols-[0.85fr_1.15fr]"
              >
                <div className="relative min-h-44 overflow-hidden">
                  <Image
                    src={i % 2 === 0 ? media.modernMedicine : media.heroPortrait}
                    alt={item.name}
                    fill
                    className="object-cover object-[center_26%] transition duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-forest">{item.name}</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                    {item.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-lime">{home.learnMore}</p>
                </div>
              </Link>
            ))}
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
