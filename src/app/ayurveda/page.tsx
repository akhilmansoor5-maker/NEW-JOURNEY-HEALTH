import { BlogPostRoute, postMetadata } from "@/lib/blog";

export const generateMetadata = () => postMetadata("ayurveda");
export default function Page() {
  return <BlogPostRoute slug="ayurveda" />;
}
