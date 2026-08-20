import { getPost } from "@/content/blog";
import { pageMeta } from "@/lib/seo";
import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";

export function postMetadata(slug: string) {
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta(`${post.title} – New Journey Health`, post.path, post.excerpt);
}

export function BlogPostRoute({ slug }: { slug: string }) {
  return <BlogPostTemplate slug={slug} />;
}
