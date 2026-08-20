import { featuredDoctors, listingDoctors } from "@/content/doctors";
import { listingHospitals } from "@/content/hospitals";
import { posts } from "@/content/blog";
import { home } from "@/content/home";
import { specialties, modernMedicine } from "@/content/treatments";

export type SearchHit = {
  kind: "Treatment" | "Doctor" | "Hospital" | "Blog";
  title: string;
  context: string;
  href: string;
};

export function searchSite(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const treatments: SearchHit[] = [];
  const doctors: SearchHit[] = [];
  const hospitals: SearchHit[] = [];
  const blog: SearchHit[] = [];

  home.treatmentCards.forEach((card) => {
    if (`${card.title} ${card.subtitle}`.toLowerCase().includes(q)) {
      treatments.push({
        kind: "Treatment",
        title: card.title,
        context: card.subtitle,
        href: card.href,
      });
    }
  });

  const mm = `${modernMedicine.heroTitle} ${modernMedicine.heroBody}`.toLowerCase();
  if (mm.includes(q) || "modern medicine".includes(q)) {
    treatments.push({
      kind: "Treatment",
      title: "Modern Medicine",
      context: modernMedicine.heroTitle,
      href: modernMedicine.path,
    });
  }

  specialties.forEach((s) => {
    const hay = `${s.heroTitle} ${s.slug} ${s.treatmentNames.join(" ")}`.toLowerCase();
    if (hay.includes(q)) {
      treatments.push({
        kind: "Treatment",
        title: s.documentTitle.replace(" – New Journey Health", ""),
        context: s.heroTitle,
        href: s.path,
      });
    }
    s.treatmentNames.forEach((n) => {
      if (n.toLowerCase().includes(q)) {
        treatments.push({
          kind: "Treatment",
          title: n,
          context: s.documentTitle.replace(" – New Journey Health", ""),
          href: s.path,
        });
      }
    });
  });

  featuredDoctors.forEach((d) => {
    if (`${d.name} ${d.specialty}`.toLowerCase().includes(q)) {
      doctors.push({
        kind: "Doctor",
        title: d.name,
        context: d.specialty,
        href: "/doctor-detail-page-template/",
      });
    }
  });

  listingDoctors.forEach((d) => {
    if (`${d.title} ${d.role} ${d.location}`.toLowerCase().includes(q)) {
      doctors.push({
        kind: "Doctor",
        title: d.title,
        context: `${d.role} · ${d.location}`,
        href: d.href,
      });
    }
  });

  listingHospitals.forEach((h) => {
    if (`${h.title} ${h.city}`.toLowerCase().includes(q)) {
      hospitals.push({
        kind: "Hospital",
        title: h.title,
        context: `${h.city} · ${h.stats}`,
        href: h.href,
      });
    }
  });

  posts.forEach((p) => {
    if ("unreachableAsPost" in p && p.unreachableAsPost) return;
    if (`${p.title} ${p.heading} ${p.category}`.toLowerCase().includes(q)) {
      blog.push({
        kind: "Blog",
        title: p.title,
        context: p.heading,
        href: p.path,
      });
    }
  });

  const seen = new Set<string>();
  return [...treatments, ...doctors, ...hospitals, ...blog]
    .filter((hit) => {
      const key = `${hit.kind}-${hit.href}-${hit.title}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 12);
}
