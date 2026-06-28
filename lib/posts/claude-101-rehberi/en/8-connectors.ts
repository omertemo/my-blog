export const content = `
<h2>Connecting Your Tools</h2>

<p><strong>Connectors</strong> give Claude access to the tools, data, and context that you use every day. Instead of starting every conversation from scratch, Claude can work directly with your actual information.</p>

<p>Connectors allow Claude to read information and perform actions on your behalf. Depending on the connector and permissions you grant, Claude can search your files, retrieve documents, analyze data, create new content, update records, and execute tasks across your connected applications—all from within your conversation.</p>

<p>There are two types of connectors:</p>
<ul>
  <li><strong>Web Connectors:</strong> Link Claude to cloud services like Google Drive, Notion, Slack, and Asana.</li>

  <li><strong>Desktop Extensions:</strong> Run locally on your computer through the Claude Desktop app, giving Claude access to local files and native applications.</li>
</ul>

<p>The Model Context Protocol (MCP) powers connectors. Model Context Protocol (MCP) is an open-source, universal standard that allows AI models to connect to different applications through a single, consistent interface. This open standard means developers can build connectors for any tool, and those connectors work with Claude.</p>

<h3>Finding and Connecting Tools</h3>

<p>Anthropic maintains a directory of recommended connectors at [claude.ai/directory](https://claude.ai/directory). The directory is organized into two tabs:</p>
<ul>
  <li><strong>Web:</strong> Cloud services and applications (Gmail, Notion, Slack, Asana, Linear, Stripe, and many more).</li>

  <li><strong>Desktop Extensions:</strong> Local tools that run on your computer through the Claude Desktop app.</li>
</ul>

<p>To browse available connectors, you can also click the <code>+</code> button in the lower left of the chat window, then select <strong>Connectors</strong>.</p>

<h4>Setting Up a Web Connector</h4>

<p>Here's how to connect a cloud service:</p>
<p>1.  <strong>Find the connector:</strong> Navigate to <code>claude.ai/directory</code>, or click <code>+</code> > <strong>Connectors</strong> in any chat.</p>
<p>2.  <strong>Click Connect:</strong> Select the connector you want to add.</p>
<p>3.  <strong>Authenticate:</strong> You'll be redirected to the service's login page. Sign in with your existing credentials.</p>
<p>4.  <strong>Grant permissions:</strong> Review the specific permissions Claude is requesting, then authorize access.</p>
<p>5.  <strong>Test the connection:</strong> Return to Claude and try a simple request, like <em>"Can you access my [tool name]?"</em>.</p>

<p>Once connected, Claude can search, read, and in some cases take actions within that service—depending on the permissions you've granted.</p>

<h4>Desktop Extensions</h4>

<p>Desktop extensions require the Claude Desktop app rather than the web interface. These extensions let Claude interact with local applications, your file system, and native features on macOS or Windows.</p>

<p>Some desktop extensions include:</p>
<ul>
  <li><strong>Local file access:</strong> Reading and organizing documents.</li>

  <li><strong>Browser control:</strong> Automated web tasks.</li>

  <li><strong>Native application integration:</strong> Like Figma for design work.</li>
</ul>

<p>To install a desktop extension:</p>
<p>1.  Download and install the Claude Desktop app.</p>
<p>2.  Open the app and navigate to <strong>Settings > Extensions</strong>.</p>
<p>3.  Browse available extensions and click <strong>Install</strong>.</p>
<p>4.  Follow any additional setup steps specific to that extension.</p>

<h3>Using Connectors in Your Work</h3>

<p>Once you've connected your tools, Claude considers them when responding to your requests. Here are some practical ways to use connected tools:</p>

<h4>Project Management (Asana, Linear, Jira)</h4>
<ul>
  <li><em>"What are my highest priority tasks due this week?"</em></li>

  <li><em>"Create a new task for reviewing the Q4 budget proposal"</em></li>

  <li><em>"Summarize the status of our product launch project"</em></li>
</ul>

<h4>Communication (Slack, Gmail)</h4>
<ul>
  <li><em>"Find the email thread where we discussed the vendor contract"</em></li>

  <li><em>"Draft a reply to the latest message in the #marketing channel"</em></li>

  <li><em>"What did the team decide about the timeline in yesterday's discussion?"</em></li>
</ul>

<h4>Documentation (Notion, Google Drive, Confluence)</h4>
<ul>
  <li><em>"Search our documentation for our brand voice guidelines"</em></li>

  <li><em>"Summarize the meeting notes from last week's product review"</em></li>

  <li><em>"What does our style guide say about using contractions?"</em></li>
</ul>

<h4>Business Tools (Stripe, PayPal, Salesforce)</h4>
<ul>
  <li><em>"Show me revenue trends for the past quarter"</em></li>

  <li><em>"What's the status of the Acme Corp opportunity?"</em></li>

  <li><em>"List recent transactions over $1,000"</em></li>
</ul>

<h3>Security and Permissions</h3>

<p>When you connect Claude to external services, you're granting it access to read—and sometimes modify—data within those services. Here are some important considerations:</p>

<ul>
  <li><strong>Scoped Access:</strong> Permissions are specific to what the connector needs and you can toggle individual permissions on and off within each application's menu.</li>

  <li><strong>Claude Sees What You See:</strong> Claude can only access data you have access to. Connecting your work email doesn't give Claude access to your CEO's inbox—only your own.</li>

  <li><strong>Revocable at Any Time:</strong> You can disconnect a service through Claude's settings or through the third-party service's security settings. Just as with Skills, you can also find or build custom connectors. Exercise caution — only install connectors from trusted sources.</li>
</ul>

<h3>Claude Interfaces and Integration Matrix</h3>

<p>You are not limited to the desktop application when integrating Claude into your workflows. Anthropic provides a diverse ecosystem of interfaces tailored to different use cases:</p>

<table>
  <thead>
    <tr><th>Interface / Integration</th><th>Core Capabilities / Tasks</th><th>Target Platforms</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Claude.ai</strong></td><td>General tasks, research, writing, analysis, file creation.</td><td>Web, desktop, and mobile apps.</td></tr>
    <tr><td><strong>Claude Code</strong></td><td>Software development, codebase navigation, git workflows.</td><td>Terminal / command line, IDE, or your browser.</td></tr>
    <tr><td><strong>Claude Cowork</strong></td><td>Complex, multi-step tasks: research briefs, document creation, file organization, data analysis.</td><td>Desktop (and mobile apps via Dispatch).</td></tr>
    <tr><td><strong>Slack Integration</strong></td><td>Team collaboration, meeting prep, quick answers in context.</td><td>Slack workspace.</td></tr>
    <tr><td><strong>Claude for Excel</strong></td><td>Spreadsheet analysis, financial modeling, formula debugging.</td><td>Microsoft Excel sidebar.</td></tr>
    <tr><td><strong>Claude for PowerPoint</strong></td><td>Slide creation, presentation editing, formatting and design.</td><td>Microsoft PowerPoint sidebar.</td></tr>
    <tr><td><strong>Claude for Chrome</strong></td><td>Web research, email management, browser automation.</td><td>Chrome browser sidebar.</td></tr>
  </tbody>
</table>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Connectors:</strong> Data integration pathways that enable Claude to directly access external tools, databases, and cloud applications.</li>

  <li><strong>Model Context Protocol (MCP):</strong> An open-source, universal integration standard that enables AI models to communicate with different applications and data sources via a single, consistent protocol.</li>

  <li><strong>Desktop Extensions:</strong> Local connectors that run via the Claude Desktop app, giving the model access to files and operating system capabilities on the local machine.</li>

  <li><strong>Authenticate:</strong> The process of verifying the identity of a user or system, enabling secure log-in to a service.</li>

  <li><strong>Grant Permissions:</strong> Assigning access rights and boundaries to an application or model, allowing it to perform operations on specific data.</li>

  <li><strong>Browser Control:</strong> The programmatic ability of an AI system to guide a local web browser to navigate, collect data, or perform form submissions autonomously.</li>

  <li><strong>Opportunity:</strong> A structured data entry in sales and CRM platforms representing a potential sale or commercial deal with a client.</li>

  <li><strong>Scoped Access:</strong> A restriction level where an integration can only access pre-authorized and narrow parts of a system rather than the full directory.</li>

  <li><strong>Revocable:</strong> The quality of an integration's access rights that permits the user to permanently cancel permissions at any time.</li>
</ul>
`;
