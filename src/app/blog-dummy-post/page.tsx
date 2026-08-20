import { BlogPostRoute, postMetadata } from "@/lib/blog";

export const generateMetadata = () => postMetadata("blog-dummy-post");
export default function Page() {
  return <BlogPostRoute slug="blog-dummy-post" />;
}
