---
title: "Claude 101: An Intelligent Thought Partner for Developers"
desc: "We explore Claude's core philosophy, Constitutional AI, the massive context window, and the Chat, Cowork, and Code modes of the new desktop app."
tag: "AI"
tagVariant: "cyan"
emoji: "🤖"
date: "2026-06-20"
published: true
---

As developers and tech professionals, we tackle dozens of problems every single day. Over the past few years, AI tools have become an indispensable part of these workflows. However, many tools struggle to go beyond being simple question-and-answer chatbots. Claude, developed by Anthropic, is designed with agentic features to support collaborative workflows on complex cognitive tasks.

In this post, we'll dive into the key takeaways from Anthropic's Claude 101 course, exploring Claude's technical strengths and the various working modes available in its new desktop app. Let's start with the fundamental question: What makes Claude different?

## What is Claude?

Claude is built on three foundational principles: being helpful, harmless, and honest, which shape its communication style.

### 1. Constitutional AI
Most AI models are trained using Reinforcement Learning from Human Feedback (RLHF), which can inadvertently train models to mirror human biases or act sycophantially to please evaluators. Claude, however, is trained using a method called **Constitutional AI**. The model is provided with a written "constitution"—a set of principles based on declarations of human rights, privacy guidelines, and ethical rules. During training, the model self-supervises, critiquing and correcting its own outputs against this constitution. This ensures it avoids toxic or discriminatory outputs, maintaining transparency and safety.

### 2. Large Context Window
For developers, an AI's active memory is critical. Claude offers a massive **context window** of 200K tokens on standard plans, and up to 1M tokens (on supported models) for Pro, Max, Team, and Enterprise plans. This translates to roughly 500 to 2,500 pages of text, or an entire codebase, that you can feed into Claude in a single conversation. You can upload extensive code files or documentation as **attachments**, allowing Claude to evaluate the entire project and provide highly accurate, contextual solutions.

### 3. Steerability
Claude exhibits high **steerability**, meaning it can strictly adhere to instructions regarding tone, style, role constraints, and output formats. By providing clear system instructions (e.g., "Always write code in TypeScript and include JSDoc comments for every function"), you can shape Claude's behavior to fit your project guidelines precisely.

### Key Concepts

*   **Constitutional AI:** A training method developed by Anthropic where the AI is trained to self-supervise and critique its outputs based on a written set of ethical and safety principles (a constitution).
*   **Context Window:** The active memory of an LLM, defining the maximum volume of text/data (measured in tokens) the model can ingest and consider in a single conversation.
*   **Steerability:** The model's capacity to strictly follow constraints regarding tone, style, behavior, and output formatting.
*   **Token:** The basic unit of text processing for LLMs, typically representing a word, sub-word, or punctuation mark (average 1 word = 1.3 tokens).
*   **Alignment:** The process of training AI systems to ensure their goals, decisions, and outputs align with human safety, ethics, and values.

## Your First Conversation with Claude

Getting started with Claude is simple. When you open `claude.ai` in your browser or launch the desktop application, you are greeted by a clean, inviting chat interface. You can immediately type your first prompt to begin. However, to truly leverage Claude as a thought partner, you can utilize several core features of the conversation engine:

*   **Adding Attachments:** Use the paperclip icon in the input box or simply drag and drop files (PDFs, code files, CSV sheets, or images) directly into the chat. Claude's large context window allows it to process these files entirely and answer questions with precision based on your data.
*   **Chat History:** Access your previous conversations anytime via the left sidebar. Claude stores each chat in an isolated context, ensuring that different projects or tasks do not bleed into one another.
*   **Customize Preferences:** Navigate to "Customize Claude" under your profile settings to define persistent instructions (e.g., "Always keep explanations concise and focus on Python best practices"). Claude will adhere to these instructions across all new conversations automatically.

### Key Concepts

*   **Attachments:** Documents, code repositories, or images uploaded to a conversation to provide instant context for Claude's reasoning.
*   **Customize:** A user preferences menu where you can set persistent guidelines that dictate Claude's persona, tone, and output style.
*   **Chat History:** The structured layout in the sidebar allowing you to organize, rename, and revisit past conversation threads.
*   **System Prompts:** Behind-the-scenes instructions that establish the rules, safety guidelines, and behavioral limits before the conversation starts.

## Getting Better Results

The biggest misconception when incorporating AI into software engineering or daily tasks is thinking we can solve everything with simple clicks or one-shot requests. Real efficiency starts when we treat AI not just as a tool, but as an autonomous thought partner. The **4D Framework for AI Fluency**, developed through academic research, outlines four core competencies for effective collaboration:

1. **Delegation:** Strategically deciding which tasks should be handled by humans, which by AI, and how to distribute the workload.
2. **Description:** Effectively communicating requests and parameters to the AI with clear, precise, and contextual instructions.
3. **Discernment:** Thoughtfully and critically evaluating Claude's outputs. It means inspecting the code or document for quality, logical consistency, and accuracy.
4. **Diligence:** Using AI responsibly and ethically, maintaining accountability, and fully owning the generated code or deliverables.

