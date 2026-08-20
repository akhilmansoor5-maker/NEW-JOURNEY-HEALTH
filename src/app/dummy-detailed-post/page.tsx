import { BlogPostRoute, postMetadata } from "@/lib/blog";

export const generateMetadata = () => postMetadata("dummy-detailed-post");
export default function Page() {
  return <BlogPostRoute slug="dummy-detailed-post" />;
}
