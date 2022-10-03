import { BlockParserType, TxtParserType } from '../types';
import { textParser } from '../elements-configs/text-parser';
import { buildForkableIterator, ForkableIterator } from 'forkable-iterator';

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
  const lines = markdown.split('\n').map((line) => `${line}\n`);
  const linesIterator: ForkableIterator<string, string> = buildForkableIterator(
    lines[Symbol.iterator]()
  );
  let html: string | null = null;
  let nextItem = linesIterator.next();
  let { value, done } = nextItem as { value: string; done: boolean };
  while (!done) {
    // try parse txt block
    for (const { toHtml } of blockParsers) {
      html = toHtml(value, txtParsers, linesIterator);
      if (html) {
        yield html;
        break;
      }
    }

    // parse as regular txt
    const isRegularTxt = html === null;
    if (isRegularTxt) {
      yield textParser.toHtml(value, txtParsers, linesIterator) as string;
    }

    nextItem = linesIterator.next();
    value = nextItem.value as string;
    done = !!nextItem.done;
  }
}
