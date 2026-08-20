import { getSpecialty } from "@/content/treatments";
import { SpecialtyTemplate } from "@/components/templates/SpecialtyTemplate";
import { pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";

export function specialtyMetadata(slug: string) {
  const page = getSpecialty(slug);
  if (!page) return {};
  return pageMeta(page.documentTitle, page.path, page.heroBody);
}

export function SpecialtyRoute({ slug }: { slug: string }) {
  const page = getSpecialty(slug);
  if (!page) notFound();
  return <SpecialtyTemplate page={page} />;
}
