"use client";

import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { posts } from "@/lib/posts";

export default function HomePage() {
  const { t } = useLanguage();
  const recent = posts.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Section divider */}
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 pb-8">
        <h2 className="whitespace-nowrap text-xl font-bold text-white">
          {t("blog.recent")}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        <Link
          href="/blog"
          className="whitespace-nowrap text-xs text-white/40 transition-colors hover:text-accent1"
        >
          {t("blog.viewAll")}
        </Link>
      </div>

      {/* Blog grid */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured post (spans 2 cols on lg) */}
          {recent[0] && (
            <div className="sm:col-span-2 h-full">
              <BlogCard post={recent[0]} featured />
            </div>
          )}
          {/* Post 2 */}
          {recent[1] && <BlogCard post={recent[1]} />}
          {/* Post 3 */}
          {recent[2] && <BlogCard post={recent[2]} />}
          {/* Post 4 */}
          {recent[3] && <BlogCard post={recent[3]} />}
        </div>
      </section>
    </>
  );
}
