import { AboutTemplate } from "@/components/templates/AboutTemplate";
import { about } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta(about.documentTitle, "/about-us/", about.p1);

export default function Page() {
  return <AboutTemplate />;
}