### Hallucinations and Grounding
Large language models (LLMs) can occasionally generate plausible-sounding but completely incorrect information—a phenomenon known as hallucination. This is where *Discernment* and *Diligence* are crucial. To ensure accuracy, we must ground (**grounding**) Claude's outputs by providing specific documents, code repositories, or by enabling **web search**. This forces the model's attention to focus on the provided factual context rather than generating statistical guesses.

### Evals (Evaluations)
To determine if Claude is actually performing well in your specific domain, you should run simple evaluations (**evals**):
- Gather 5-10 real examples of a task you regularly perform.
- Create test prompts designed to generate similar outputs.
- Run the prompts and compare Claude's outputs to your examples, checking for missing information, tone alignment, and style.
- Use these insights to refine your prompts.

### The Iteration Mindset and Common Challenges
Collaborating with AI is an iterative process, not a linear one. Treat the first output as a draft and provide specific, directed feedback. For example, if Claude's response is too generic, inject more specific constraints or target audiences. If it fails to follow formatting rules, show rather than just tell by providing templates. Finally, if the conversation has grown too long and context drift has caused Claude to go off track, it is often much faster to open a new chat window to refresh the attention window.

### Key Concepts

*   **Evals (Evaluations):** Systematic testing processes used to measure and verify an LLM's accuracy, formatting compliance, and stylistic quality on domain-specific tasks.
*   **Grounding:** Informing an LLM's responses using verified factual sources (uploaded files or real-time search queries) to reduce the risk of hallucination.
*   **Prompt:** The input instructions or queries provided to an LLM that guide its attention mechanism and dictate output characteristics.
*   **Iteration:** The process of continuously updating and refining outputs through interactive dialogue and feedback loops.
*   **Context Drift:** A decline in model focus or instruction-following that occurs as a conversation grows too long, diluting the attention weights over unrelated history.

## Claude Desktop App: Chat, Cowork, Code

Claude’s desktop app offers three distinct working modes tailored to your immediate needs:

*   **Chat:** The same conversational Claude you know from the web, enhanced with native desktop integrations. This includes a floating **Quick Entry** window that triggers by double-tapping the **Option** key on Mac, allowing you to ask questions without leaving your active window. It also features screen capturing, window sharing, voice **dictation**, and **desktop connectors** that link local data (like Apple Notes) to your chat context.
*   **Cowork:** An **agentic** tool built for tasks requiring multi-step workflows and autonomous executions. Cowork can coordinate **subagents** in parallel to divide and conquer research reports, run folder-wide document updates, and execute scheduled tasks (e.g., pulling daily Slack/Calendar updates). It can browse the web via Chrome (**browser use**) or directly interact with desktop windows, clicking and typing to get work done (**computer use**). You can also hand off tasks to it remotely from your phone using **Dispatch**.
*   **Code:** Optimized specifically for software engineering workflows. It can run locally on a folder (**local**) or connect to a cloud-based **GitHub** repository (**remote**) for background tasks. It features three interaction modes to govern AI autonomy: **Ask** (proposes changes and awaits approval via visual diffs), **Code** (applies changes automatically but asks before running terminal commands), and **Plan** (outlines its full strategy beforehand). All changes are tracked via git integration.

**Cowork** and **Code** run on the same powerful local **engine** (Claude Code), enabling them to perform long-running tasks and coordinate sub-agents locally on your machine.

### Key Concepts

*   **Agentic Systems:** AI systems capable of taking independent actions—such as running compiler commands, reading/writing local files, and using external tools—to achieve a high-level goal rather than just generating text answers.
*   **Sub-agents:** Specialized AI instances spawned by a coordinator agent to parallelize tasks (e.g., one agent writes test suites while another refactors functions) and merge results into the final output.
*   **Desktop Connectors:** Integration bridges that securely link a local application, notes, or files on a user's physical machine to the AI assistant's context window.
*   **Computer Use:** An AI capability where the assistant reads screen pixels to navigate, click, type, and interact with the desktop operating system exactly like a human user.
*   **Sandbox:** A contained, secure local execution environment that limits the AI's file read/write permissions to specific folders, preventing unauthorized system changes.
*   **Refactoring:** The process of restructuring existing computer code—improving its readability, structure, and performance—without changing its external behavior.
*   **Visual Diffs:** A graphical user interface component showing the exact line-by-line differences (additions, deletions, edits) between two versions of code.

## Introduction to Projects

AI models typically start each new conversation with a blank slate, requiring files and instructions to be re-uploaded. Claude provides a **Projects** feature to manage persistent context and optimize ongoing workflows.

Projects are dedicated digital workspaces designed for ongoing, multi-stage **workflows** rather than simple, one-off questions. When you establish a project, you can leverage:

