import { BlogListingTemplate } from "@/components/templates/BlogListingTemplate";
import { legal } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta(legal.commingSoonPageTitle, "/comming-soon/");

export default function Page() {
  return <BlogListingTemplate title="Comming Soon" crumb="Comming Soon" />;
}
