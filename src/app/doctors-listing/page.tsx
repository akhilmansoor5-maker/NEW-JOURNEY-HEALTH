import { DoctorsListingTemplate } from "@/components/templates/DoctorsListingTemplate";
import { EnquiryBand } from "@/components/forms/EnquiryBand";
import { doctorsListingHeading } from "@/content/doctors";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = pageMeta("Doctors Listing – New Journey Health", "/doctors-listing/", doctorsListingHeading);

export default function Page() {
  return (
    <>
      <Suspense>
        <DoctorsListingTemplate />
      </Suspense>
      <EnquiryBand />
    </>
  );
}
