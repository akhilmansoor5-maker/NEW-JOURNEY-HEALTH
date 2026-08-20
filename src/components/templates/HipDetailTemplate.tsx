import { hipDetail } from "@/content/pages";
import { home } from "@/content/home";
import { media } from "@/lib/media";
import { site } from "@/content/site";
import Image from "next/image";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { EnquiryForm } from "../forms/EnquiryForm";
import { SectionHeading } from "../ui/SectionHeading";

export function HipDetailTemplate() {
  const p = hipDetail;
  return (
    <article>
      <section className="relative isolate min-h-[78vh] overflow-hidden pt-24">
        <Image src={media.modernMedicine} alt="" fill priority className="object-cover object-[center_26%]" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,56,62,0.88)_0%,rgba(11,56,62,0.42)_52%,rgba(11,56,62,0.12)_100%)]" />
        <Container className="relative flex min-h-[78vh] flex-col justify-end pb-16 pt-28">
          <Breadcrumbs light items={[{ name: "Home", href: "/" }, { name: "Orthopedics", href: "/orthopedics/" }, { name: p.heroTitle }]} />
          <h1 className="max-w-4xl text-[clamp(2rem,5vw,3.8rem)] font-semibold tracking-[-0.04em] text-white">{p.heroTitle}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{p.heroBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#enquiry">{p.bookFree}</Button>
            <Button href={site.whatsapp} variant="ghost">
              {p.chat}
            </Button>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <SectionHeading title={p.whyHeading} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.whyCards.map((card, i) => (
              <article key={`${card.title}-${i}`} className="rounded-2xl bg-mist p-6">
                <h3 className="font-bold text-forest">{card.title}</h3>
                <p className="mt-2 text-sm text-muted">{card.body}</p>
              </article>
            ))}
          </div>
          <Button href="#" variant="ghostDark" className="mt-8">
            {p.brochure}
          </Button>
        </Container>
      </section>
      <section className="bg-sage py-20">
        <Container>
          <SectionHeading title={p.whoHeading} subtitle={p.whoIntro} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {p.whoItems.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6">
                <h3 className="font-bold text-forest">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl leading-relaxed text-muted">{p.explainer}</p>
          <Button href="#enquiry" className="mt-8">
            {p.enquireMore}
          </Button>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <SectionHeading title={p.expectHeading} subtitle={p.expectIntro} />
          <h3 className="mt-10 text-2xl font-bold text-forest">{p.beforeHeading}</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {p.beforeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
