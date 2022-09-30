import { calcIndent } from '../utils/elements.utils';
import expand from 'emmet';

export const quoteConfig = {
  initialEmmet: ({ indent = 0, innerHtml = '&nbsp;' }) =>
    `p.et-quote.pl-${indent}>span.content{${innerHtml}}`,
  newLineEmmet: () => ``,
  signLeft: /^ *- \[([x ])]/g,
  extendOnNewLine: false,
};
export const quoteParser = {
  id: 'quote',
  regex: /^( ?)+> .*$/gm,
  toHtml: (innerHtml: string) =>
    expand(
      quoteConfig.initialEmmet({
        indent: calcIndent(innerHtml),
        innerHtml: innerHtml.replace(/^ *> /g, ''),
      })
    ),
};
