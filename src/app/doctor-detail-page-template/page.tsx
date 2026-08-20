import { DoctorDetailTemplate } from "@/components/templates/DoctorDetailTemplate";
import { doctorDetail } from "@/content/doctors";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta(doctorDetail.documentTitle, "/doctor-detail-page-template/", doctorDetail.overview);

export default function Page() {
  return <DoctorDetailTemplate />;
}