*   **Persistent Reference Materials:** Upload documentation, API reference guides, historical data, or templates directly into the project. Claude automatically reads this knowledge base in every new chat window opened under that project.
*   **Consistent Custom Instructions:** Define persistent behavioral guidelines (e.g., "Always cite sources", "Generate all code blocks in TypeScript") that govern Claude's output style across all project chats automatically.
*   **Team Collaboration:** Share the project workspace with team members so multiple people can collaborate from the same baseline context.

### Setting Up Your First Project

The setup process for a project involves the following steps:

1. **Start Your Project:** Click on "Projects" in the left sidebar or navigate directly to `claude.ai/projects`, then click "+ New Project" in the top-right corner. Give your project a descriptive name and a brief description. Set visibility to private or share it with your organization.
2. **Define Project Instructions:** Click on "Instructions" to specify behavioral rules for Claude across all project chats. A good instruction set includes context about your work, process guidelines (e.g., "First outline the blog structure, then draft the post"), style preferences, and specific output requirements (e.g., "Always include a call-to-action"). You can also use instructions to automate workflows (e.g., "When a meeting transcript is uploaded, generate a structured summary based on this template").
3. **Build the Knowledge Base:** Use the "+" button on the right side of the project page to upload files in PDF, DOCX, CSV, TXT, HTML, or other formats, or connect directly to Google Drive. Pro tip: Use descriptive file names like "Q4-2024-Brand-Guidelines.pdf" instead of generic ones like "document1.pdf" to help Claude locate the correct information more efficiently.

### Working within Your Project & Collaboration

Once your project is set up, you can start chatting with Claude. Each new conversation opened under the project automatically has access to your knowledge base and follows your project instructions.

For users on Claude for Work (Team and Enterprise) plans, projects become even more powerful through collaboration features. When sharing a project, you can choose from three permission levels:

*   **Can View:** Members can see project contents, access the knowledge base, and chat—but cannot make changes. This is read-only access with discussion rights.
*   **Can Edit:** Members have full collaboration power. They can modify project instructions, update the knowledge base, manage other members, and actively contribute to the project.
*   **Owner:** Project creators control everything, including visibility settings. They can share with specific people or make the project visible to the entire organization.

To share a project, click the "Share project" button to the right of the project name. You can add individual members by name or email, use bulk sharing by pasting a list of email addresses, or share with "Everyone at [your organization]" to make the project discoverable in the Team tab.

### Managing Large Knowledge Bases with RAG (Retrieval Augmented Generation)

What happens when you upload a substantial volume of documentation to your project? Claude handles scale automatically through **Retrieval Augmented Generation (RAG)**.

When the total volume of your project data approaches the **context window** limit, Claude seamlessly activates **RAG mode**. Rather than loading all project files into memory at once, Claude intelligently searches and retrieves only the most relevant text chunks to answer your specific query. This approach expands the project's data capacity while maintaining response speed and quality. A visual indicator will appear in the UI once RAG is enabled, though the interaction remains identical—allowing you to query files and receive context-aware answers seamlessly.

### Best Practices for Projects

To get the most out of projects and keep the response quality high:

*   **Start Focused, Then Expand:** Begin with a specific **use case** rather than trying to create one project for everything. You can always add more content and scale as you go.
*   **Keep the Knowledge Base Current:** Outdated documents lead to outdated AI responses. Review and update your project knowledge base periodically.
*   **Write Clear Instructions:** Be specific about what you want Claude to do. Vague instructions lead to inconsistent results.
*   **Name Documents Descriptively:** Use names like `Q4-2025-Sales-Report.pdf` rather than `report.pdf`, and group related files together. Claude uses filenames and folder **proximity** to understand relationships between documents.
*   **Reference Documents by Name:** When asking questions, you can mention specific documents to help Claude focus its search (e.g., *"Based on our Q3 report, what were the top customer concerns?"*).

### Key Concepts

*   **Persistent Context:** The underlying architecture that automatically loads project files and custom instructions into the context window of every new conversation within a project.
*   **Workspace:** A logical boundary or directory grouping files, instructions, chat history, and shared permissions dedicated to a specific theme or application.
*   **Knowledge Base:** The collection of reference documents, specifications, templates, and files uploaded to a project for the AI model to query.
*   **RAG (Retrieval Augmented Generation):** A framework where the AI model searches an external database or knowledge base for relevant passages first, then synthesizes its final answer based on those passages.
*   **Workflow Automation:** The programmatic execution of multi-step processes by the AI (e.g., generating templates from meeting transcripts) triggered by specific user inputs.
*   **Permission Levels:** The set of access rights (e.g., Can View, Can Edit, Owner) assigned to different users within a shared digital workspace.
*   **Read-Only:** A restriction level that permits users to read or query information without the ability to modify, delete, or upload data.
*   **Use Case:** A specific situation or scenario in which a product or service could be used to achieve a goal.
*   **Proximity:** The physical or semantic closeness of documents or code blocks within a system hierarchy, which RAG tools analyze to infer relationships.

## Creating with Artifacts

