import { HospitalsListingTemplate } from "@/components/templates/HospitalsListingTemplate";
import { EnquiryBand } from "@/components/forms/EnquiryBand";
import { hospitalsListingHeading } from "@/content/hospitals";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = pageMeta("Hospitals – New Journey Health", "/hospitals/", hospitalsListingHeading);

export default function Page() {
  return (
    <>
      <Suspense>
        <HospitalsListingTemplate />
      </Suspense>
      <EnquiryBand />
    </>
  );
}
