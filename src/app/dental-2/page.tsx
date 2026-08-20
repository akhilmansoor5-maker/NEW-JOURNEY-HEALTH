import { specialtyMetadata, SpecialtyRoute } from "@/lib/specialty";

export const generateMetadata = () => specialtyMetadata("dental-2");
export default function Page() {
  return <SpecialtyRoute slug="dental-2" />;
}
