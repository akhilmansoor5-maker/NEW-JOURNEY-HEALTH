import { ComingSoonTemplate } from "@/components/templates/ComingSoonTemplate";
import { legal } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta("Terms and Conditions – New Journey Health", "/terms/", legal.comingSoonBody);

export default function Page() {
  return <ComingSoonTemplate crumb="Terms & Conditions" />;
}
