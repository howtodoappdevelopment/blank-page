import { BlockConfig, BlockParserType } from '../types';
import { calcIndent } from '../utils/elements.utils';

export const P_ID = 'p';
export const pConfig: BlockConfig = {
  id: P_ID,
  toEmmet: ({ indent = 0, innerHtml = '&nbsp;' }) =>
    `p.et-${P_ID}.ml-${indent}>span.content{'${innerHtml}'}`,
  extendOnNewLine: false,
};
export const textParser: BlockParserType = {
  id: P_ID,
  toHtml: (line: string, txtParsers): string => {
    for (const { toHtml } of txtParsers) {
      line = toHtml(line);
    }

    const indent = calcIndent(line);
    let content = line.replace('\n', '');
    content = content.trim() === '' ? '&nbsp;' : content;
    content = content.replace(new RegExp(`^ {${indent * 2}}`, 'g'), '');
    return `<p class="et-${P_ID} ml-${indent}"><span class="content">${content}</span></p>`;
  },
};
