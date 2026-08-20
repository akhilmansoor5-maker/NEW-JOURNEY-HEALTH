import { HomePage } from "@/components/sections/HomePage";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta(site.documentTitle, "/", site.tagline);

export default function Page() {
  return <HomePage />;
}
