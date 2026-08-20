import { specialtyMetadata, SpecialtyRoute } from "@/lib/specialty";

export const generateMetadata = () => specialtyMetadata("gynecology");
export default function Page() {
  return <SpecialtyRoute slug="gynecology" />;
}
