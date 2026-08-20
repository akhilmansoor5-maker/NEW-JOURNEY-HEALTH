import { PrivacyTemplate } from "@/components/templates/PrivacyTemplate";
import { legal } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta(legal.privacyTitle, "/privacy/", legal.privacyIntro);

export default function Page() {
  return <PrivacyTemplate />;
}
