import { faqPage } from "@/content/pages";
import { EnquiryBand } from "../forms/EnquiryBand";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Container } from "../ui/Container";
import { PageShell } from "../ui/PageShell";
import { FaqGroups } from "../sections/FaqGroups";

export function FaqTemplate() {
  return (
    <PageShell>
      <section className="bg-sage py-16 lg:py-24">
        <Container>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
          <FaqGroups heading={faqPage.h2} />
        </Container>
      </section>
      <EnquiryBand stillQuery />
    </PageShell>
  );
}
