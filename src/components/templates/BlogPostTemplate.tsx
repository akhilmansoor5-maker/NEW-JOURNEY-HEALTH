import { getPost, posts } from "@/content/blog";
import { home } from "@/content/home";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { EnquiryBand } from "../forms/EnquiryBand";
import { BlogCard } from "../cards/BlogCard";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Container } from "../ui/Container";

const categoryTreatments: Record<string, string> = {
  Ayurveda: "/ayurveda-2/",
  Dentistry: "/dental-2/",
  Orthopedics: "/orthopedics/",
};

export function BlogPostTemplate({ slug }: { slug: string }) {
  const post = getPost(slug);
  if (!post || post.unreachableAsPost) notFound();
  const treatmentHref = categoryTreatments[post.category];
  const related = posts
    .filter((p) => p.slug !== post.slug && !("unreachableAsPost" in p && p.unreachableAsPost) && p.category && p.category === post.category)
    .slice(0, 2);

  return (
    <article>
      <div className="relative h-[56vh] min-h-[340px] overflow-hidden">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest/25 to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-10 pt-28">
          <Breadcrumbs light items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog/" }, { name: post.title }]} />
          <p className="text-[11px] uppercase tracking-[0.16em] text-lime">
            {post.category} {post.date} {post.author}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-5xl">{post.title}</h1>
        </Container>
      </div>
      <Container className="py-14 lg:py-20">
        <h2 className="max-w-3xl text-2xl font-semibold leading-snug text-forest md:text-3xl">{post.heading}</h2>
        <div className="mt-8 max-w-3xl space-y-5 text-[17px] leading-[1.75] text-muted">
          {post.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">Share This</p>
          {treatmentHref ? (
            <Link href={treatmentHref} className="min-h-11 inline-flex items-center text-sm font-semibold text-teal">
              {home.learnMore}
            </Link>
          ) : null}
        </div>
        {related.length ? (
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {related.map((p) => (
              <BlogCard
                key={p.slug}
                href={p.path}
                image={p.image}
                title={p.title}
                heading={p.heading}
                category={p.category}
                date={p.date}
                author={p.author}
              />
            ))}
          </div>
        ) : null}
      </Container>
      <EnquiryBand />
    </article>
  );
}
