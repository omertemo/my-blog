"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPostBySlug } from "@/lib/posts";

interface Props {
  params: { slug: string };
}

export default function BlogPostPage({ params }: Props) {
  const { lang, t } = useLanguage();
  const post = getPostBySlug(params.slug);

  if (!post) notFound();

  if (!post.published) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center">
        <div className="mb-6 text-6xl">{post.emoji}</div>
        <h1 className="mb-4 text-3xl font-extrabold text-white">
          {post.title[lang]}
        </h1>
        <p className="mb-8 text-sm text-white/50">{post.desc[lang]}</p>
        <div className="mb-8 rounded-full border border-accent1/30 bg-accent1/10 px-6 py-2 text-sm font-bold uppercase tracking-widest text-accent1">
          {t("blog.comingSoon")}
        </div>
        <Link
          href="/blog"
          className="text-sm text-white/40 transition-colors hover:text-accent1"
        >
          {t("blog.backToList")}
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      {/* Back */}
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-accent1"
      >
        ← {t("blog.backToList")}
      </Link>

      {/* Emoji hero */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-bg3 to-bg4 text-5xl">
        {post.emoji}
      </div>

      {/* Meta */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span
          className={`rounded-md border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ${
            post.tagVariant === "purple"
              ? "border-accent2/15 bg-accent2/10 text-accent2"
              : "border-accent1/15 bg-accent1/10 text-accent1"
          }`}
        >
          {post.tag}
        </span>
        <span className="text-xs text-white/40">
          {new Date(post.date).toLocaleDateString(
            lang === "tr" ? "tr-TR" : "en-US",
            { day: "numeric", month: "long", year: "numeric" },
          )}
        </span>
        <span className="text-xs text-white/40">
          ⏱ {post.readTime} {t("blog.minRead")}
        </span>
      </div>

      {/* Title */}
      <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white">
        {post.title[lang]}
      </h1>

      {/* Content */}
      {post.content ? (
        <div
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: post.content[lang] }}
        />
      ) : (
        <p className="text-white/50">{post.desc[lang]}</p>
      )}
    </article>
  );
}
