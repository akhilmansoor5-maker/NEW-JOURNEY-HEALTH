import { BlogPostRoute, postMetadata } from "@/lib/blog";

export const generateMetadata = () => postMetadata("dummy-blog-heading");
export default function Page() {
  return <BlogPostRoute slug="dummy-blog-heading" />;
}
