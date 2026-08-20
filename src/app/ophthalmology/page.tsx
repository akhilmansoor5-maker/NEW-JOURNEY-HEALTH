import { specialtyMetadata, SpecialtyRoute } from "@/lib/specialty";

export const generateMetadata = () => specialtyMetadata("ophthalmology");
export default function Page() {
  return <SpecialtyRoute slug="ophthalmology" />;
}