**Artifacts** are standalone, interactive outputs that Claude creates in a dedicated window alongside your conversation. Instead of getting a long block of code or text buried in the chat, you see your content rendered and ready to use—whether that's a working website, an interactive chart, or a document you can immediately download.

Claude automatically creates an artifact when content meets certain criteria:

*   **Significant and Self-Contained:** Typically over 15 lines of complex code or documentation.
*   **Iterative and Modifiable:** Something you are likely to edit, iterate on, or reuse in the future.
*   **Complex and Standalone:** Content that represents a distinct asset that stands on its own without needing the surrounding conversation.
*   **Persistent Reference:** Assets that you will want to reference or use later in your workflow.

### Common Artifact Types

Claude can create different types of artifacts, each suited to different needs:

*   **Documents:** Excel, PowerPoint, Word, Markdown, or PDF formats. Ideal for text-heavy content you want to export or continue editing, such as reports, meeting notes, or project plans.
*   **Code Snippets:** Working code in Python, JavaScript, C++, Go, and more, which you can copy or download to use in your own projects.
*   **HTML Pages:** Complete, standalone web pages with HTML, CSS, and JS. Perfect for landing pages, interactive forms, or quick prototypes.
*   **SVG Images:** Scalable vector graphics for logos and illustrations, rendering directly in the artifact window.
*   **Mermaid Diagrams:** Visualizations like flowcharts, sequence diagrams, and Gantt charts created simply by describing relationships.
*   **React Components:** Interactive UI elements featuring real functional logic (such as calculators, dashboards, or interactive charts) that respond directly to user input rather than being static mockups.

### Creating Your First Artifact

To create an artifact, describe what you want, and Claude will determine whether to present it as an artifact based on the size and structure of the content.

For example, you might say:

*   *"Create a flowchart showing our customer onboarding process."* (Note: Claude may now generate visual diagrams like flowcharts as HTML using Imagine, in addition to code-based artifacts.)
*   *"Build an interactive dashboard that lets me input monthly expenses and see a breakdown."*
*   *"Design a landing page for a productivity app with a hero section and feature list."*
*   *"Write a project brief template I can reuse for new initiatives."*

If Claude doesn't automatically create an artifact when you expect one, you can explicitly ask: *"Create this as an artifact"* or *"Show me this in an artifact."*

When Claude generates an artifact, it appears in a dedicated window to the right of your conversation. From here, you can:

*   **View Different Formats:** Toggle between a preview (how it looks) and the underlying code.
*   **Copy Content:** Click the copy icon to grab the content for use elsewhere.
*   **Download Files:** Save the artifact as a file to your computer.
*   **View Code:** See exactly what Claude generated under the hood.

### Sharing and Publishing Artifacts

Once you've created something useful, you have several options for sharing it:

*   **Copy or Download:** For personal use or sharing via other channels, use the copy or download buttons in the lower-right corner of the artifact window.
*   **Share within Your Organization (Claude for Work):** Team and Enterprise users can share artifacts internally with colleagues. The shared artifact stays within your organization and requires team identity **authentication** to access.
*   **Publish Publicly:** For free, Pro, and Max users, you can publish artifacts to make them accessible to anyone with the link. When you publish:
    *   Only the selected version becomes public; your conversation history remains private.
    *   Anyone can view and interact with the artifact without needing a Claude account.
    *   Others can "**remix**" your artifact—opening it in their own Claude conversation to modify and build upon it.

To publish, click the "Share" or "Publish" button in the upper-right corner of the artifact. You can unpublish at any time by returning to that artifact and removing public access. Note that published artifacts are accessible to anyone with the link, but are not indexed by search engines, meaning they won't appear in Google search results.

### Tips for Getting the Most from Artifacts

To extract the maximum value from the Artifacts feature, consider these tips:

*   **Be Specific About What You Want:** Instead of "Build a budget tracker," say "Build a monthly budget tracker where I can input expenses by category, see a pie chart breakdown, and get a warning when I'm over budget" to guide Claude towards more comprehensive designs.
*   **Describe the End User:** Identifying who will use the artifact informs its UI choices. "This flowchart is for new employees" yields a different design approach than "This flowchart is for the engineering team."
*   **Iterate Incrementally:** Ask Claude to add one feature or make one change at a time rather than requesting everything at once. This simplifies debugging and testing.
*   **Request Artifacts When Needed:** If you prompt for something substantial and Claude responds inline in the chat instead of spawning a new panel, explicitly request: *"Please create that as an artifact."*

### Key Concepts

*   **Standalone:** An independent output or module that functions and provides value on its own without external dependencies or surrounding chat context.
*   **Render:** The process of compiling and displaying raw code (such as HTML/CSS/JS) into a visual, interactive interface in the browser.
*   **Mockup:** A static design model representing how a website or application will look, without containing functional logic.
*   **Preview:** A live visualization screen showing code-based user interfaces executed by the browser.
*   **Toggle:** A user interface control or action that switches between two alternative states or views.
*   **Remix:** The action of cloning another user's published artifact into one's own chat session to modify and extend it.
*   **Unpublish:** The process of removing public access to a previously published URL, restoring its visibility only to the author.
*   **End User:** The final target audience or individuals who will interact with and utilize a software product or design.
*   **Incremental Iteration:** The methodology of building software piece-by-piece, requesting individual additions or modifications sequentially rather than all at once.

