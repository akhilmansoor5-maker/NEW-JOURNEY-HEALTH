import { specialtyMetadata, SpecialtyRoute } from "@/lib/specialty";

export const generateMetadata = () => specialtyMetadata("oncology");
export default function Page() {
  return <SpecialtyRoute slug="oncology" />;
}
