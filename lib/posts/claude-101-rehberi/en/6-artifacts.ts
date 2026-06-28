export const content = `
<h2>Creating with Artifacts</h2>

<p><strong>Artifacts</strong> are standalone, interactive outputs that Claude creates in a dedicated window alongside your conversation. Instead of getting a long block of code or text buried in the chat, you see your content rendered and ready to use—whether that's a working website, an interactive chart, or a document you can immediately download.</p>

<p>Claude automatically creates an artifact when content meets certain criteria:</p>

<ul>
  <li><strong>Significant and Self-Contained:</strong> Typically over 15 lines of complex code or documentation.</li>

  <li><strong>Iterative and Modifiable:</strong> Something you are likely to edit, iterate on, or reuse in the future.</li>

  <li><strong>Complex and Standalone:</strong> Content that represents a distinct asset that stands on its own without needing the surrounding conversation.</li>

  <li><strong>Persistent Reference:</strong> Assets that you will want to reference or use later in your workflow.</li>
</ul>

<h3>Common Artifact Types</h3>

<p>Claude can create different types of artifacts, each suited to different needs:</p>

<ul>
  <li><strong>Documents:</strong> Excel, PowerPoint, Word, Markdown, or PDF formats. Ideal for text-heavy content you want to export or continue editing, such as reports, meeting notes, or project plans.</li>

  <li><strong>Code Snippets:</strong> Working code in Python, JavaScript, C++, Go, and more, which you can copy or download to use in your own projects.</li>

  <li><strong>HTML Pages:</strong> Complete, standalone web pages with HTML, CSS, and JS. Perfect for landing pages, interactive forms, or quick prototypes.</li>

  <li><strong>SVG Images:</strong> Scalable vector graphics for logos and illustrations, rendering directly in the artifact window.</li>

  <li><strong>Mermaid Diagrams:</strong> Visualizations like flowcharts, sequence diagrams, and Gantt charts created simply by describing relationships.</li>

  <li><strong>React Components:</strong> Interactive UI elements featuring real functional logic (such as calculators, dashboards, or interactive charts) that respond directly to user input rather than being static mockups.</li>
</ul>

<h3>Creating Your First Artifact</h3>

<p>To create an artifact, describe what you want, and Claude will determine whether to present it as an artifact based on the size and structure of the content.</p>

<p>For example, you might say:</p>

<ul>
  <li><em>"Create a flowchart showing our customer onboarding process."</em> (Note: Claude may now generate visual diagrams like flowcharts as HTML using Imagine, in addition to code-based artifacts.)</li>

  <li><em>"Build an interactive dashboard that lets me input monthly expenses and see a breakdown."</em></li>

  <li><em>"Design a landing page for a productivity app with a hero section and feature list."</em></li>

  <li><em>"Write a project brief template I can reuse for new initiatives."</em></li>
</ul>

<p>If Claude doesn't automatically create an artifact when you expect one, you can explicitly ask: <em>"Create this as an artifact"</em> or <em>"Show me this in an artifact."</em></p>

<p>When Claude generates an artifact, it appears in a dedicated window to the right of your conversation. From here, you can:</p>

<ul>
  <li><strong>View Different Formats:</strong> Toggle between a preview (how it looks) and the underlying code.</li>

  <li><strong>Copy Content:</strong> Click the copy icon to grab the content for use elsewhere.</li>

  <li><strong>Download Files:</strong> Save the artifact as a file to your computer.</li>

  <li><strong>View Code:</strong> See exactly what Claude generated under the hood.</li>
</ul>

<h3>Sharing and Publishing Artifacts</h3>

<p>Once you've created something useful, you have several options for sharing it:</p>

<ul>
  <li><strong>Copy or Download:</strong> For personal use or sharing via other channels, use the copy or download buttons in the lower-right corner of the artifact window.</li>

  <li><strong>Share within Your Organization (Claude for Work):</strong> Team and Enterprise users can share artifacts internally with colleagues. The shared artifact stays within your organization and requires team identity <strong>authentication</strong> to access.</li>

  <li><strong>Publish Publicly:</strong> For free, Pro, and Max users, you can publish artifacts to make them accessible to anyone with the link. When you publish:
    <ul>
      <li>Only the selected version becomes public; your conversation history remains private.</li>
      <li>Anyone can view and interact with the artifact without needing a Claude account.</li>
      <li>Others can "<strong>remix</strong>" your artifact—opening it in their own Claude conversation to modify and build upon it.</li>
    </ul>
  </li>
</ul>

<p>To publish, click the "Share" or "Publish" button in the upper-right corner of the artifact. You can unpublish at any time by returning to that artifact and removing public access. Note that published artifacts are accessible to anyone with the link, but are not indexed by search engines, meaning they won't appear in Google search results.</p>

<h3>Tips for Getting the Most from Artifacts</h3>

<p>To extract the value from the Artifacts feature, consider these tips:</p>

<ul>
  <li><strong>Be Specific About What You Want:</strong> Instead of "Build a budget tracker," say "Build a monthly budget tracker where I can input expenses by category, see a pie chart breakdown, and get a warning when I'm over budget" to guide Claude towards more comprehensive designs.</li>

  <li><strong>Describe the End User:</strong> Identifying who will use the artifact informs its UI choices. "This flowchart is for new employees" yields a different design approach than "This flowchart is for the engineering team."</li>

  <li><strong>Iterate Incrementally:</strong> Ask Claude to add one feature or make one change at a time rather than requesting everything at once. This simplifies debugging and testing.</li>

  <li><strong>Request Artifacts When Needed:</strong> If you prompt for something substantial and Claude responds inline in the chat instead of spawning a new panel, explicitly request: <em>"Please create that as an artifact."</em></li>
</ul>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Standalone:</strong> An independent output or module that functions and provides value on its own without external dependencies or surrounding chat context.</li>

  <li><strong>Render:</strong> The process of compiling and displaying raw code (such as HTML/CSS/JS) into a visual, interactive interface in the browser.</li>

  <li><strong>Mockup:</strong> A static design model representing how a website or application will look, without containing functional logic.</li>

  <li><strong>Preview:</strong> A live visualization screen showing code-based user interfaces executed by the browser.</li>

  <li><strong>Toggle:</strong> A user interface control or action that switches between two alternative states or views.</li>

  <li><strong>Remix:</strong> The action of cloning another user's published artifact into one's own chat session to modify and extend it.</li>

  <li><strong>Unpublish:</strong> The process of removing public access to a previously published URL, restoring its visibility only to the author.</li>

  <li><strong>End User:</strong> The final target audience or individuals who will interact with and utilize a software product or design.</li>

  <li><strong>Incremental Iteration:</strong> The methodology of building software piece-by-piece, requesting individual additions or modifications sequentially rather than all at once.</li>
</ul>
`;
