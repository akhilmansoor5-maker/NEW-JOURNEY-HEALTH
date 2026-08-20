import { FaqTemplate } from "@/components/templates/FaqTemplate";
import { faqPage } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta(faqPage.documentTitle, "/faq/", faqPage.h2);

export default function Page() {
  return <FaqTemplate />;
}
