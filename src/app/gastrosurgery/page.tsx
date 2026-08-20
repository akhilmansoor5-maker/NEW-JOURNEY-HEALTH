import { specialtyMetadata, SpecialtyRoute } from "@/lib/specialty";

export const generateMetadata = () => specialtyMetadata("gastrosurgery");
export default function Page() {
  return <SpecialtyRoute slug="gastrosurgery" />;
}
