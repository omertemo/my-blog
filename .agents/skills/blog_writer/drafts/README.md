# Blog Post Drafts Directory

Place your Markdown draft files here using the naming convention:
- `[slug].tr.md` for Turkish drafts
- `[slug].en.md` for English drafts

## Markdown Frontmatter Format

Each draft file must start with YAML-like frontmatter:

```yaml
---
title: "Draft Post Title"
desc: "Short description of the post for lists and SEO cards."
tag: "Tag (e.g. Kafka, Airflow, Python)"
tagVariant: "cyan" # "cyan" for technical, "purple" for personal
emoji: "🚀"
date: "2026-06-20"
published: false # set true when you want it to appear live
---
```

## Compilation

After drafting both files, run the compile script from the workspace root:

```bash
node .agents/skills/blog_writer/scripts/compile_post.js [slug]
```

This will parse the markdown files, convert the layout to HTML prose tags, calculate read time, and insert/update the entry inside `lib/posts.ts`.
