import { home } from "@/content/home";
import { parsePounds } from "@/lib/ui";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function CostComparison() {
  const max = Math.max(...home.prices.flatMap((row) => [parsePounds(row.uk), parsePounds(row.us), parsePounds(row.india)]));

  return (
    <section className="bg-forest-deep py-14 text-white lg:py-20">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">{home.costHeading}</p>
          <h2 className="mt-4 max-w-[16ch] text-[clamp(1.9rem,3.8vw,3.2rem)] font-semibold leading-[1.12] tracking-[-0.04em]">
            {home.costLine1} {home.costLine2}
          </h2>
        </Reveal>
        <Reveal>
          <div className="hidden md:block">
            <div className="grid grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr] gap-3 border-b border-white/15 pb-3 text-[11px] uppercase tracking-[0.14em] text-white/50">
              {home.costColumns.map((c) => (
                <p key={c}>{c}</p>
              ))}
            </div>
            <div className="divide-y divide-white/10">
              {home.prices.map((row) => (
                <div key={row.treatment} className="grid grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr] items-center gap-3 py-5">
                  <p className="text-sm">{row.treatment}</p>
                  <PriceCell value={row.uk} max={max} muted />
                  <PriceCell value={row.us} max={max} muted />
                  <PriceCell value={row.india} max={max} accent />
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:hidden">
            {home.prices.map((row) => (
              <article key={row.treatment} className="rounded-2xl bg-white/5 p-5">
                <h3 className="font-semibold">{row.treatment}</h3>
                <dl className="mt-4 space-y-3">
                  <MobileRow label={home.costColumns[1]} value={row.uk} max={max} />
                  <MobileRow label={home.costColumns[2]} value={row.us} max={max} />
                  <MobileRow label={home.costColumns[3]} value={row.india} max={max} accent />
                </dl>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function PriceCell({ value, max, accent }: { value: string; max: number; muted?: boolean; accent?: boolean }) {
  const width = `${Math.max(18, (parsePounds(value) / max) * 100)}%`;
  return (
    <div>
      <p className={accent ? "font-semibold text-lime" : "text-white/70"}>{value}</p>
      <div className="mt-2 h-[3px] bg-white/10">
        <div className={accent ? "h-full bg-lime" : "h-full bg-white/25"} style={{ width }} />
      </div>
    </div>
  );
}

function MobileRow({
  label,
  value,
  max,
  accent,
}: {
  label: string;
  value: string;
  max: number;
  accent?: boolean;
}) {
  const width = `${Math.max(18, (parsePounds(value) / max) * 100)}%`;
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <dt className={accent ? "text-lime" : "text-white/50"}>{label}</dt>
        <dd className={accent ? "font-bold text-lime" : ""}>{value}</dd>
      </div>
      <div className="mt-2 h-[3px] bg-white/10">
        <div className={accent ? "h-full bg-lime" : "h-full bg-white/25"} style={{ width }} />
      </div>
    </div>
  );
}
