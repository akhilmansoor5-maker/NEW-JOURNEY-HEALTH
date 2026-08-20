import { ComingSoonTemplate } from "@/components/templates/ComingSoonTemplate";
import { legal } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta("Checkout – New Journey Health", "/checkout/", legal.comingSoonBody);

export default function Page() {
  return <ComingSoonTemplate crumb="Checkout" />;
}
