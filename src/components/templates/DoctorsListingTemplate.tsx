"use client";

import { doctorFilters, doctorsListingHeading } from "@/content/doctors";
import { site } from "@/content/site";
import { doctorFilterValues, filterDoctors } from "@/lib/directory";
import { useSearchParams } from "next/navigation";
import { DoctorCard } from "../cards/DoctorCard";
import { DirectoryFilters } from "../directory/DirectoryFilters";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Container } from "../ui/Container";
import { PageShell } from "../ui/PageShell";

const values = doctorFilterValues();
const allDepartments = doctorFilters.departments.find((l) => l.startsWith("All")) ?? "All Departments";
const allLocations = doctorFilters.locations.find((l) => l.startsWith("All")) ?? "All Locations";
const clearLabel = doctorFilters.conditions.find((l) => l.startsWith("All")) ?? "All Doctors";

export function DoctorsListingTemplate() {
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  const department = params.get("department") ?? "";
  const location = params.get("location") ?? "";
  const items = filterDoctors(q, department, location);

  return (
    <PageShell>
      <section className="bg-mist py-14 lg:py-20">
        <Container>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Doctors" }]} />
          <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-semibold tracking-[-0.03em] text-forest">
            {doctorsListingHeading}
          </h1>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[280px_1fr]">
            <DirectoryFilters
              resultCount={items.length}
              clearLabel={clearLabel}
              searchPlaceholder={site.searchPlaceholder}
              groups={[
                { key: "department", all: allDepartments, options: values.departments },
                { key: "location", all: allLocations, options: values.locations },
              ]}
            />
            <div>
              {items.length ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {items.map((d) => (
                    <DoctorCard
                      key={d.id}
                      name={d.title}
                      specialty={d.role}
                      location={d.location}
                      photo={d.photo}
                      href={d.href}
                    />
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
