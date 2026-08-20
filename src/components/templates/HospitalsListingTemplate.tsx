"use client";

import { hospitalFilters, hospitalsListingHeading } from "@/content/hospitals";
import { site } from "@/content/site";
import { filterHospitals, hospitalFilterValues } from "@/lib/directory";
import { useSearchParams } from "next/navigation";
import { HospitalCard } from "../cards/HospitalCard";
import { DirectoryFilters } from "../directory/DirectoryFilters";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Container } from "../ui/Container";
import { PageShell } from "../ui/PageShell";

const values = hospitalFilterValues();
const allLocations = hospitalFilters.locations.find((l) => l.startsWith("All")) ?? "All Locations";
const clearLabel = hospitalFilters.conditions.find((l) => l.startsWith("All")) ?? "All Filters";

export function HospitalsListingTemplate() {
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  const location = params.get("location") ?? "";
  const items = filterHospitals(q, location);

  return (
    <PageShell>
      <section className="bg-mist py-14 lg:py-20">
        <Container>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Hospitals" }]} />
          <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-semibold tracking-[-0.03em] text-forest">
            {hospitalsListingHeading}
          </h1>
          <div className="mt-8">
            <DirectoryFilters
              resultCount={items.length}
              clearLabel={clearLabel}
              searchPlaceholder={site.searchPlaceholder}
              groups={[{ key: "location", all: allLocations, options: values.locations }]}
            />
            <div className="mt-8">
              {items.length ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((h) => (
                    <HospitalCard key={h.id} {...h} />
                  ))}
                </div>
              ) : (
                <p role="status" className="rounded-2xl bg-white px-6 py-16 text-center text-muted">
                  0
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
