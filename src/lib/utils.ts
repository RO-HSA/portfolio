import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type Options = {
  sanitize?: (html: string) => string;
  linkTargetBlank?: boolean;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenText(text: string, maxLength: number): string {
  return text.length >= maxLength ? text.slice(0, maxLength) + '...' : text;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function parseTextToHtml(input: string, opts: Options = {}): string {
  const { sanitize, linkTargetBlank = true } = opts;
  if (input == null) return '';

  let text = input.replace(/\r\n/g, '\n');

  const codeBlocks: string[] = [];
  text = text.replace(/```([\s\S]*?)```/g, (_, code) => {
    const idx = codeBlocks.push(code) - 1;
    return `@@CODEBLOCK_${idx}@@`;
  });

  text = escapeHtml(text);

  text = text.replace(
    /`([^`\n]+?)`/g,
    (_, code) => `<code>${escapeHtml(code)}</code>`,
  );

  text = text.replace(
    /\*\*(.+?)\*\*/g,
    (_, inner) => `<strong>${inner}</strong>`,
  );

  text = text.replace(/(^|\s)\*(?!\*)(.+?)\*(?=\s|$)/g, (_, pre, inner) => {
    return `${pre}<em>${inner}</em>`;
  });

  const target = linkTargetBlank
    ? ' target="_blank" rel="noopener noreferrer"'
    : '';
  text = text.replace(
    /https?:\/\/[^\s<]+/g,
    url => `<a href="${url}"${target}>${url}</a>`,
  );

  const paragraphs = text.split(/\n{2,}/).map(para =>
    para
      .split('\n')
      .map(line => (line === '' ? '' : line))
      .join('<br />'),
  );
  let html = paragraphs.map(p => `<p>${p}</p>`).join('');

  html = html.replace(/@@CODEBLOCK_(\d+)@@/g, (_, idxStr) => {
    const idx = Number(idxStr);
    const code = codeBlocks[idx] ?? '';
    return `<pre><code>${escapeHtml(code)}</code></pre>`;
  });

  if (sanitize) {
    try {
      return sanitize(html);
    } catch {
      return html;
    }
  }

  return html;
}
