import { contactPage } from "@/content/pages";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { media } from "@/lib/media";
import Image from "next/image";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { EnquiryForm } from "../forms/EnquiryForm";
import { PageShell } from "../ui/PageShell";

function lineHref(line: string) {
  if (line.includes("@")) return `mailto:${line}`;
  if (line.replace(/\s/g, "").match(/^\+?\d/)) return `tel:${line.replace(/\s+/g, "")}`;
  return undefined;
}

export function ContactTemplate() {
  const blocks = [site.contactBlocks.officeAddress, site.contactBlocks.email, site.contactBlocks.phone];

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-sage py-14 lg:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact Us" }]} />
            <h1 className="mt-6 max-w-[10ch] text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-forest">
              {contactPage.h2}
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">{home.enquiryHomeBody}</p>
          </div>
          <div className="relative min-h-[240px] overflow-hidden rounded-2xl lg:min-h-[320px]">
            <Image src={media.wellness} alt="" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
        </Container>
      </section>
      <section className="bg-mist py-14 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {blocks.map((block) => (
              <article key={block.heading} className="rounded-2xl bg-white p-6">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">{block.heading}</h2>
                <p className="mt-3 text-forest">
                  {lineHref(block.value) ? (
                    <a href={lineHref(block.value)} className="hover:text-teal">
                      {block.value}
                    </a>
                  ) : (
                    block.value
                  )}
                </p>
              </article>
            ))}
            <div className="flex flex-wrap gap-x-5 gap-y-2 px-1 text-sm text-muted">
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
          </div>
          <div id="enquiry" className="rounded-2xl bg-white p-6 shadow-soft md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">{home.stillQuery}</p>
            <h2 className="mt-2 text-2xl font-semibold text-forest">{home.enquiryHeading}</h2>
            <div className="mt-6">
              <EnquiryForm consent={site.consentHome} />
            </div>
            <Button href={site.whatsapp} variant="ghostDark" arrow={false} className="mt-4 w-full">
              {home.chatExpert}
            </Button>
          </div>
        </Container>
      </section>
      <section className="bg-white py-14 lg:py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {site.offices.map((office) => (
              <article key={office.heading} className="rounded-2xl bg-mist p-6">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">{office.heading}</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {office.lines.map((line) => {
                    const href = lineHref(line);
                    return (
                      <li key={line}>
                        {href ? (
                          <a href={href} className="text-forest hover:text-teal">
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
