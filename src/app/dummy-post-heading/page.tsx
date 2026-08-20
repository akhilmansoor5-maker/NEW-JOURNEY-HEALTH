import { BlogPostRoute, postMetadata } from "@/lib/blog";

export const generateMetadata = () => postMetadata("dummy-post-heading");
export default function Page() {
  return <BlogPostRoute slug="dummy-post-heading" />;
}