## Working with Skills

While executing tasks within workspaces and codebases, Claude supports modular expertise packages and integrations with external tools to handle specialized workflows.

**Skills** are directories containing instructions, **scripts**, and template resources that Claude loads dynamically in the background to optimize performance on specialized tasks. Think of them as autonomous expertise packages designed to extend Claude's core capabilities in a repeatable way.

If you have used Claude to generate Excel sheets, PowerPoint slideshows, Word docs, or PDFs, you have already experienced Skills at work behind the scenes. However, the modular nature of Skills goes far beyond document generation. Custom Skills can codify complete repeatable workflows:

*   **Quarterly Variance Analysis:** Automated templates designed to compare financial figures across quarters.
*   **Brand Voice:** Quality control rules ensuring text aligns with brand voice guidelines.
*   **Compliance Checklist:** Predefined checklists verifying code compliance against regulatory and security benchmarks.

By deploying custom Skills, you guarantee that Claude executes complex, standard-dependent workflows with high rigor and reproducibility.

### Types of Skills

There are two primary categories of Skills you will encounter:

*   **Anthropic Skills:** Created and maintained by Anthropic. These include enhanced document creation capabilities for Excel, Word, PowerPoint, and PDF files. Anthropic Skills are available to all paid users, and Claude invokes them automatically when relevant—meaning no configuration is needed on your part.
*   **Custom Skills:** Custom skills built by you or your organization to automate specialized workflows and **domain-specific** tasks. For example, you can create a skill that enforces company brand guidelines on presentations, templates meeting notes in a specific format, or executes custom data analysis pipelines.

### Enabling Skills

Skills are currently available as a feature preview for users on Pro, Max, Team, and Enterprise plans. To use Skills, you'll need to have **Code execution** and **file creation** enabled, since Skills require Claude's secure **sandboxed computing environment** to function.

Here's how to enable Skills:

1. Navigate to **Settings > Capabilities**
2. Ensure that **Code execution and file creation** is toggled on
3. Scroll to the **Skills** section
4. Toggle individual skills on or off as needed

For Enterprise plans, organization Owners must first enable both Code execution and Skills in Admin settings before individual members can access them. For Team plans, this feature preview is enabled by default at the organization level.

Once enabled, you'll see available Skills listed in your settings, including Anthropic's built-in Skills and any custom Skills you've uploaded.

### Using Skills in Practice

The workflow automatically handles skill selection based on your prompt.

Here are a few practical examples of prompts that will trigger Skills:

*   *"Create an Excel spreadsheet tracking monthly expenses with formulas for totals."*
*   *"Turn this meeting notes document into a PowerPoint presentation."*
*   *"Generate a PDF report summarizing this data."*
*   *"Build a financial model in Excel with scenario analysis."*

When Claude invokes a skill, you will see it mentioned inside Claude's chain of thought as it executes reasoning steps. The final output is a downloadable file that you can save locally or export directly to Google Drive.

### Creating Custom Skills

While Anthropic's built-in Skills manage basic document creation tasks, the true potential of the feature comes from customising them to your workflows. Custom Skills let you program Claude with your brand guidelines (brand voice), templates, and specific ways of working.

To build a Custom Skill, you can describe requirements in a dialogue with Claude. The file structure is compiled autonomously:

1.  **Define Your Purpose:** Open a new chat and tell Claude what you want to create (e.g., *"I want to create a skill for writing quarterly business reviews (QBR)."*).
2.  **Answer Claude's Questions:** Claude will run a brief interview about your workflow, asking what the skill should execute, what defines a high-quality output, and in which contexts you plan to deploy it.
3.  **Upload Reference Materials:** If you have templates, style guidelines, brand assets, or past successful outputs, upload them as reference materials (**reference materials**).
4.  **Save Your Skill:** At the end of the conversation, Claude generates a structured skill package. Save it, and the skill is instantly listed under the **Customize** panel in the left sidebar.

Once saved, the Custom Skill is automatically invoked by Claude whenever you work on matching tasks. You can edit and improve the skill over time by simply asking Claude to update it.

### Skills vs. Projects

You might be wondering—if both skills and projects can be used to provide more context to Claude, when should you use each? Think of it this way: **projects store knowledge, skills perform tasks.**

*   **Projects are Knowledge Hubs:** They hold the reference materials Claude needs to understand your work—project specifications, meeting notes, research documents. When files are uploaded to a project, Claude draws on that information across every conversation within that project.
*   **Skills are Procedural Machines:** They encode how Claude should execute a task—the specific steps, order of operations, and methodology you want followed every time.

The two features complement each other: the project provides the *what (information/data)*, while the skill provides the *how (process/execution)*. For instance, a "customer call prep" **skill** might pull from customer profiles stored in a project's **knowledge base**.

