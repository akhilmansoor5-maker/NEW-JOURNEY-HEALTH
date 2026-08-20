import { legal } from "@/content/pages";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Container } from "../ui/Container";
import { PageShell } from "../ui/PageShell";

export function ComingSoonTemplate({ crumb }: { crumb: string }) {
  return (
    <PageShell>
      <section className="flex min-h-[78vh] items-center bg-sage py-24">
        <Container className="max-w-3xl">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: crumb }]} />
          <h1 className="text-[clamp(2.4rem,7vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-forest">
            {legal.comingSoonTitle}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">{legal.comingSoonBody}</p>
        </Container>
      </section>
    </PageShell>
  );
}
