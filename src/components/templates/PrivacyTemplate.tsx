import { legal } from "@/content/pages";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Container } from "../ui/Container";
import { PageShell } from "../ui/PageShell";

export function PrivacyTemplate() {
  return (
    <PageShell>
      <section className="py-16 lg:py-24">
        <Container className="max-w-3xl">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />
          <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-semibold tracking-[-0.03em] text-forest">{legal.privacyH2}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{legal.privacyIntro}</p>
          <div className="mt-10 space-y-8">
            {legal.privacySections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold text-forest">{section.heading}</h2>
                <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
                {"bullets" in section && section.bullets ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