| Feature | Projects | Skills |
| :--- | :--- | :--- |
| **Purpose** | Store knowledge Claude references. | Define processes Claude executes. |
| **Best for** | Long-term context, reference materials, team collaboration. | Repeatable workflows, multi-step tasks, consistent methodology. |
| **Example** | Customer hub, research buddy, feedback generator. | Process guidelines (brand or legal), blog drafting, PDF creation. |
| **Persistence** | Knowledge available across all chats in the project. | Instructions applied only when the skill is invoked. |

### Key Concepts

*   **Skills:** Modular folders of instructions and scripts loaded dynamically to equip the AI model with specialized, repeatable workflow capabilities.
*   **Scripts:** Execution files containing code (such as Python or JS) that runs sequentially without prior compilation, typically used for workflow automation.
*   **Domain-Specific:** Targeted or restricted to a particular field of expertise, industry segment, or organization-level rules.
*   **Feature Preview:** A release phase allowing users on select subscription plans to test new experimental capabilities before full commercial availability.
*   **Sandboxed Environment:** An isolated, secure compute area that restricts programs from interacting with host systems, personal files, or core resources.
*   **Code Execution:** The functional ability of an AI assistant to interpret, run, and extract output from code blocks dynamically.

## Connecting Your Tools

**Connectors** transform Claude from an assistant into an informed collaborator by giving Claude access to the same tools, data, and context that you use every day. Instead of starting every conversation from scratch, Claude can work directly with your actual information.

Connectors allow Claude to read information and perform actions on your behalf. Depending on the connector and permissions you grant, Claude can search your files, retrieve documents, analyze data, create new content, update records, and execute tasks across your connected applications—all from within your conversation.

There are two types of connectors:
*   **Web Connectors:** Link Claude to cloud services like Google Drive, Notion, Slack, and Asana.
*   **Desktop Extensions:** Run locally on your computer through the Claude Desktop app, giving Claude access to local files and native applications.

The Model Context Protocol (MCP) powers connectors. Model Context Protocol (MCP) is an open-source, universal standard that allows AI models to connect to different applications through a single, consistent interface. This open standard means developers can build connectors for any tool, and those connectors work with Claude.

### Finding and Connecting Tools

