import { ComingSoonTemplate } from "@/components/templates/ComingSoonTemplate";
import { legal } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta("Shop – New Journey Health", "/shop/", legal.comingSoonBody);

export default function Page() {
  return <ComingSoonTemplate crumb="Shop" />;
}
