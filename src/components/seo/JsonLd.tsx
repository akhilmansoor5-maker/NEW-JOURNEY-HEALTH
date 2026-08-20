import { site } from "@/content/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.name,
    url: "https://newjourneyhealth.com/",
    description: site.footerIntro,
    telephone: "+91 95670 10169",
    email: "hello@newjourneyhealth.com",
    sameAs: [site.instagram, site.linkedin, site.youtube, site.x],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Door No 111/A, Perumpanachy P.O, Changanassery",
      addressLocality: "Kottayam",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://newjourneyhealth.com${item.path}`,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
