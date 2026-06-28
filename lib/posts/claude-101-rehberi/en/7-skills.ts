export const content = `
<h2>Working with Skills</h2>

<p>While executing tasks within workspaces and codebases, Claude supports modular expertise packages and integrations with external tools to handle specialized workflows.</p>

<p><strong>Skills</strong> are directories containing instructions, <strong>scripts</strong>, and template resources that Claude loads dynamically in the background to optimize performance on specialized tasks. Think of them as expertise packages designed to extend Claude's core capabilities in a repeatable way.</p>

<p>If you have used Claude to generate Excel sheets, PowerPoint slideshows, Word docs, or PDFs, you have already experienced Skills at work behind the scenes. However, the modular nature of Skills goes far beyond document generation. Custom Skills can codify complete repeatable workflows:</p>

<ul>
  <li><strong>Quarterly Variance Analysis:</strong> Automated templates designed to compare financial figures across quarters.</li>

  <li><strong>Brand Voice:</strong> Quality control rules ensuring text aligns with brand voice guidelines.</li>

  <li><strong>Compliance Checklist:</strong> Predefined checklists verifying code compliance against regulatory and security benchmarks.</li>
</ul>

<p>By deploying custom Skills, you guarantee that Claude executes complex, standard-dependent workflows with high rigor and reproducibility.</p>

<h3>Types of Skills</h3>

<p>There are two primary categories of Skills you will encounter:</p>

<ul>
  <li><strong>Anthropic Skills:</strong> Created and maintained by Anthropic. These include document creation capabilities for Excel, Word, PowerPoint, and PDF files. Anthropic Skills are available to paid users, and Claude invokes them when relevant.</li>

  <li><strong>Custom Skills:</strong> Custom skills built by you or your organization to automate specialized workflows and <strong>domain-specific</strong> tasks. For example, you can create a skill that enforces company brand guidelines on presentations, templates meeting notes in a specific format, or executes custom data analysis pipelines.</li>
</ul>

<h3>Enabling Skills</h3>

<p>Skills are currently available as a feature preview for users on Pro, Max, Team, and Enterprise plans. To use Skills, you'll need to have <strong>Code execution</strong> and <strong>file creation</strong> enabled, since Skills require Claude's secure <strong>sandboxed computing environment</strong> to function.</p>

<p>Here's how to enable Skills:</p>

<p>1. Navigate to <strong>Settings > Capabilities</strong></p>
<p>2. Ensure that <strong>Code execution and file creation</strong> is toggled on</p>
<p>3. Scroll to the <strong>Skills</strong> section</p>
<p>4. Toggle individual skills on or off as needed</p>

<p>For Enterprise plans, organization Owners must enable both Code execution and Skills in Admin settings before individual members can access them. For Team plans, this feature preview is enabled by default at the organization level.</p>

<p>Once enabled, you'll see available Skills listed in your settings, including Anthropic's built-in Skills and any custom Skills you've uploaded.</p>

<h3>Using Skills in Practice</h3>

<p>The workflow automatically handles skill selection based on your prompt.</p>

<p>Here are a few practical examples of prompts that will trigger Skills:</p>

<ul>
  <li><em>"Create an Excel spreadsheet tracking monthly expenses with formulas for totals."</em></li>

  <li><em>"Turn this meeting notes document into a PowerPoint presentation."</em></li>

  <li><em>"Generate a PDF report summarizing this data."</em></li>

  <li><em>"Build a financial model in Excel with scenario analysis."</em></li>
</ul>

<p>When Claude invokes a skill, you will see it mentioned inside Claude's chain of thought as it executes reasoning steps. The final output is a downloadable file that you can save locally or export directly to Google Drive.</p>

<h3>Creating Custom Skills</h3>

<p>While Anthropic's built-in Skills manage basic document creation tasks, the true potential of the feature comes from customising them to your workflows. Custom Skills let you program Claude with your brand guidelines (brand voice), templates, and specific ways of working.</p>

<p>To build a Custom Skill, you can describe requirements in a dialogue with Claude. The file structure is compiled autonomously:</p>

<p>1.  <strong>Define Your Purpose:</strong> Open a new chat and tell Claude what you want to create (e.g., <em>"I want to create a skill for writing quarterly business reviews (QBR)."</em>).</p>
<p>2.  <strong>Answer Claude's Questions:</strong> Claude will run a brief interview about your workflow, asking what the skill should execute, what defines a high-quality output, and in which contexts you plan to deploy it.</p>
<p>3.  <strong>Upload Reference Materials:</strong> If you have templates, style guidelines, brand assets, or past successful outputs, upload them as reference materials (<strong>reference materials</strong>).</p>
<p>4.  <strong>Save Your Skill:</strong> At the end of the conversation, Claude generates a structured skill package. Save it, and the skill is instantly listed under the <strong>Customize</strong> panel in the left sidebar.</p>

<p>Once saved, the Custom Skill is automatically invoked by Claude whenever you work on matching tasks. You can edit and improve the skill over time by simply asking Claude to update it.</p>

<h3>Skills vs. Projects</h3>

<p>You might be wondering—if both skills and projects can be used to provide more context to Claude, when should you use each? Think of it this way: <strong>projects store knowledge, skills perform tasks.</strong></p>

<ul>
  <li><strong>Projects are Knowledge Hubs:</strong> They hold the reference materials Claude needs to understand your work—project specifications, meeting notes, research documents. When files are uploaded to a project, Claude draws on that information across every conversation within that project.</li>

  <li><strong>Skills are Procedural Machines:</strong> They encode how Claude should execute a task—the specific steps, order of operations, and methodology you want followed every time.</li>
</ul>

<p>The two features complement each other: the project provides the *what (information/data)*, while the skill provides the *how (process/execution)*. For instance, a "customer call prep" <strong>skill</strong> might pull from customer profiles stored in a project's <strong>knowledge base</strong>.</p>

<table>
  <thead>
    <tr><th>Feature</th><th>Projects</th><th>Skills</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Purpose</strong></td><td>Store knowledge Claude references.</td><td>Define processes Claude executes.</td></tr>
    <tr><td><strong>Best for</strong></td><td>Long-term context, reference materials, team collaboration.</td><td>Repeatable workflows, multi-step tasks, consistent methodology.</td></tr>
    <tr><td><strong>Example</strong></td><td>Customer hub, research buddy, feedback generator.</td><td>Process guidelines (brand or legal), blog drafting, PDF creation.</td></tr>
    <tr><td><strong>Persistence</strong></td><td>Knowledge available across all chats in the project.</td><td>Instructions applied only when the skill is invoked.</td></tr>
  </tbody>
</table>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Skills:</strong> Modular folders of instructions and scripts loaded dynamically to equip the AI model with specialized, repeatable workflow capabilities.</li>

  <li><strong>Scripts:</strong> Execution files containing code (such as Python or JS) that runs sequentially without prior compilation, typically used for workflow automation.</li>

  <li><strong>Domain-Specific:</strong> Targeted or restricted to a particular field of expertise, industry segment, or organization-level rules.</li>

  <li><strong>Feature Preview:</strong> A release phase allowing users on select subscription plans to test new experimental capabilities before full commercial availability.</li>

  <li><strong>Sandboxed Environment:</strong> An isolated, secure compute area that restricts programs from interacting with host systems, personal files, or core resources.</li>

  <li><strong>Code Execution:</strong> The functional ability of an AI assistant to interpret, run, and extract output from code blocks dynamically.</li>
</ul>
`;
