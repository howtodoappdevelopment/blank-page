import { ParseBlockMarkdownToHtml, toOuterHtmlFunction } from '../types';
import { calcIndent } from '../utils/elements.utils';

export const P_ID = 'p';
export const toOuterHtml: toOuterHtmlFunction = ({
  indent = 0,
  innerHtml = '&nbsp;',
}) =>
  `<p class="et-${P_ID} ml-${indent}"><span class="content">${innerHtml}</span></p>`;

export const paragraphStaticParser: ParseBlockMarkdownToHtml = (
  line: string,
  txtParsers
): string => {
  for (const parseMarkdownToHtml of txtParsers) {
    line = parseMarkdownToHtml(line);
  }

  const indent = calcIndent(line);
  let content = line.replace('\n', '');
  content = content.trim() === '' ? '&nbsp;' : content;
  content = content.replace(new RegExp(`^ {${indent * 2}}`, 'g'), '');
  return toOuterHtml({ indent, innerHtml: content });
};
