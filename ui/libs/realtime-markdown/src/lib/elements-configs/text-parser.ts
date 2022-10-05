import { BlockParserType } from '../types';
import { calcIndent } from '../utils/elements.utils';

export const textParser: BlockParserType = {
  id: 'p',
  toHtml: (line: string, txtParsers): string => {
    for (const { toHtml } of txtParsers) {
      line = toHtml(line);
    }

    const indent = calcIndent(line);
    let content = line.replace('\n', '');
    content = content.trim() === '' ? '&nbsp;' : content;
    content = content.replace(new RegExp(`^ {${indent * 2}}`, 'g'), '');
    return `<p class="pl-${indent}">${content}</p>`;
  },
};
