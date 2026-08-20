import { ModernMedicineTemplate } from "@/components/templates/ModernMedicineTemplate";
import { modernMedicine } from "@/content/treatments";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta(modernMedicine.documentTitle, modernMedicine.path, modernMedicine.heroBody);

export default function Page() {
  return <ModernMedicineTemplate />;
}
