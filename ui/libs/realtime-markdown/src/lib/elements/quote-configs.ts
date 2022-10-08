import { calcIndent } from '../utils/elements.utils';
import expand from 'emmet';
import { BlockConfig, BlockParserType, TxtParserType } from '../types';
import { fork } from 'forkable-iterator';

export const QUOTE_ID = 'quote';
export const quoteConfig: BlockConfig = {
  id: QUOTE_ID,
  toEmmet: ({ indent = 0, innerHtml = '&nbsp;' }) =>
    `p.et-${QUOTE_ID}.ml-${indent}>span.content{${innerHtml}}`,
  newLineToEmmet: () => ``,
  extendOnNewLine: false,
};
export const quoteParser: BlockParserType = {
  id: QUOTE_ID,
  toHtml: (line, txtParsers, linesIterator) => {
    if (!_isQuote(line)) {
      return null;
    }

    const iteratorDuplicate = fork(linesIterator);

    let parsed = '';
    let lineToMatch = line.replace('\n', '');
    let content = '';
    let lastIndent = calcIndent(lineToMatch);
    let currentIndent = -1;
    let parsedLines = -1;
    let isQuoteLine = true;
    while (isQuoteLine) {
      currentIndent = calcIndent(lineToMatch);
      if (lastIndent !== currentIndent) {
        parsed += _getParsedQuoteElement(content, lastIndent, txtParsers);
        content = '';
      }

      content +=
        (content !== '' ? '<br>' : '') +
        lineToMatch.trimLeft().replace('> ', '');
      lastIndent = currentIndent;
      lineToMatch =
        (iteratorDuplicate.next().value || null)?.replace('\n', '') || '';
      isQuoteLine = _isQuote(lineToMatch);
      parsedLines++;
    }

    parsed += _getParsedQuoteElement(content, currentIndent, txtParsers);

    // move main iterator to skip already parsed lines
    if (parsedLines > 0) {
      for (let i = 0; i < parsedLines; i++) {
        linesIterator.next();
      }
    }

    return parsed;
  },
};

const _isQuote = (line: string | undefined) => !!line?.trim()?.startsWith('> ');

const _getParsedQuoteElement = (
  innerHtml: string,
  indent: number,
  txtParsers: TxtParserType[]
) => {
  for (const { toHtml } of txtParsers) {
    innerHtml = toHtml(innerHtml);
  }

  return expand(
    quoteConfig.toEmmet({
      indent,
      innerHtml,
    })
  );
};
