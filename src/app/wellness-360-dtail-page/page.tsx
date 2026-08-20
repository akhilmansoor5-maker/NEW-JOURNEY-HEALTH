import { Wellness360Template } from "@/components/templates/Wellness360Template";
import { wellness360 } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta(wellness360.documentTitle, "/wellness-360-dtail-page/", wellness360.heroBody);

export default function Page() {
  return <Wellness360Template />;
}
