"use client";

import { useState, useEffect, useMemo } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPostBySlug } from "@/lib/posts";

interface Props {
  slug: string;
}

const getShortTitle = (title: string, lang: "tr" | "en") => {
  const t = title.toLowerCase();
  if (t.includes("giriş") || t.includes("introduction")) {
    return lang === "tr" ? "Giriş" : "Intro";
  }
  if (t.includes("akıcılığı") || t.includes("fluency")) {
    return lang === "tr" ? "AI Akıcılığı" : "AI Fluency";
  }
  if (t.includes("masaüstü") || t.includes("desktop")) {
    return lang === "tr" ? "Masaüstü" : "Desktop";
  }
  if (t.includes("projeler") || t.includes("projects")) {
    return lang === "tr" ? "Projeler & Artifacts" : "Projects & Artifacts";
  }
  if (t.includes("gelişmiş") || t.includes("advanced")) {
    return lang === "tr" ? "Gelişmiş" : "Advanced";
  }
  return title.split(":")[0];
};

export default function BlogPostClient({ slug }: Props) {
  const { lang, t } = useLanguage();
  const post = getPostBySlug(slug);

  const [showDraft, setShowDraft] = useState(process.env.NODE_ENV === "development");
  const [activeSection, setActiveSection] = useState(0);

  // Parse HTML content into sections by <h2> tags
  const sections = useMemo(() => {
    const rawHtml = post?.content ? post.content[lang] : "";
    if (!rawHtml) return [];

    const parts = rawHtml.split(/(?=<h2>)/);
    const result: {
      title: string;
      html: string;
      subsections: { id: string; title: string }[];
    }[] = [];

    let introHtml = "";
    let partIndexOffset = 0;

    parts.forEach((part, index) => {
      const trimmed = part.trim();
      if (!trimmed) return;

      const h2Match = part.match(/<h2>(.*?)<\/h2>/);
      if (!h2Match) {
        introHtml = part;
        partIndexOffset = 1;
        return;
      }

      const title = h2Match[1].replace(/<[^>]*>/g, "");
      let cleanPart = introHtml ? introHtml + part : part;
      introHtml = ""; // only prepend once

      let subIdx = 0;
      const subsections: { id: string; title: string }[] = [];

      cleanPart = cleanPart.replace(/<h3>(.*?)<\/h3>/g, (match, h3Content) => {
        const cleanTitle = h3Content.replace(/<[^>]*>/g, "");
        const id = `sec-${index - partIndexOffset}-sub-${subIdx++}`;
        subsections.push({ id, title: cleanTitle });
        return `<h3 id="${id}">${h3Content}</h3>`;
      });

      result.push({
        title,
        html: cleanPart,
        subsections,
      });
    });

    return result;
  }, [post?.content, lang]);

  // Load and sync active page with query param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = parseInt(params.get("p") || "0", 10);
    if (p >= 0 && p < sections.length) {
      setActiveSection(p);
    }
  }, [sections.length]);

  const handlePageChange = (index: number) => {
    setActiveSection(index);
    const url = new URL(window.location.href);
    url.searchParams.set("p", index.toString());
    window.history.pushState({}, "", url.toString());

    // Scroll back to top of the article smoothly
    const article = document.querySelector("article");
    if (article) {
      article.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("preview") === "true") {
        setShowDraft(true);
      }
    }
  }, []);

  if (!post) notFound();

  if (!post.published && !showDraft) {
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

  const isMultiPage = sections.length > 1;

  return (
    <article className={`mx-auto px-6 py-16 ${isMultiPage ? "max-w-5xl" : "max-w-2xl"}`}>
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
      <h1 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-white">
        {post.title[lang]}
      </h1>

      {isMultiPage && (
        /* Stepper/Progress navigation at the top */
        <div className="mb-8 border-b border-white/10 pb-6 overflow-x-auto scrollbar-none">
          <div className="flex flex-nowrap md:flex-wrap gap-2">
            {sections.map((sec, idx) => {
              const isActive = idx === activeSection;
              return (
                <button
                  key={idx}
                  onClick={() => handlePageChange(idx)}
                  className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-semibold transition border ${
                    isActive
                      ? "bg-accent1/10 text-accent1 border-accent1/30"
                      : "text-white/40 border-transparent hover:bg-white/5 hover:text-white/80"
                  }`}
                >
                  {idx + 1}. {getShortTitle(sec.title, lang)}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {isMultiPage ? (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 items-start">
          {/* Content Column */}
          <div className="w-full">
            <div
              className="blog-prose max-w-2xl"
              dangerouslySetInnerHTML={{ __html: sections[activeSection].html }}
            />

            {/* Stepper Navigation Buttons */}
            <div className="mt-12 flex justify-between border-t border-white/10 pt-8 max-w-2xl">
              {activeSection > 0 ? (
                <button
                  onClick={() => handlePageChange(activeSection - 1)}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  ← {getShortTitle(sections[activeSection - 1].title, lang)}
                </button>
              ) : (
                <div />
              )}
              {activeSection < sections.length - 1 ? (
                <button
                  onClick={() => handlePageChange(activeSection + 1)}
                  className="inline-flex items-center gap-2 rounded-xl border border-accent1/20 bg-accent1/10 px-4 py-2.5 text-sm font-semibold text-accent1 transition hover:bg-accent1/25 hover:text-white"
                >
                  {getShortTitle(sections[activeSection + 1].title, lang)} →
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>

          {/* Table of Contents Sidebar */}
          {sections[activeSection].subsections.length > 0 && (
            <aside className="hidden lg:block sticky top-24 self-start rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white/40">
                {lang === "tr" ? "BU BÖLÜMDEKİ KONULAR" : "IN THIS SECTION"}
              </h4>
              <ul className="space-y-3">
                {sections[activeSection].subsections.map((sub) => (
                  <li key={sub.id}>
                    <a
                      href={`#${sub.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(sub.id);
                        if (element) {
                          const offset = 80;
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = element.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - offset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                        }
                      }}
                      className="block text-sm text-white/40 transition hover:text-accent1"
                    >
                      {sub.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      ) : (
        /* Normal render for single page posts */
        post.content ? (
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: post.content[lang] }}
          />
        ) : (
          <p className="text-white/50">{post.desc[lang]}</p>
        )
      )}
    </article>
  );
}
