import { contactPage, faqPage } from "@/content/pages";
import { home } from "@/content/home";
import { site } from "@/content/site";
import Link from "next/link";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { EnquiryForm } from "../forms/EnquiryForm";

function lineHref(line: string) {
  if (line.includes("@")) return `mailto:${line}`;
  if (line.replace(/\s/g, "").match(/^\+?\d/)) return `tel:${line.replace(/\s+/g, "")}`;
  return undefined;
}

export function ContactTemplate() {
  const blocks = [site.contactBlocks.officeAddress, site.contactBlocks.email, site.contactBlocks.phone];

  return (
    <article>
      <section className="bg-forest pt-28 pb-16 text-white lg:pt-36 lg:pb-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <Breadcrumbs light items={[{ name: "Home", href: "/" }, { name: "Contact Us" }]} />
            <h1 className="mt-6 max-w-[10ch] text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
              {contactPage.h2}
            </h1>
            <p className="mt-5 max-w-md text-lg text-white/75">{home.enquiryHomeBody}</p>
            <dl className="mt-10 space-y-6">
              {blocks.map((block) => (
                <div key={block.heading} className="border-t border-white/15 pt-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lime">{block.heading}</dt>
                  <dd className="mt-2 text-sm text-white/80">
                    {lineHref(block.value) ? (
                      <a href={lineHref(block.value)} className="hover:text-white">
                        {block.value}
                      </a>
                    ) : (
                      block.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
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
          <div id="enquiry" className="rounded-2xl bg-white p-6 text-forest shadow-media md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">{home.stillQuery}</p>
            <h2 className="mt-2 text-2xl font-semibold">{home.enquiryHeading}</h2>
            <div className="mt-6">
              <EnquiryForm consent={site.consentHome} />
            </div>
            <Button href={site.whatsapp} variant="ghostDark" arrow={false} className="mt-4 w-full">
              {home.chatExpert}
            </Button>
          </div>
        </Container>
      </section>
      <section className="bg-sage py-14 lg:py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {site.offices.map((office) => (
              <article key={office.heading} className="rounded-2xl bg-white p-6">
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
          <div className="mt-12 border-t border-forest/10 pt-8">
            <h2 className="text-2xl font-semibold text-forest">{faqPage.h2}</h2>
            <Link href="/faq/" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-teal">
              {home.learnMore}
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
