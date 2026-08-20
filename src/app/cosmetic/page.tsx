import { specialtyMetadata, SpecialtyRoute } from "@/lib/specialty";

export const generateMetadata = () => specialtyMetadata("cosmetic");
export default function Page() {
  return <SpecialtyRoute slug="cosmetic" />;
}
