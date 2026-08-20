import { BlogPostRoute, postMetadata } from "@/lib/blog";

export const generateMetadata = () => postMetadata("dentistry");
export default function Page() {
  return <BlogPostRoute slug="dentistry" />;
}
