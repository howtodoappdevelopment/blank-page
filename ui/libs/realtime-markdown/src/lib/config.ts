import { BlockParserType, TxtParserType } from './types';
import { aParsers } from './elements-configs/a-configs';
import { bParser } from './elements-configs/b-configs';
import { codeParser } from './elements-configs/code-configs';
import { headingsParser } from './elements-configs/headings-configs';
import { highlightParser } from './elements-configs/highlight-config';
import { iParser } from './elements-configs/i-configs';
import { imgParser } from './elements-configs/img-configs';
import { strikeParser } from './elements-configs/strike-configs';
import { precodeParser } from './elements-configs/precode-configs';
import { quoteParser } from './elements-configs/quote-configs';

export const config = {
  maxIndent: 10,
};

export const BLOCK_PARSERS: BlockParserType[] = [
  headingsParser,
  precodeParser,
  quoteParser,
];
export const TXT_PARSERS: TxtParserType[] = [
  ...aParsers,
  bParser,
  codeParser,
  highlightParser,
  iParser,
  imgParser,
  strikeParser,
];

// .et-* === .element-type-*
// export const DYNAMIC_ELEMENTS_CONFIG: ElementRepresentationConfig[] = [
//   aConfig,
//   bConfig,
//   highlightConfig
// ];
// {
//   id: 'checkbox',
//   regex: /^ *- \[([x ])] .*(\n|$)/gm,
//   toHtml: (innerHtml: string) =>
//     expand(
//       DYNAMIC_ELEMENTS_CONFIG['checkbox'].initialEmmet({
//         indent: calcIndent(innerHtml),
//         innerHtml: innerHtml.replace(/^ *- \[([x ])]/g, ''),
//         checked: !!innerHtml.match(/^ *- \[x]/g),
//       })
//     ),
// },
// {
//   id: 'ol',
//   regex: /^( ?)+\d+\. .*$/gm,
//   toHtml: (innerHtml: string) =>
//     expand(
//       DYNAMIC_ELEMENTS_CONFIG['ol'].initialEmmet({
//         indent: calcIndent(innerHtml),
//         innerHtml: innerHtml.replace(/^ *\d+\. /g, ''),
//       })
//     ),
// },
// {
//   id: 'ul',
//   regex: /^( ?)+[-+*] (?!\[([x ])]).*$/gm,
//   toHtml: (innerHtml: string) =>
//     expand(
//       DYNAMIC_ELEMENTS_CONFIG['ul'].initialEmmet({
//         indent: calcIndent(innerHtml),
//         innerHtml: innerHtml.replace(/^ *[-+*] /g, ''),
//       })
//     ),
// },

// {
//   id: 'text',
//   regex: /[^<>\n]+(?![^<]*>|[^<>]*<\/)$/gm,
//   toHtml: (innerHtml: string): string[] => {
//     return innerHtml
//       .split('\n')
//       .filter((html) => html.trim() !== '')
//       .map((html) => expand(`p{${html}}`));
//   },
// },
//

// ul: {
//   initialEmmet: ({ indent = 0, innerHtml = '&nbsp;' }) =>
//     `ul.pl-${indent}>li.et-ul>span.content{${innerHtml}}`,
//   signLeft: /^[+=*] /g,
//   extendOnNewLine: true,
// },
// ol: {
//   initialEmmet: ({ indent = 0, innerHtml = '&nbsp;' }) =>
//     `ol.pl-${indent}>li.et-ol>span.content{${innerHtml}}`,
//   signLeft: /^\d*\. /g,
//   extendOnNewLine: true,
// },
// checkbox: {
//   initialEmmet: ({ indent = 0, checked = false, innerHtml = '&nbsp;' }) =>
//     `p.et-checkbox.pl-${indent}>input[type="checkbox"${
//       checked ? ' checked.' : ''
//     }]+span.content{${innerHtml}}`,
//   newLineEmmet: ({ indent = 0, checked = false }) =>
//     `p.et-checkbox.pl-${indent}>input[type="checkbox"${
//       checked ? ' checked.' : ''
//     }]`,
//   signLeft: /^ *- \[([x ])]/g,
//   extendOnNewLine: false,
// },
// quote:
