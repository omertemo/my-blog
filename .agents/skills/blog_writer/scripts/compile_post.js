const fs = require('fs');
const path = require('path');

// Simple Markdown to HTML converter
function mdToHtml(md) {
  let html = md;
  
  // Escape HTML characters inside code blocks first
  const codeBlocks = [];
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
    const escapedCode = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    const placeholder = `__CODE_BLOCK_PLACEHOLDER_${codeBlocks.length}__`;
    codeBlocks.push(`<pre><code>${escapedCode}</code></pre>`);
    return placeholder;
  });

  // Convert inline code highlights
  const inlineCodes = [];
  html = html.replace(/`([^`\n]+)`/g, (match, code) => {
    const escapedCode = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    const placeholder = `__INLINE_CODE_PLACEHOLDER_${inlineCodes.length}__`;
    inlineCodes.push(`<code>${escapedCode}</code>`);
    return placeholder;
  });

  // Convert Headings
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h2>$1</h2>');

  // Convert Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Convert Blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Convert Lists (Simple parsing for bullet points)
  let inList = false;
  const lines = html.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* ')) {
      const content = lines[i].replace(/^[-*]\s+/, '').trim();
      lines[i] = `${inList ? '' : '<ul>'}\n  <li>${content}</li>`;
      inList = true;
    } else {
      if (inList) {
        lines[i] = '</ul>\n' + lines[i];
        inList = false;
      }
    }
  }
  if (inList) {
    lines.push('</ul>');
  }
  html = lines.join('\n');

  // Convert Tables
  let inTable = false;
  const tableLines = html.split('\n');
  for (let i = 0; i < tableLines.length; i++) {
    const trimmedLine = tableLines[i].trim();
    if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
      const cells = trimmedLine.split('|').map(c => c.trim()).filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
      if (trimmedLine.includes('---')) {
        tableLines[i] = '';
        continue;
      }
      if (!inTable) {
        inTable = true;
        const ths = cells.map(c => `<th>${c}</th>`).join('');
        tableLines[i] = `<table>\n  <thead>\n    <tr>${ths}</tr>\n  </thead>\n  <tbody>`;
      } else {
        const tds = cells.map(c => `<td>${c}</td>`).join('');
        tableLines[i] = `    <tr>${tds}</tr>`;
      }
    } else {
      if (inTable) {
        tableLines[i] = '  </tbody>\n</table>\n' + tableLines[i];
        inTable = false;
      }
    }
  }
  if (inTable) {
    tableLines.push('  </tbody>\n</table>');
  }
  html = tableLines.join('\n');

  // Convert Paragraphs
  html = html.split('\n').map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<h') || trimmed.startsWith('<pre') || trimmed.startsWith('</pre') || trimmed.startsWith('<ul') || trimmed.startsWith('</ul') || trimmed.startsWith('<li') || trimmed.startsWith('<blockquote') || trimmed.startsWith('__CODE_BLOCK_PLACEHOLDER') || trimmed.startsWith('__INLINE_CODE_PLACEHOLDER') || trimmed.startsWith('<table') || trimmed.startsWith('</table>') || trimmed.startsWith('<thead') || trimmed.startsWith('</thead>') || trimmed.startsWith('<tbody') || trimmed.startsWith('</tbody>') || trimmed.startsWith('<tr') || trimmed.startsWith('</tr>') || trimmed.startsWith('<th') || trimmed.startsWith('</th>') || trimmed.startsWith('<td') || trimmed.startsWith('</td>')) {
      return line;
    }
    return `<p>${trimmed}</p>`;
  }).join('\n');

  // Restore Code Blocks and Inline Code
  codeBlocks.forEach((block, idx) => {
    html = html.replace(`__CODE_BLOCK_PLACEHOLDER_${idx}__`, block);
  });
  inlineCodes.forEach((code, idx) => {
    html = html.replace(`__INLINE_CODE_PLACEHOLDER_${idx}__`, code);
  });

  return html.trim();
}

function parseYamlFrontmatter(content) {
  const meta = {};
  const lines = content.split('\n');
  let inYaml = false;
  let yamlLines = [];
  let bodyLines = [];
  
  for (const line of lines) {
    if (line.trim() === '---') {
      inYaml = !inYaml;
      continue;
    }
    if (inYaml) {
      yamlLines.push(line);
    } else {
      bodyLines.push(line);
    }
  }
  
  yamlLines.forEach(line => {
    const parts = line.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join(':').trim().replace(/^["']|["']$/g, '');
      if (val === 'true') meta[key] = true;
      else if (val === 'false') meta[key] = false;
      else if (!isNaN(val) && val !== '') meta[key] = Number(val);
      else meta[key] = val;
    }
  });
  
  return { meta, body: bodyLines.join('\n').trim() };
}

function run() {
  const slug = process.argv[2];
  if (!slug) {
    console.error('Please specify a slug. Example: node compile_post.js my-new-post');
    process.exit(1);
  }

  const workspaceRoot = path.resolve(__dirname, '../../../..');
  const draftsDir = path.join(workspaceRoot, '.agents/skills/blog_writer/drafts');
  const postsFilePath = path.join(workspaceRoot, 'lib/posts.ts');

  const trPath = path.join(draftsDir, `${slug}.tr.md`);
  const enPath = path.join(draftsDir, `${slug}.en.md`);

  if (!fs.existsSync(trPath) || !fs.existsSync(enPath)) {
    console.error(`Error: Draft files not found for slug "${slug}". Make sure both .tr.md and .en.md exist in drafts folder.`);
    process.exit(1);
  }

  const trContent = fs.readFileSync(trPath, 'utf8');
  const enContent = fs.readFileSync(enPath, 'utf8');

  const trParsed = parseYamlFrontmatter(trContent);
  const enParsed = parseYamlFrontmatter(enContent);

  const trMeta = trParsed.meta;
  const enMeta = enParsed.meta;

  const trHtml = mdToHtml(trParsed.body);
  const enHtml = mdToHtml(enParsed.body);

  // Read Time calculation: ~150 words per minute + padding for code blocks
  const wordCount = trParsed.body.split(/\s+/).length + enParsed.body.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 2 / 160)); // divide by 2 for average per language

  const postObject = {
    slug: slug,
    title: {
      tr: trMeta.title || trMeta.title_tr || '',
      en: enMeta.title || enMeta.title_en || ''
    },
    desc: {
      tr: trMeta.desc || trMeta.desc_tr || '',
      en: enMeta.desc || enMeta.desc_en || ''
    },
    tag: trMeta.tag || 'General',
    tagVariant: trMeta.tagVariant || 'cyan',
    emoji: trMeta.emoji || '🧭',
    readTime: trMeta.readTime || readTime,
    date: trMeta.date || new Date().toISOString().split('T')[0],
    published: trMeta.published === undefined ? false : trMeta.published,
    content: {
      tr: trHtml,
      en: enHtml
    }
  };

  // Convert postObject to formatted TypeScript string representation
  // We use backticks and safely escape backticks inside html content
  const escapeBackticks = (str) => str.replace(/`/g, '\\`').replace(/\${/g, '\\${');
  
  const postString = `  {
    slug: "${postObject.slug}",
    title: {
      tr: "${postObject.title.tr.replace(/"/g, '\\"')}",
      en: "${postObject.title.en.replace(/"/g, '\\"')}",
    },
    desc: {
      tr: "${postObject.desc.tr.replace(/"/g, '\\"')}",
      en: "${postObject.desc.en.replace(/"/g, '\\"')}",
    },
    tag: "${postObject.tag}",
    tagVariant: "${postObject.tagVariant}",
    emoji: "${postObject.emoji}",
    readTime: ${postObject.readTime},
    date: "${postObject.date}",
    published: ${postObject.published},
    content: {
      tr: \`
${escapeBackticks(postObject.content.tr)}
      \`,
      en: \`
${escapeBackticks(postObject.content.en)}
      \`,
    },
  }`;

  let fileContent = fs.readFileSync(postsFilePath, 'utf8');

  // We find "export const posts: Post[] = [" and check if slug already exists
  const slugRegex = new RegExp(`slug:\\s*["']${slug}["']`, 'i');
  
  if (slugRegex.test(fileContent)) {
    console.log(`Post with slug "${slug}" already exists. Replacing existing entry...`);
    // Find the array index start and end for the existing post.
    // Since posts is structured, we can find the matching object block.
    // A simplified approach is to split by individual post objects in the array.
    // Or we can rebuild/replace using string indices.
    // Let's parse the file contents, search for the object containing the slug, and replace the block.
    const startOfPostsIndex = fileContent.indexOf('export const posts: Post[] = [');
    if (startOfPostsIndex === -1) {
      console.error('Could not find posts array in lib/posts.ts');
      process.exit(1);
    }
    
    // Simple parser: find where the specific slug starts, locate its enclosing braces { ... }
    const slugIndex = fileContent.search(slugRegex);
    // Move backwards to find the opening '{' of the post object
    let openBraceIndex = slugIndex;
    let braceCount = 0;
    while (openBraceIndex >= startOfPostsIndex) {
      if (fileContent[openBraceIndex] === '{') {
        braceCount++;
        // If we found the opening brace of this post item (which sits inside the main array)
        if (braceCount === 1) {
          break;
        }
      }
      if (fileContent[openBraceIndex] === '}') {
        braceCount--;
      }
      openBraceIndex--;
    }

    // Move forwards to find the matching closing '}' of the post object
    let closeBraceIndex = slugIndex;
    braceCount = 0;
    while (closeBraceIndex < fileContent.length) {
      if (fileContent[closeBraceIndex] === '{') {
        braceCount--;
      }
      if (fileContent[closeBraceIndex] === '}') {
        braceCount++;
        if (braceCount === 1) {
          // include the comma if there is one after it
          if (fileContent[closeBraceIndex + 1] === ',') {
            closeBraceIndex++;
          }
          break;
        }
      }
      closeBraceIndex++;
    }

    if (openBraceIndex !== -1 && closeBraceIndex !== -1) {
      const before = fileContent.substring(0, openBraceIndex);
      const after = fileContent.substring(closeBraceIndex + 1);
      fileContent = before + postString + ',' + after;
    } else {
      console.error('Could not find boundaries of the existing post item to replace.');
      process.exit(1);
    }
  } else {
    console.log(`Adding new post with slug "${slug}" to posts array...`);
    const insertIndex = fileContent.indexOf('export const posts: Post[] = [') + 'export const posts: Post[] = ['.length;
    if (insertIndex === -1) {
      console.error('Could not find posts array in lib/posts.ts');
      process.exit(1);
    }
    const before = fileContent.substring(0, insertIndex);
    const after = fileContent.substring(insertIndex);
    fileContent = before + '\n' + postString + ',' + after;
  }

  fs.writeFileSync(postsFilePath, fileContent, 'utf8');
  console.log(`Successfully compiled and saved post "${slug}" to lib/posts.ts`);
}

run();
