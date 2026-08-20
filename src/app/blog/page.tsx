import { BlogListingTemplate } from "@/components/templates/BlogListingTemplate";
import { blogListingHeading } from "@/content/blog";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta("Blog – New Journey Health", "/blog/", blogListingHeading);

export default function Page() {
  return <BlogListingTemplate />;
}
