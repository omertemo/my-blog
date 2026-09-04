---
title: "Claude Code Field Notes: A No-BS Cheatsheet"
desc: "A practical developer field guide for Claude Code in the terminal: essential shortcuts, context management tricks, a lean CLAUDE.md template, and battle-tested gotchas."
tag: "CLI"
tagVariant: "cyan"
emoji: "💻"
date: "2026-09-04"
published: true
---

When running autonomous coding agents in the terminal, your biggest enemies are context drift and token waste. This post skips basic *npm install* walkthroughs and general AI philosophy. Instead, it compiles high-leverage terminal shortcuts, context management habits, and an architectural cheat sheet you can keep open while coding.

---

## 1. The Command Deck

The most critical commands and keyboard shortcuts you need during an active session:

### `Esc` (Single Press) — Immediate Abort
* **What it does:** Instantly halts whatever the agent is currently doing (streaming endless logs, reading irrelevant files, or running loops).
* **When to use:** The moment you notice the agent deviating or taking an incorrect turn. Don't wait for it to finish and burn tokens—hit the brakes immediately.
* **Difference from `Esc + Esc`:** Double-tap rewinds the conversation and opens the rewind menu; a single tap halts active execution and returns prompt control to you.

### `Shift + Tab` — Plan Mode
*Tip: Depending on your terminal, you might need to press the `Shift + Tab` key combination a couple of times to trigger it. :)*

* **What it does:** Prevents the agent from immediately modifying files; forces it to inspect the codebase and outline an execution plan first.
* **When to use:** Multi-file refactors touching 2+ files, introducing new architecture layers, or debugging issues with unclear root causes.
* **Why it matters:** Prevents the model from blindly modifying 10 files and hitting syntax or build failures later.

### `Esc + Esc` or `/rewind` — Undo & Revert
* **What it does:** Opens the rewind menu, where you choose to roll back the conversation only, the code only, or both to a prior checkpoint.
* **When to use:** When the agent chooses an incorrect library or takes an unhelpful architecture path—revert cleanly in one stroke instead of manually undoing edits in your IDE.

### `! <command>` — Shell Escape
* **What it does:** Executes a bash command directly inside the terminal session (e.g., `!git status`, `!npm test`).
* **Why it matters:** Injects command stdout directly into Claude's context without needing manual copy-pasting between terminal windows.

### `/compact` — Memory Compression
* **What it does:** Summarizes prior conversation history and terminal outputs, freeing up context window capacity.
* **When to use:** When `/context` reveals that memory is bloated, allowing you to reclaim capacity without terminating the session.

### `/clear` or `/new` — Hard Reset
* **What it does:** Wipes the current session and resets memory completely to start fresh (`/clear` and `/new` serve the same purpose).
* **When to use:** Immediately upon completing a task before beginning a new one. Stale logs and discussions from previous tasks will pollute context.

### `claude -c` or `claude --resume` — Session Recovery
* **What it does:** Restores your previous session with its complete context intact if you accidentally ran `/clear`, closed the terminal, or experienced a disconnection.
* **Why it matters:** The antidote to accidental wipes; recovers hours of context and architectural discussions with a single command.
* **Key Distinction:** `claude -c` directly opens your **most recent** active context. In contrast, `claude --resume` lists previous sessions by timestamp and summary, giving you the option to **pick which context to restore**.

### `/btw <question>` — Out-of-Band Side Query
* **What it does:** Allows you to ask a quick technical question without polluting the agent's active task focus or memory history.

---

## 2. `CLAUDE.md` Architecture: The 60–100 Line Rule

The file Claude Code consults most frequently is the root `CLAUDE.md`. The most common anti-pattern is treating this file like a 500-line comprehensive wiki.

> **Golden Rule:** Attention degrades across very long context buffers. Rules placed at the bottom of bloated files are routinely missed. Keep `CLAUDE.md` **strictly under 100 lines**.

### `# <rule>` — Instant Rule Injection
When you catch the agent repeating an unwanted pattern while coding, there is no need to interrupt your flow and open `CLAUDE.md` in an editor. Prefix your instruction with `#` directly in the prompt:

```markdown
# Always use pnpm, never run npm or yarn
# Use Tailwind classes instead of inline styles in UI components
```

Claude Code detects this syntax and permanently appends the guideline directly to your project's `CLAUDE.md`.

### What Belongs Here
* **Build & Test Commands:** Explicit commands to build, test, and lint the project.
* **Architectural Invariants:** *"Never use `any`"*, *"Use Zustand exclusively for client state"*, *"Never call SQL directly from route handlers"*.
* **Branch & Commit Conventions:** Conventional commits (`feat:`, `fix:`).

### What Does NOT Belong Here
* Information already clearly defined in `package.json` or `tsconfig.json`.
* General language or framework tutorials (Claude already understands React and Go).
* Transient sprint backlog items or frequently changing issue lists.

### Modular `CLAUDE.md` for Monorepos
In monorepos, avoid a single massive root file. Place scoped `CLAUDE.md` files in subdirectories:
* `apps/web/CLAUDE.md` (Next.js & Tailwind guidelines)
* `apps/api/CLAUDE.md` (Go/Node.js, DB migration conventions)

