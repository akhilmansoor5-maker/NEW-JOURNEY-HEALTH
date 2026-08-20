import { specialtyMetadata, SpecialtyRoute } from "@/lib/specialty";

export const generateMetadata = () => specialtyMetadata("urology");
export default function Page() {
  return <SpecialtyRoute slug="urology" />;
}
