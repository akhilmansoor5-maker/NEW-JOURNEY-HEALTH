import { specialtyMetadata, SpecialtyRoute } from "@/lib/specialty";

export const generateMetadata = () => specialtyMetadata("ayurveda-2");
export default function Page() {
  return <SpecialtyRoute slug="ayurveda-2" />;
}
