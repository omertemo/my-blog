"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Post } from "@/lib/posts";

interface BlogCardProps {
  post: Post;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const { lang, t } = useLanguage();
  const published = post.published;

  const cardContent = (
    <>
      {/* Cover emoji */}
      <div
        className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-bg3 to-bg4 text-4xl flex-shrink-0 ${
          featured ? "h-full w-44 min-h-40 text-5xl" : "h-24 w-full text-3xl"
        }`}
      >
        {post.emoji}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-md border px-1.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ${
              post.tagVariant === "purple"
                ? "border-accent2/15 bg-accent2/10 text-accent2"
                : "border-accent1/15 bg-accent1/10 text-accent1"
            }`}
          >
            {post.tag}
          </span>
          <span className="text-xs text-white/40">
            {published
              ? new Date(post.date).toLocaleDateString(
                  lang === "tr" ? "tr-TR" : "en-US",
                  { day: "numeric", month: "long", year: "numeric" },
                )
              : t("blog.comingSoon")}
          </span>
        </div>

        {/* Title */}
        <p
          className={`font-bold leading-snug text-white ${
            featured ? "text-xl" : "text-base"
          }`}
        >
          {post.title[lang]}
        </p>

        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-white/50">
          {post.desc[lang]}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/7 pt-3 text-xs text-white/40">
          <span>
            ⏱ {post.readTime} {t("blog.minRead")}
          </span>
          {published ? (
            <span className="font-semibold text-accent1 transition-all group-hover:gap-2">
              {t("blog.readMore")}
            </span>
          ) : (
            <span className="rounded-full border border-accent1/30 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-accent1/70">
              {t("blog.comingSoon")}
            </span>
          )}
        </div>
      </div>

      {/* Coming-soon overlay */}
      {!published && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-bg1/60 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
          <span className="rounded-full border border-accent1 bg-accent1/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent1">
            {t("blog.comingSoon")}
          </span>
        </div>
      )}
    </>
  );

  const baseClass = `group relative overflow-hidden rounded-2xl card-glass p-6 gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)] hover:border-accent1/20 h-full ${
    featured ? "flex flex-row items-start" : "flex flex-col"
  }`;

  if (published) {
    return (
      <Link href={`/blog/${post.slug}`} className={baseClass}>
        {cardContent}
      </Link>
    );
  }

  return <div className={baseClass}>{cardContent}</div>;
}
