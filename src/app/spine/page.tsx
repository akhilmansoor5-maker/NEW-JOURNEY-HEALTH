import { specialtyMetadata, SpecialtyRoute } from "@/lib/specialty";

export const generateMetadata = () => specialtyMetadata("spine");
export default function Page() {
  return <SpecialtyRoute slug="spine" />;
}
