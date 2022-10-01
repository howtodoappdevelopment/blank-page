import { BlockParserType, TxtParserType } from '../types';
import { textParser } from '../elements-configs/text-parser';

export const parseToHtml = (
  markdown: string,
  blockParsers: BlockParserType[] = [],
  txtParsers: TxtParserType[] = []
): string => [..._parseToHtml(markdown, blockParsers, txtParsers)].join('');

function* _parseToHtml(
  markdown: string,
  blockParsers: BlockParserType[] = [],
  txtParsers: TxtParserType[] = []
): Generator<string> {
  const linesIterator: IterableIterator<string> = markdown
    .split('\n')
    .map((line) => `${line}\n`)
    .values();
  let html: string | null = null;
  for (const line of linesIterator) {
    // try parse txt block
    for (const { toHtml } of blockParsers) {
      html = toHtml(line, txtParsers, linesIterator);
      if (html) {
        yield html;
        break;
      }
    }

    // parse as regular txt
    const isRegularTxt = html === null;
    if (isRegularTxt) {
      yield textParser.toHtml(line, txtParsers);
    }
  }
}
