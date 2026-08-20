import { ContactTemplate } from "@/components/templates/ContactTemplate";
import { contactPage } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta(contactPage.documentTitle, "/contact-us/");

export default function Page() {
  return <ContactTemplate />;
}
