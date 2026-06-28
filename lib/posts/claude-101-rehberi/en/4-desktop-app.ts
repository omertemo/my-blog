export const content = `
<h2>Claude Desktop App: Chat, Cowork, Code</h2>

<p>Claude’s desktop app offers three distinct working modes tailored to your immediate needs:</p>

<ul>
  <li><strong>Chat:</strong> The same conversational Claude you know from the web, enhanced with desktop integrations. This includes a floating <strong>Quick Entry</strong> window that triggers by double-tapping the <strong>Option</strong> key on Mac, allowing you to ask questions without leaving your active window. It also features screen capturing, window sharing, voice <strong>dictation</strong>, and <strong>desktop connectors</strong> that link local data (like Apple Notes) to your chat context.</li>

  <li><strong>Cowork:</strong> An <strong>agentic</strong> tool built for tasks requiring multi-step workflows and autonomous executions. Cowork can coordinate <strong>subagents</strong> in parallel to divide and conquer research reports, run folder-wide document updates, and execute scheduled tasks (e.g., pulling daily Slack/Calendar updates). It can browse the web via Chrome (<strong>browser use</strong>) or directly interact with desktop windows, clicking and typing to get work done (<strong>computer use</strong>). You can also hand off tasks to it remotely from your phone using <strong>Dispatch</strong>.</li>

  <li><strong>Code:</strong> Optimized specifically for software engineering workflows. It can run locally on a folder (<strong>local</strong>) or connect to a cloud-based <strong>GitHub</strong> repository (<strong>remote</strong>) for background tasks. It features three interaction modes to govern AI autonomy: <strong>Ask</strong> (proposes changes and awaits approval via visual diffs), <strong>Code</strong> (applies changes automatically but asks before running terminal commands), and <strong>Plan</strong> (outlines its full strategy beforehand). All changes are tracked via git integration.</li>
</ul>

<p><strong>Cowork</strong> and <strong>Code</strong> run on the same local engine altyapı (<strong>Claude Code</strong>), enabling them to perform long-running tasks and coordinate sub-agents locally on your machine.</p>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Agentic Systems:</strong> AI systems capable of taking independent actions—such as running compiler commands, reading/writing local files, and using external tools—to achieve a high-level goal rather than just generating text answers.</li>

  <li><strong>Sub-agents:</strong> Specialized AI instances spawned by a coordinator agent to parallelize tasks (e.g., one agent writes test suites while another refactors functions) and merge results into the final output.</li>

  <li><strong>Desktop Connectors:</strong> Integration bridges that securely link a local application, notes, or files on a user's physical machine to the AI assistant's context window.</li>

  <li><strong>Computer Use:</strong> An AI capability where the assistant reads screen pixels to navigate, click, type, and interact with the desktop operating system exactly like a human user.</li>

  <li><strong>Sandbox:</strong> A contained, secure local execution environment that limits the AI's file read/write permissions to specific folders, preventing unauthorized system changes.</li>

  <li><strong>Refactoring:</strong> The process of restructuring existing computer code—improving its readability, structure, and performance—without changing its external behavior.</li>

  <li><strong>Visual Diffs:</strong> A graphical user interface component showing the exact line-by-line differences (additions, deletions, edits) between two versions of code.</li>
</ul>
`;
