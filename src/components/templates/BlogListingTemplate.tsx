"use client";

import { blogCategories, blogListingHeading, posts } from "@/content/blog";
import { useMemo, useState } from "react";
import { EnquiryBand } from "../forms/EnquiryBand";
import { BlogCard } from "../cards/BlogCard";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Container } from "../ui/Container";
import { PageShell } from "../ui/PageShell";

export function BlogListingTemplate({
  title = blogListingHeading,
  crumb = "Blog",
}: {
  title?: string;
  crumb?: string;
}) {
  const [cat, setCat] = useState("");
  const visible = useMemo(() => {
    const list = posts.filter((p) => !("unreachableAsPost" in p && p.unreachableAsPost));
    if (!cat) return list;
    return list.filter((p) => p.category.toUpperCase() === cat);
  }, [cat]);

  return (
    <PageShell>
      <section className="bg-white py-14 lg:py-20">
        <Container>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: crumb }]} />
          <h1 className="max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-semibold tracking-[-0.04em] text-forest">{title}</h1>
          <div className="mt-8 flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat((cur) => (cur === c ? "" : c))}
                className={`inline-flex min-h-11 items-center rounded-full px-4 text-[11px] font-semibold tracking-[0.14em] ${cat === c ? "bg-forest text-white" : "bg-sage text-forest"}`}
              >
                {c}
              </button>
            ))}
          </div>
          {visible.length ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((post) => (
                <BlogCard
                  key={post.slug}
                  href={post.path}
                  image={post.image}
                  title={post.title}
                  heading={post.heading}
                  category={post.category}
                  date={post.date}
                  author={post.author}
                />
              ))}
            </div>
          ) : null}
        </Container>
      </section>
      <EnquiryBand />
    </PageShell>
  );
}
