---
name: blog-writer
description: Helps draft, format, translate, and publish blog posts for the omertemo/my-blog website. Reviews and applies existing blog layout, design system (dark glassmorphism), and HTML prose styles, and ensures both Turkish and English language versions are completed.
---

# Blog Writer Skill for `omertemo/my-blog`

This skill defines the workflow, rules, and structures for drafting, formatting, and publishing blog posts on this Next.js TypeScript website.

---

## 1. Project Context & Design System

The blog uses a modern dark theme with cyan (`#67e8f9`) and indigo/purple (`#818cf8`) accents, featuring glassmorphism cards and Inter typography.

### Layout & Page Structure
Individual blog posts are rendered via `app/blog/[slug]/BlogPostClient.tsx` inside an `<article className="mx-auto max-w-2xl px-6 py-16">` tag:
- **Emoji Hero**: Displayed in a `h-20 w-20` gradient container (`bg-gradient-to-br from-bg3 to-bg4 text-5xl`).
- **Metadata**: Category tag (styled according to `tagVariant`), date, and read time.
- **Title**: Large bold header (`text-4xl font-extrabold`).
- **Content Wrapper**: Styled using the `.blog-prose` class inside a `dangerouslySetInnerHTML` container.

### Prose Styles (`blog-prose`)
All HTML tags in the post body must adhere to the styling defined in `app/globals.css`:
- **`<h2>`**: Main sections. Features a bottom border.
- **`<h3>`**: Subsections.
- **`<p>`**: Standard paragraph.
- **`<ul>` / `<ol>`**: Unordered or ordered list with custom cyan bullet markers.
- **`<code>`**: Inline code blocks. Styled with a cyan background highlight.
- **`<pre><code>`**: Multi-line syntax highlighted code blocks. Uses `JetBrains Mono` font on a dark background (`#0e1620`). Note: Any HTML characters inside code blocks (`<`, `>`, `&`) **MUST** be HTML-escaped (`&lt;`, `&gt;`, `&amp;`) to render correctly in `dangerouslySetInnerHTML`.
- **`<blockquote>`**: Emphasized blockquotes with a cyan left border.

---

## 2. Post Metadata Structure (`lib/posts.ts`)

Posts are defined statically inside `lib/posts.ts` in the `posts` array. Every post must follow the `Post` interface:

```typescript
export interface Post {
  slug: string;
  title: { tr: string; en: string };
  desc: { tr: string; en: string };
  tag: string;
  tagVariant?: "cyan" | "purple";
  emoji: string;
  readTime: number;
  date: string;
  published: boolean;
  content?: { tr: string; en: string };
}
```

### Constraints:
1. **Multilingual Support**: All fields (title, desc, content) **must** contain both `tr` (Turkish) and `en` (English) versions.
2. **Tag Variants**: Use `"cyan"` for technical/infrastructure posts (e.g., Kafka, Backend) and `"purple"` for personal/career/general posts.
3. **Drafting Policy**: Set `published: false` during drafting so it renders with the "Coming Soon / Yakında" card, and change to `published: true` when fully ready.

---

## 3. Workflow for Creating New Blog Posts

To maintain high quality and avoid editing large HTML strings directly inside `lib/posts.ts`, the agent should follow this workflow:

### Step 1: Draft in Markdown
Create separate draft files in a temporary drafts folder:
- `.agents/skills/blog_writer/drafts/[slug].tr.md` (Turkish Draft)
- `.agents/skills/blog_writer/drafts/[slug].en.md` (English Draft)

Include frontmatter in the draft describing the metadata:
```yaml
title: "Title Here"
desc: "Short description here"
tag: "Tag"
tagVariant: "cyan"
emoji: "🚀"
date: "YYYY-MM-DD"
published: false
```

### Step 2: Convert to HTML-Strings
Translate the markdown formatting into HTML:
- `#` / `##` -> `<h2>`
- `###` -> `<h3>`
- Paragraphs -> `<p>...</p>`
- Code blocks -> `<pre><code>...</code></pre>` (Be sure to escape `<` to `&lt;` and `>` to `&gt;`!)
- Inline code -> `<code>...</code>`

### Step 3: Populate `lib/posts.ts`
Append the new post object to the `posts` array in `lib/posts.ts`.

---

## 4. Writing & Tone Guidelines

- **First-Person & Authentic**: The blog reflects personal learning. Use "I/We" and share actual production stories (e.g., "At Istanbul Airport...").
- **Concrete Code Snippets**: Include fully functional code snippets rather than abstract pseudo-code.
- **Actionable Takeaways**: Always include sections on lessons learned, common pitfalls, and observability metrics.
- **Objective & No Hype**: Avoid promotional, marketing, or overly praising expressions for Claude or other AI models. Keep the tone realistic, factual, and developer-focused, discussing limitations or realistic utility rather than hype.
