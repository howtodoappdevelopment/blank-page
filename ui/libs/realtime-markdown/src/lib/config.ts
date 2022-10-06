import {
  BlockParserType,
  ElementRepresentationConfig,
  TxtParserType,
} from './types';
import { aConfig, aParsers } from './elements/a-configs';
import { bConfig, bParser } from './elements/b-configs';
import { codeConfig, codeParser } from './elements/code-configs';
import {
  h1Config,
  h2Config,
  h3Config,
  h4Config,
  h5Config,
  h6Config,
  headingsParser,
} from './elements/headings-configs';
import { highlightConfig, highlightParser } from './elements/highlight-config';
import { iConfig, iParser } from './elements/i-configs';
import { imgConfig, imgParser } from './elements/img-configs';
import { strikeConfig, strikeParser } from './elements/strike-configs';
import { precodeConfig, precodeParser } from './elements/precode-configs';
import { quoteConfig, quoteParser } from './elements/quote-configs';

export const config = {
  maxIndent: 10,
};

export const ELEMENTS_CONFIGS: {
  [uid: string]: ElementRepresentationConfig;
} = [
  h1Config,
  h2Config,
  h3Config,
  h4Config,
  h5Config,
  h6Config,
  precodeConfig,
  quoteConfig,
  imgConfig,
  aConfig,
  bConfig,
  codeConfig,
  highlightConfig,
  iConfig,
  strikeConfig,
]
  .map((config) => ({ [config.id]: config }))
  .reduce((acc, config) => ({ ...acc, ...config }), {});

export const BLOCK_PARSERS: BlockParserType[] = [
  headingsParser,
  precodeParser,
  quoteParser,
];
export const TXT_PARSERS: TxtParserType[] = [
  imgParser,
  ...aParsers,
  bParser,
  codeParser,
  highlightParser,
  iParser,
  strikeParser,
];

// .et-* === .element-type-*
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
