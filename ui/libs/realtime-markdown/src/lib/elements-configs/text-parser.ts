import { BlockParserType } from '../types';

export const textParser: BlockParserType = {
  id: 'p',
  toHtml: (line: string, txtParsers): string => {
    for (const { toHtml } of txtParsers) {
      line = toHtml(line);
    }

    return `<p>${line.replace('\n', '')}</p>`;
  },
};
