import { specialtyMetadata, SpecialtyRoute } from "@/lib/specialty";

export const generateMetadata = () => specialtyMetadata("fertility");
export default function Page() {
  return <SpecialtyRoute slug="fertility" />;
}
