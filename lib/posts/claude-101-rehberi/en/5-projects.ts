export const content = `
<h2>Introduction to Projects</h2>

<p>AI models typically start each new conversation with a blank slate, requiring files and instructions to be re-uploaded. Claude provides a <strong>Projects</strong> feature to manage persistent context and optimize ongoing workflows.</p>

<p>Projects are dedicated digital workspaces designed for ongoing, multi-stage <strong>workflows</strong> rather than simple, one-off questions. When you establish a project, you can leverage:</p>

<ul>
  <li><strong>Persistent Reference Materials:</strong> Upload documentation, API reference guides, historical data, or templates directly into the project. Claude automatically reads this knowledge base in every new chat window opened under that project.</li>

  <li><strong>Consistent Custom Instructions:</strong> Define persistent behavioral guidelines (e.g., "Always cite sources", "Generate all code blocks in TypeScript") that govern Claude's output style across all project chats automatically.</li>

  <li><strong>Team Collaboration:</strong> Share the project workspace with team members so multiple people can collaborate from the same baseline context.</li>
</ul>

<h3>Setting Up Your First Project</h3>

<p>The setup process for a project involves the following steps:</p>

<p>1. <strong>Start Your Project:</strong> Click on "Projects" in the left sidebar or navigate directly to <code>claude.ai/projects</code>, then click "+ New Project" in the top-right corner. Give your project a descriptive name and a brief description. Set visibility to private or share it with your organization.</p>
<p>2. <strong>Define Project Instructions:</strong> Click on "Instructions" to specify behavioral rules for Claude across all project chats. A good instruction set includes context about your work, process guidelines (e.g., "First outline the blog structure, then draft the post"), style preferences, and specific output requirements (e.g., "Always include a call-to-action"). You can also use instructions to automate workflows (e.g., "When a meeting transcript is uploaded, generate a structured summary based on this template").</p>
<p>3. <strong>Build the Knowledge Base:</strong> Use the "+" button on the right side of the project page to upload files in PDF, DOCX, CSV, TXT, HTML, or other formats, or connect directly to Google Drive. Pro tip: Use descriptive file names like "Q4-2024-Brand-Guidelines.pdf" instead of generic ones like "document1.pdf" to help Claude locate the correct information more efficiently.</p>

<h3>Working within Your Project & Collaboration</h3>

<p>Once your project is set up, you can start chatting with Claude. Each new conversation opened under the project automatically has access to your knowledge base and follows your project instructions.</p>

<p>For users on Claude for Work (Team and Enterprise) plans, projects feature collaboration capabilities. When sharing a project, you can choose from three permission levels:</p>

<ul>
  <li><strong>Can View:</strong> Members can see project contents, access the knowledge base, and chat—but cannot make changes. This is read-only access with discussion rights.</li>

  <li><strong>Can Edit:</strong> Members have collaboration power. They can modify project instructions, update the knowledge base, manage other members, and actively contribute to the project.</li>

  <li><strong>Owner:</strong> Project creators control settings, including visibility. They can share with specific people or make the project visible to the entire organization.</li>
</ul>

<p>To share a project, click the "Share project" button to the right of the project name. You can add individual members by name or email, use bulk sharing by pasting a list of email addresses, or share with "Everyone at [your organization]" to make the project discoverable in the Team tab.</p>

<h3>Managing Large Knowledge Bases with RAG (Retrieval Augmented Generation)</h3>

<p>What happens when you upload a substantial volume of documentation to your project? Claude manages scale through <strong>Retrieval Augmented Generation (RAG)</strong>.</p>

<p>When the total volume of your project data approaches the <strong>context window</strong> limit, Claude activates <strong>RAG mode</strong>. Rather than loading all project files into memory at once, Claude searches and retrieves the most relevant text chunks to answer your specific query. This approach expands the project's data capacity while maintaining response speed and quality. A visual indicator will appear in the UI once RAG is enabled, though the interaction remains identical—allowing you to query files and receive context-aware answers.</p>

<h3>Best Practices for Projects</h3>

<p>To get the most out of projects and keep the response quality high:</p>

<ul>
  <li><strong>Start Focused, Then Expand:</strong> Begin with a specific <strong>use case</strong> rather than trying to create one project for everything. You can always add more content and scale as you go.</li>

  <li><strong>Keep the Knowledge Base Current:</strong> Outdated documents lead to outdated responses. Review and update your project knowledge base periodically.</li>

  <li><strong>Write Clear Instructions:</strong> Be specific about what you want Claude to do. Vague instructions lead to inconsistent results.</li>

  <li><strong>Name Documents Descriptively:</strong> Use names like <code>Q4-2025-Sales-Report.pdf</code> rather than <code>report.pdf</code>, and group related files together. Claude uses filenames and folder <strong>proximity</strong> to understand relationships between documents.</li>

  <li><strong>Reference Documents by Name:</strong> When asking questions, you can mention specific documents to help Claude focus its search (e.g., <em>"Based on our Q3 report, what were the top customer concerns?"</em>).</li>
</ul>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Persistent Context:</strong> The underlying architecture that automatically loads project files and custom instructions into the context window of every new conversation within a project.</li>

  <li><strong>Workspace:</strong> A logical boundary or directory grouping files, instructions, chat history, and shared permissions dedicated to a specific theme or application.</li>

  <li><strong>Knowledge Base:</strong> The collection of reference documents, specifications, templates, and files uploaded to a project for the AI model to query.</li>

  <li><strong>RAG (Retrieval Augmented Generation):</strong> A framework where the AI model searches an external database or knowledge base for relevant passages first, then synthesizes its final answer based on those passages.</li>

  <li><strong>Workflow Automation:</strong> The programmatic execution of multi-step processes by the AI (e.g., generating templates from meeting transcripts) triggered by specific user inputs.</li>

  <li><strong>Permission Levels:</strong> The set of access rights (e.g., Can View, Can Edit, Owner) assigned to different users within a shared digital workspace.</li>

  <li><strong>Read-Only:</strong> A restriction level that permits users to read or query information without the ability to modify, delete, or upload data.</li>

  <li><strong>Use Case:</strong> A specific situation or scenario in which a product or service could be used to achieve a goal.</li>

  <li><strong>Proximity:</strong> The physical or semantic closeness of documents or code blocks within a system hierarchy, which RAG tools analyze to infer relationships.</li>
</ul>
`;
