import { specialtyMetadata, SpecialtyRoute } from "@/lib/specialty";

export const generateMetadata = () => specialtyMetadata("cardiac");
export default function Page() {
  return <SpecialtyRoute slug="cardiac" />;
}
