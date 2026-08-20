import { PageShell } from "@/components/ui/PageShell";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageShell>
      <section className="flex min-h-[60vh] items-center py-24">
        <Container className="text-center">
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-forest">Page not found</h1>
          <p className="mt-4 text-muted">The page you requested does not exist on this website.</p>
          <Button href="/" className="mt-8">
            Home
          </Button>
        </Container>
      </section>
    </PageShell>
  );
}
