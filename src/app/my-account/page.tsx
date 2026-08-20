import { ComingSoonTemplate } from "@/components/templates/ComingSoonTemplate";
import { legal } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta("My account – New Journey Health", "/my-account/", legal.comingSoonBody);

export default function Page() {
  return <ComingSoonTemplate crumb="My account" />;
}
