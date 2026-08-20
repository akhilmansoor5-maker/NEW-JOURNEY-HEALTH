import { specialtyMetadata, SpecialtyRoute } from "@/lib/specialty";

export const generateMetadata = () => specialtyMetadata("orthopedics");
export default function Page() {
  return <SpecialtyRoute slug="orthopedics" />;
}
