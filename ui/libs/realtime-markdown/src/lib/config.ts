import { BlockParserType } from './types';

export const config = {
  maxIndent: 10,
};

export const STATIC_PARSERS: BlockParserType[] = [];

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
//   id: 'precode',
//   regex: /^( ?)+(```)((?!```)(.|\n))+(```)$/gm,
//   toHtml: (innerHtml: string) =>
//     expand(
//       DYNAMIC_ELEMENTS_CONFIG['precode'].initialEmmet({
//         innerHtml: innerHtml.replace(/^( ?)+(```)\n|( ?)+(```)$/g, ''),
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

// precode: {
//   initialEmmet: ({ indent = 0, innerHtml = '<br />' }) =>
//     `pre.et-precode.pl-${indent}>code.et-precode>span.content{${innerHtml}}`,
//   newLineEmmet: () => '{&nbsp;}',
//   signTop: /^`{3}[a-z]* */g,
//   extendOnNewLine: true,
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
// quote:
