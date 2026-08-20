import { home } from "@/content/home";
import { site } from "@/content/site";
import { EnquiryForm } from "../forms/EnquiryForm";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function EnquiryBand({
  body = home.enquiryHomeBody,
  consent = site.consentHome,
  stillQuery = false,
}: {
  body?: string;
  consent?: string;
  stillQuery?: boolean;
}) {
  return (
    <section id="enquiry" className="bg-forest py-14 text-white lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-2">
        <div>
          {stillQuery ? <p className="text-lime">{home.stillQuery}</p> : null}
          <h2 className="mt-2 max-w-lg text-[clamp(1.7rem,3vw,2.6rem)] font-semibold tracking-[-0.03em]">
            {home.enquiryHeading}
          </h2>
          <p className="mt-4 max-w-md text-white/70">{body}</p>
          <Button href={site.whatsapp} variant="ghost" arrow={false} className="mt-6">
            {home.chatExpert}
          </Button>
        </div>
        <EnquiryForm consent={consent} dark />
      </Container>
    </section>
  );
}
