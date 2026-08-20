import { HospitalDetailTemplate } from "@/components/templates/HospitalDetailTemplate";
import { hospitalDetail } from "@/content/hospitals";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta(hospitalDetail.documentTitle, "/hospital-detail-page-template/", hospitalDetail.about);

export default function Page() {
  return <HospitalDetailTemplate />;
}
