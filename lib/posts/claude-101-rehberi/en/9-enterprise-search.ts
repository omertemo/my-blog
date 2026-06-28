export const content = `
<h2>Enterprise Search</h2>

<p>Enterprise Search adds a dedicated <strong>"Ask {Your Org Name}"</strong> option to your sidebar. This is designed specifically for finding and synthesizing knowledge buried across your company's tools and data sources.</p>

<p>Think of Enterprise Search as a pre-built Project for your entire organization — your company's knowledge base is already loaded, so you can query to get context-aware responses.</p>

<p>Unlike regular chats with connectors enabled, Enterprise Search is configured for information gathering, using custom instructions.</p>

<h3>What can you ask?</h3>

<p>Enterprise Search is particularly valuable for questions that span multiple sources or require synthesizing information from across your organization. Here are some common use cases:</p>

<ul>
  <li><strong>Getting up to speed:</strong>
    <ul>
      <li><em>"What happened yesterday while I was out?"</em></li>
      <li><em>"Summarize key updates across the business from the last week."</em></li>
      <li><em>"What are the current blockers on the Platform project?"</em></li>
    </ul>
  </li>
  <li><strong>Policy and process questions:</strong>
    <ul>
      <li><em>"What is our company's remote work policy?"</em></li>
      <li><em>"How do I submit an expense report?"</em></li>
      <li><em>"What's the process for requesting time off?"</em></li>
    </ul>
  </li>
  <li><strong>Research and analysis:</strong>
    <ul>
      <li><em>"What are the main reasons customers cite for choosing competitors?"</em></li>
      <li><em>"Summarize discussions about the Q4 product roadmap."</em></li>
      <li><em>"Find information about our customer onboarding process."</em></li>
    </ul>
  </li>
  <li><strong>Onboarding new team members:</strong>
    <ul>
      <li><em>"How does our authentication system work?"</em></li>
      <li><em>"Who should I talk to about learning the billing system?"</em></li>
      <li><em>"What tools does the engineering team use for deployment?"</em></li>
    </ul>
  </li>
  <li><strong>Performance and project tracking:</strong>
    <ul>
      <li><em>"Find discussions and documents related to the marketing campaign."</em></li>
      <li><em>"What were the key decisions from last week's leadership meetings?"</em></li>
      <li><em>"Summarize team contributions to the Infrastructure initiative."</em></li>
    </ul>
  </li>
</ul>

<p>When you ask a question, Claude searches across all your connected tools—such as SharePoint documents, Slack conversations, Gmail threads, and Google Drive files—and synthesizes information into a response. Plus, it <strong>cites its sources</strong> so you can get the context.</p>

<h3>Setting Up Enterprise Search</h3>

<p>Enterprise Search requires a two-step setup process: first an admin configures it for the organization, then individual users authenticate with their personal accounts.</p>

<h4>For Admins (Owners)</h4>

<p>The Enterprise Search project is enabled by default for all Team and Enterprise organizations, but an Owner needs to complete the initial setup before team members can use it:</p>
<p>1. Click <strong>"Ask Your Org"</strong> in the left sidebar.</p>
<p>2. Click <strong>"Set up for your org"</strong> to continue (or "Disable" to turn the feature off).</p>
<p>3. Connect your organization's tools. You'll be required to choose a connector for Documents (like Google Drive or SharePoint) and Chat (like Slack or Microsoft Teams). Email is recommended but optional.</p>
<p>4. Click <strong>"+ Add more"</strong> to set up any additional tools your team needs.</p>
<p>5. Customize the project name. Whatever you enter will appear as <em>"Ask [Name]"</em> in everyone's sidebar.</p>
<p>6. Add a description, then click <strong>"Finish set up."</strong></p>

<p>Once setup is complete, the project becomes available to all members of your organization.</p>

<h4>For Users</h4>

<p>After an admin has set up Enterprise Search, you'll see the <em>"Ask {Org Name}"</em> project starred in your sidebar. Here's how to get started:</p>
<p>1. Click on the project in your sidebar.</p>
<p>2. Follow the guided onboarding flow to connect to the recommended services.</p>
<p>3. Authenticate with each service you want to search (Slack, Google, Microsoft 365, etc.).</p>
<p>4. Start asking Claude questions about your organization's knowledge.</p>

<p>The more connectors you enable, the more comprehensive your search results will be. You can always add more connectors later by clicking "Connect" in the project's Instructions section.</p>

<h4>Is this safe?</h4>

<p>Enterprise Search only shows what you already have permission to access in the original connected tool. Plus, your conversations remain private, and your connected data isn't indexed or stored separately.</p>

<h3>Key Concepts</h3>

<ul>
  <li><strong>Blocker:</strong> An issue or obstacle that completely stops or delays progress on a project task.</li>

  <li><strong>Onboarding:</strong> The integration and training process of a new employee or customer to help them adapt to a new system or environment.</li>

  <li><strong>Cite Sources:</strong> Providing reference links or locations for documents and messages that the model utilized to generate its answer.</li>

  <li><strong>Owner:</strong> An administrative role within a software or platform organization responsible for managing settings, billing, and overall permissions.</li>

  <li><strong>Guided Onboarding:</strong> An interactive, step-by-step guided flow to facilitate initial configuration and connection setup for a user.</li>

  <li><strong>Indexed:</strong> The process of compiling data from files and messages into a search index or structured database to enable fast query execution.</li>
</ul>
`;
