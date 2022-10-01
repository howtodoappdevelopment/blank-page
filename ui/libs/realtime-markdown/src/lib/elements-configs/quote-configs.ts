import { calcIndent } from '../utils/elements.utils';
import expand from 'emmet';
import { ElementRepresentationConfig, BlockParserType } from '../types';
import { duplicateIterable } from '../utils/iterator.utils';

export const quoteConfig: ElementRepresentationConfig = {
  id: 'quote',
  initialEmmet: ({ indent = 0, innerHtml = '&nbsp;' }) =>
    `p.et-quote.pl-${indent}>span.content{${innerHtml}}`,
  newLineEmmet: () => ``,
  signLeft: /^ *- \[([x ])]/g,
  extendOnNewLine: false,
};
export const quoteParser: BlockParserType = {
  id: 'quote',
  toHtml: (line, txtParsers, lineIterator) => {
    const regExp = /^( ?)+> .*$/gm;
    if (!regExp.test(line)) {
      return null;
    }

    const [sourceIterator, copyIterator] = duplicateIterable(lineIterator);
    lineIterator = sourceIterator;

    const indent = calcIndent(line);
    return expand(
      quoteConfig.initialEmmet({
        indent,
        innerHtml: line.replace(/^ *> /g, ''),
      })
    );
  },
};
