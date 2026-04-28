"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { posts } from "@/lib/posts";

const allTags = ["Tümü / All", ...Array.from(new Set(posts.map((p) => p.tag)))];

export default function BlogPage() {
  const { t } = useLanguage();
  const [activeTag, setActiveTag] = useState("Tümü / All");

  const filtered =
    activeTag === "Tümü / All"
      ? posts
      : posts.filter((p) => p.tag === activeTag);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent1">
          Ömer ÇAYIR
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          {t("blog.pagetitle")}
        </h1>
      </div>

      {/* Tag filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTag === tag
                ? "bg-accent1/20 text-accent1 border border-accent1/30"
                : "border border-white/10 bg-white/[0.03] text-white/50 hover:text-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-sm text-white/40">{t("blog.empty")}</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
