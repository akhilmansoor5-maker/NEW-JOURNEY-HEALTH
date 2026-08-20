import { HipDetailTemplate } from "@/components/templates/HipDetailTemplate";
import { hipDetail } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta(hipDetail.documentTitle, "/orthopaedic-surgeries-detail-page/", hipDetail.heroBody);

export default function Page() {
  return <HipDetailTemplate />;
}