Anthropic maintains a directory of recommended connectors at [claude.ai/directory](https://claude.ai/directory). The directory is organized into two tabs:
*   **Web:** Cloud services and applications (Gmail, Notion, Slack, Asana, Linear, Stripe, and many more).
*   **Desktop Extensions:** Local tools that run on your computer through the Claude Desktop app.

To browse available connectors, you can also click the `+` button in the lower left of the chat window, then select **Connectors**.

#### Setting Up a Web Connector

Here's how to connect a cloud service:
1.  **Find the connector:** Navigate to `claude.ai/directory`, or click `+` > **Connectors` in any chat.
2.  **Click Connect:** Select the connector you want to add.
3.  **Authenticate:** You'll be redirected to the service's login page. Sign in with your existing credentials.
4.  **Grant permissions:** Review the specific permissions Claude is requesting, then authorize access.
5.  **Test the connection:** Return to Claude and try a simple request, like *"Can you access my [tool name]?"*.

Once connected, Claude can search, read, and in some cases take actions within that service—depending on the permissions you've granted.

#### Desktop Extensions

Desktop extensions require the Claude Desktop app rather than the web interface. These extensions let Claude interact with local applications, your file system, and native features on macOS or Windows.

Some desktop extensions include:
*   **Local file access:** Reading and organizing documents.
*   **Browser control:** Automated web tasks.
*   **Native application integration:** Like Figma for design work.

To install a desktop extension:
1.  Download and install the Claude Desktop app.
2.  Open the app and navigate to **Settings > Extensions**.
3.  Browse available extensions and click **Install**.
4.  Follow any additional setup steps specific to that extension.

### Using Connectors in Your Work

Once you've connected your tools, Claude considers them when responding to your requests. Here are some practical ways to use connected tools:

#### Project Management (Asana, Linear, Jira)
*   *"What are my highest priority tasks due this week?"*
*   *"Create a new task for reviewing the Q4 budget proposal"*
*   *"Summarize the status of our product launch project"*

#### Communication (Slack, Gmail)
*   *"Find the email thread where we discussed the vendor contract"*
*   *"Draft a reply to the latest message in the #marketing channel"*
*   *"What did the team decide about the timeline in yesterday's discussion?"*

#### Documentation (Notion, Google Drive, Confluence)
*   *"Search our documentation for our brand voice guidelines"*
*   *"Summarize the meeting notes from last week's product review"*
*   *"What does our style guide say about using contractions?"*

#### Business Tools (Stripe, PayPal, Salesforce)
*   *"Show me revenue trends for the past quarter"*
*   *"What's the status of the Acme Corp opportunity?"*
*   *"List recent transactions over $1,000"*

### Security and Permissions

When you connect Claude to external services, you're granting it access to read—and sometimes modify—data within those services. Here are some important considerations:

*   **Scoped Access:** Permissions are specific to what the connector needs and you can toggle individual permissions on and off within each application's menu.
*   **Claude Sees What You See:** Claude can only access data you have access to. Connecting your work email doesn't give Claude access to your CEO's inbox—only your own.
*   **Revocable at Any Time:** You can disconnect a service through Claude's settings or through the third-party service's security settings. Just as with Skills, you can also find or build custom connectors. Exercise the same caution — only install connectors from trusted sources.

### Claude Interfaces and Integration Matrix

You are not limited to the desktop application when integrating Claude into your workflows. Anthropic provides a diverse ecosystem of interfaces tailored to different use cases:

| Interface / Integration | Core Capabilities / Tasks | Target Platforms |
| :--- | :--- | :--- |
| **Claude.ai** | General tasks, research, writing, analysis, file creation. | Web, desktop, and mobile apps. |
| **Claude Code** | Software development, codebase navigation, git workflows. | Terminal / command line, IDE, or your browser. |
| **Claude Cowork** | Complex, multi-step tasks: research briefs, document creation, file organization, data analysis. | Desktop (and mobile apps via Dispatch). |
| **Slack Integration** | Team collaboration, meeting prep, quick answers in context. | Slack workspace. |
| **Claude for Excel** | Spreadsheet analysis, financial modeling, formula debugging. | Microsoft Excel sidebar. |
| **Claude for PowerPoint** | Slide creation, presentation editing, formatting and design. | Microsoft PowerPoint sidebar. |
| **Claude for Chrome** | Web research, email management, browser automation. | Chrome browser sidebar. |

### Key Concepts

*   **Connectors:** Data integration pathways that enable Claude to directly access external tools, databases, and cloud applications.
*   **Model Context Protocol (MCP):** An open-source, universal integration standard that enables AI models to communicate with different applications and data sources via a single, consistent protocol.
*   **Desktop Extensions:** Local connectors that run via the Claude Desktop app, giving the model access to files and operating system capabilities on the local machine.
*   **Authenticate:** The process of verifying the identity of a user or system, enabling secure log-in to a service.
*   **Grant Permissions:** Assigning access rights and boundaries to an application or model, allowing it to perform operations on specific data.
*   **Browser Control:** The programmatic ability of an AI system to guide a local web browser to navigate, collect data, or perform form submissions autonomously.
*   **Opportunity:** A structured data entry in sales and CRM platforms representing a potential sale or commercial deal with a client.
*   **Scoped Access:** A restriction level where an integration can only access pre-authorized and narrow parts of a system rather than the full directory.
*   **Revocable:** The quality of an integration's access rights that permits the user to immediately and permanently cancel permissions at any time.

## Enterprise Search

Enterprise Search adds a dedicated **"Ask {Your Org Name}"** option to your sidebar. This is designed specifically for finding and synthesizing knowledge buried across your company's tools and data sources.

Think of Enterprise Search as a pre-built Project for your entire organization — your company's knowledge base is already loaded, so you can jump right in to get context-aware responses to your questions.

Unlike regular chats with connectors enabled, Enterprise Search is specifically designed for information gathering, using custom instructions configured by the Anthropic team.

### What can you ask?

Enterprise Search is particularly valuable for questions that span multiple sources or require synthesizing information from across your organization. Here are some common use cases:

*   **Getting up to speed:**
    *   *"What happened yesterday while I was out?"*
    *   *"Summarize key updates across the business from the last week."*
    *   *"What are the current blockers on the Platform project?"*
*   **Policy and process questions:**
    *   *"What is our company's remote work policy?"*
    *   *"How do I submit an expense report?"*
    *   *"What's the process for requesting time off?"*
*   **Research and analysis:**
    *   *"What are the main reasons customers cite for choosing competitors?"*
    *   *"Summarize discussions about the Q4 product roadmap."*
    *   *"Find information about our customer onboarding process."*
*   **Onboarding new team members:**
    *   *"How does our authentication system work?"*
    *   *"Who should I talk to about learning the billing system?"*
    *   *"What tools does the engineering team use for deployment?"*
*   **Performance and project tracking:**
    *   *"Find discussions and documents related to the marketing campaign."*
    *   *"What were the key decisions from last week's leadership meetings?"*
    *   *"Summarize team contributions to the Infrastructure initiative."*

When you ask a question, Claude searches across all your connected tools—such as SharePoint documents, Slack conversations, Gmail threads, and Google Drive files—and synthesizes information into a unified response. Plus, it always **cites its sources** so you can get the full context.

### Setting Up Enterprise Search

Enterprise Search requires a two-step setup process: first an admin configures it for the organization, then individual users authenticate with their personal accounts.

#### For Admins (Owners)

The Enterprise Search project is enabled by default for all Team and Enterprise organizations, but an Owner needs to complete the initial setup before team members can use it:
1. Click **"Ask Your Org"** in the left sidebar.
2. Click **"Set up for your org"** to continue (or "Disable" to turn the feature off).
3. Connect your organization's tools. You'll be required to choose a connector for Documents (like Google Drive or SharePoint) and Chat (like Slack or Microsoft Teams). Email is recommended but optional.
4. Click **"+ Add more"** to set up any additional tools your team needs.
5. Customize the project name. Whatever you enter will appear as *"Ask [Name]"* in everyone's sidebar.
6. Add a description, then click **"Finish set up."**

Once setup is complete, the project becomes available to all members of your organization.

#### For Users

After an admin has set up Enterprise Search, you'll see the *"Ask {Org Name}"* project starred in your sidebar. Here's how to get started:
1. Click on the project in your sidebar.
2. Follow the guided onboarding flow to connect to the recommended services.
3. Authenticate with each service you want to search (Slack, Google, Microsoft 365, etc.).
4. Start asking Claude questions about your organization's knowledge.

The more connectors you enable, the more comprehensive your search results will be. You can always add more connectors later by clicking "Connect" in the project's Instructions section.

#### That's a lot of data … is this safe?

In short, yes. Enterprise Search only shows what you already have permission to access in the original connected tool. Plus, your conversations remain private, and your connected data isn't indexed or stored separately.

### Key Concepts

*   **Blocker:** An issue or obstacle that completely stops or delays progress on a project task.
*   **Onboarding:** The integration and training process of a new employee or customer to help them adapt to a new system or environment.
*   **Cite Sources:** Providing reference links or locations for documents and messages that the model utilized to generate its answer.
*   **Owner:** An administrative role within a software or platform organization responsible for managing settings, billing, and overall permissions.
*   **Guided Onboarding:** An interactive, step-by-step guided flow to facilitate initial configuration and connection setup for a user.
*   **Indexed:** The process of compiling data from files and messages into a search index or structured database to enable fast query execution.

## Research Mode for Deep Dives

Research provides an agentic approach for finding and analyzing information. Instead of a single search, the model conducts multiple searches that build on each other while determining exactly what to investigate next, exploring different angles of the question automatically.

Research reports typically complete in 5 to 45 minutes depending on the complexity of the query.

Extended thinking is automatically enabled with Research. This combination lets the model plan its approach and gather comprehensive information, breaking complex requests into manageable pieces.

Citations in the research outputs allow for source verification.

### What is Research?

Research is a capability that allows Claude to perform deep, multi-step web searches to answer complex questions or gather comprehensive information on a topic. When you enable Research, Claude:

*   Formulates a research plan based on your query.
*   Executes search queries to find high-quality web sources.
*   Analyzes retrieved pages to extract relevant information.
*   Identifies gaps in its current knowledge and runs follow-up searches.
*   Synthesizes findings into a comprehensive, cited report.

Unlike standard web search which retrieves a single set of search results, Research is an iterative, agentic loop that dynamically adapts its search strategy as it learns more about the topic.

### Conclusion: What You've Learned

Throughout this Claude 101 guide, we have explored how to transition from treating Claude as a simple Q&A chatbot into establishing it as a full-cycle "thought partner." Here are the core takeaways:

*   **Getting Started with Claude:** Claude is built on Constitutional AI principles to be helpful, harmless, and honest. You can access it via web, desktop, and mobile with seamless sync, and write effective prompts by establishing context, action, and formatting rules.
*   **Getting Better Results:** Iteration is key. Hone outputs through interactive dialogue. True AI Fluency is achieved by mastering four core competencies: Delegation, Description, Discernment, and Diligence.
*   **Organizing Your Work:** Projects provide dedicated workspaces with persistent knowledge and instructions. Artifacts compile complex, standalone outputs like code and interactive dashboards alongside your chat. Skills are instruction folders that automate specialized workflows.
*   **Expanding Claude's Reach:** Connectors link Claude to your Google Drive, Slack, Notion, and other data sources. Enterprise Search serves as an organization-wide search directory. Research Mode automates multi-step, deep web searches into cited reports.
*   **Putting It All Together:** Claude's value applies across all domains—software development, marketing, finance, HR, legal, and research. Beyond `claude.ai`, you can utilize Claude Code, Slack, Excel, and Chrome sidebar extensions to embed it into your tools.

### Key Concepts

*   **Research Mode:** An autonomous feature allowing Claude to carry out multi-step, iterative web searches to compile comprehensive reports.
*   **Extended Thinking:** A capability that permits the model to spend more time reasoning and planning steps before generating its final answer.
*   **Agentic Search:** The process by which the AI makes its own search decisions, creating follow-up queries based on intermediate findings.
*   **Citations:** Reference links or indicators embedded in reports showing the source documents or websites used by the model.
*   **Deep Dive:** A comprehensive analysis that digs into all sub-aspects, technical parameters, and source materials rather than summarizing briefly.
*   **Systematic Investigation:** The structured process of exploring a topic step-by-step to fill knowledge gaps rather than running arbitrary queries.