Claude Code automatically inherits rules from the working directory it operates within.

### Copy-Pasteable Minimal Template

```markdown
# Project Guidelines

## Commands
- Build: `pnpm build`
- Dev: `pnpm dev`
- Test: `pnpm test`
- Single test: `pnpm test -- -t "test_name"`
- Lint: `pnpm lint`

## Architecture & Conventions
- TypeScript strict mode; avoid `any`, prefer `unknown` with type guards.
- Use server components by default; add `'use client'` only when hook-driven.
- Keep business logic in `services/`, not inside UI components or route handlers.
- Handle all async errors explicitly with custom error boundaries.

## Rules
- Do NOT add new dependencies without explicit confirmation.
- Always run tests and linter before declaring a task done.
- Follow conventional commits (`feat:`, `fix:`, `refactor:`).
```

---

## 3. Context Management & Observability

The core thesis of this guide is context hygiene. But attempting to run `/compact` or `/clear` without visibility into your context window is shooting in the dark. You need surgical precision:

### `/context` — Context Observability (Measure Before You Prune)
This is the command you run before deciding whether to trigger `/compact`. `/context` visually breaks down what percentage of your active context window is allocated to loaded files, conversation turns, system instructions, and tool outputs.
* Identify bloated files or runaway terminal traces at a single glance.
* Make informed decisions on whether to compact or perform a hard reset.

### `@file` — Surgical Context Injection
Prompting the agent with *"Search the project and find auth errors"* forces it to scan dozens of files and degrades context within seconds. Target specific files surgically with the `@` prefix:

```bash
Inspect @src/services/auth.ts and @logs/error.log; isolate the token refresh error.
```

Claude loads precisely the requested files into memory. This is vastly more efficient than pasting 500 lines of terminal logs or letting the agent crawl your file tree.

### The Verification-First Loop
Instructing a CLI agent with *"Fix this endpoint"* is the fastest route to token drain and incorrect edits. The highest-yield pattern in terminal agents is the **Verification-First Loop**:

1. **Write the Failing Test First:** *"Write a unit test that reproduces this issue and currently fails."*
2. **Verify Failure:** Run `!npm test` to confirm the test fails as expected.
3. **Implement the Fix:** *"Make the minimum code changes required to make this test pass."*
4. **Close the Loop:** Keep iterating until the test suite turns green.

---

## 4. Custom Slash Commands (`.claude/commands/`): One-Shot Workflows

The single highest-ROI capability for developers is custom commands. Condense repetitive, multi-step prompt routines into a single slash command.

Simply create a `.claude/commands/` directory in your project root and drop markdown files inside:
* `.claude/commands/review.md` &rarr; Triggered via `/review` in the terminal.
* `.claude/commands/test-coverage.md` &rarr; Triggered via `/test-coverage` in the terminal.

Example `.claude/commands/review.md`:

```markdown
Review the latest git diff:
1. Verify edge-case unit test coverage for all modified functions.
2. Check for potential memory leaks, type inconsistencies, and security flaws.
3. Suggest a conventional commit message and PR description.
```

Now, typing `/review` runs your entire pre-PR verification protocol in one step.

---

## 5. Security & Permissions: `--dangerously-skip-permissions`

Claude Code prompts for confirmation prior to executing file edits or shell commands. While `--dangerously-skip-permissions` speeds up execution, it must be used with caution.

* **When to use:** In an isolated container or disposable sandbox environment for automated linter fixes or mechanical refactors.
* **When NEVER to use:**
  * Shell sessions with active production access.
  * Environments with active AWS, GCP, or database credentials.
  * Sensitive repositories where unverified `git push` or destructive `rm` commands could run.

---

## 6. Quick Decision Matrix

| Scenario | Immediate Reflex / Command | Anti-Pattern |
| :--- | :--- | :--- |
| **Changes touching 3+ files** | `Shift + Tab` (Plan Mode) to review plan | Prompting direct code modifications immediately |
| **Agent deviating or stuck in an infinite loop** | `Esc` (Single press) to halt immediately | Waiting for it to finish and burning tokens |
| **Agent hallucinated or added wrong dependency** | `Esc + Esc` or `/rewind` | Manually reverting files one-by-one in IDE |
| **Need to inspect context window consumption** | `/context` for visual breakdown | Guessing and blindly clearing or compacting |
| **Long session with slow responses** | Run `/compact` | Continuing with bloated context and burning tokens |
| **Targeting specific files for the agent** | `@file/path` for surgical context | "Scan entire project" causing massive file reads |
| **Adding persistent project guidelines** | `# <rule>` directly from prompt | Context-switching to open editor and find line |
| **Repetitive multi-step prompt routines** | Define slash command in `.claude/commands/` | Copy-pasting long prompt templates every time |
| **Task completed, starting new work** | `/clear` or `/new` session reset | Stacking unrelated tasks in the same history |
| **Session accidentally closed or reset** | `claude -c` (latest) or `--resume` (pick session) | Re-explaining the entire project from scratch |
| **Showing test results to the agent** | `!pnpm test` | Copy-pasting stdout from another terminal window |
| **Quick side question without context drift** | `/btw <question>` | Starting an entirely new session unnecessarily |
