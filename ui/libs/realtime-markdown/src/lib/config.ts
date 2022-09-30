import './realtime-markdown.css';
import { ElementRepresentationConfig, ParserType } from './types';
import { aConfig, aParsers } from './parsers/a-configs';
import { bConfig, bParser } from './parsers/b-configs';

export const config = {
  maxIndent: 10,
};

export const STATIC_PARSERS: ParserType[] = [...aParsers, bParser];

// .et-* === .element-type-*
export const DYNAMIC_ELEMENTS_CONFIG: ElementRepresentationConfig[] = [
  aConfig,
  bConfig,
];

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
//   id: 'heading',
//   regex: /^#{1,6} .*$/gm,
//   toHtml: (innerHtml: string) =>
//     expand(
//       DYNAMIC_ELEMENTS_CONFIG[`h${calcHeadingSize(innerHtml)}`].initialEmmet({
//         innerHtml: innerHtml.replace(/^#{1,6} /g, ''), // .replace(/^<[^>]*>[^>]*<\/[^>]*>/g, '')
//       })
//     ),
// },
// {
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
//   id: 'quote',
//   regex: /^( ?)+> .*$/gm,
//   toHtml: (innerHtml: string) =>
//     expand(
//       DYNAMIC_ELEMENTS_CONFIG['quote'].initialEmmet({
//         indent: calcIndent(innerHtml),
//         innerHtml: innerHtml.replace(/^ *> /g, ''),
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
// {
//   id: 'code',
//   regex: /( |^|>)`[^ ][^`]+[^ ]`( |$|<)/gm,
//   toHtml: (innerHtml: string) => {
//     const leftSign = innerHtml.match(/^[ >]/g) || '';
//     const rightSign = innerHtml.match(/[ <]$/g) || '';
//     innerHtml = innerHtml.trim().replace(/^[ >]?`|`[ <]?$/g, '');
//     const emmet = DYNAMIC_ELEMENTS_CONFIG['code'].initialEmmet({ innerHtml });
//     return `${leftSign}${expand(emmet)}${rightSign}`;
//   },
// },
// {
//   id: 'i',
//   regex: /( |^|>)\*[^*]*\*( |$|<)/gm,
//   toHtml: (innerHtml: string) => {
//     const leftSign = innerHtml.match(/^[ >]/g) || '';
//     const rightSign = innerHtml.match(/[ <]$/g) || '';
//     innerHtml = innerHtml.replace(/^[ >]?\*|\*[ <]$/g, '');
//     const emmet = DYNAMIC_ELEMENTS_CONFIG['i'].initialEmmet({
//       innerHtml,
//     });
//     return `${leftSign}${expand(emmet)}${rightSign}`;
//   },
// },
//
// {
//   id: 'img',
//   regex: /( |^|>)!\[[^[\]]*]\([^()]*\)( |$|<)/gm,
//   toHtml: (innerHtml: string) => {
//     const leftSign = innerHtml.match(/^[ >]/g) || '';
//     const rightSign = innerHtml.match(/[ <]$/g) || '';
//     const alt = (innerHtml.match(/\[.*]/g) as RegExpMatchArray)[0].replace(
//       /[\\[\]]/g,
//       ''
//     );
//     const src = (innerHtml.match(/\(.*\)/g) as RegExpMatchArray)[0].replace(
//       /[()]/g,
//       ''
//     );
//     const emmet = DYNAMIC_ELEMENTS_CONFIG['img'].initialEmmet({
//       alt,
//       src,
//     });
//     return `${leftSign}${expand(emmet)}${rightSign}`;
//   },
// },
// {
//   id: 'strike',
//   regex: /( |^|>)~~[^~]*~~( |$|<)/gm,
//   toHtml: (innerHtml: string) => {
//     const leftSign = innerHtml.match(/^[ >]/g) || '';
//     const rightSign = innerHtml.match(/[ <]$/g) || '';
//     innerHtml = innerHtml.replace(/(( |^|>)~~|~~( |$|<))/g, '');
//     const emmet = DYNAMIC_ELEMENTS_CONFIG['strike'].initialEmmet({
//       innerHtml,
//     });
//     return `${leftSign}${expand(emmet)}${rightSign}`;
//   },
// },
// {
//   id: 'highlight',
//   regex: /( |^|>)==[^=]*==( |$|<)/gm,
//   toHtml: (innerHtml: string) => {
//     const leftSign = innerHtml.match(/^[ >]/g) || '';
//     const rightSign = innerHtml.match(/[ <]$/g) || '';
//
//     console.log(innerHtml);
//     innerHtml = innerHtml.replace(/(( |^|>)==|==( |$|<))/g, '');
//     console.log(innerHtml);
//     const emmet = DYNAMIC_ELEMENTS_CONFIG['highlight'].initialEmmet({
//       innerHtml,
//     });
//     return `${leftSign}${expand(emmet)}${rightSign}`;
//   },
// },
// {
//   id: 'empty-line',
//   regex: /(^ *(\n|\r\n|\r)$)|(^$)/gm,
//   toHtml: () => expand('p{&nbsp;}'),
// },

// h1: {
//   initialEmmet: ({ innerHtml = '&nbsp;' }) =>
//     `h1.et-h1>span.sign{#&nbsp;}+span.content{${innerHtml}}`,
//   newLineEmmet: () => 'p{&nbsp;}',
//   signLeft: /^# /g,
//   extendOnNewLine: false,
//   shortcut: ['ctrl', 1],
// },
// h2: {
//   initialEmmet: ({ innerHtml = '&nbsp;' }) =>
//     `h2.et-h2>span.sign{##&nbsp;}+span.content{${innerHtml}}`,
//   newLineEmmet: () => 'p{&nbsp;}',
//   signLeft: /^#{2} /g,
//   extendOnNewLine: false,
//   shortcut: ['ctrl', 2],
// },
// h3: {
//   initialEmmet: ({ innerHtml = '&nbsp;' }) =>
//     `h3.et-h3>span.sign{###&nbsp;}+span.content{${innerHtml}}`,
//   newLineEmmet: () => 'p{&nbsp;}',
//   signLeft: /^#{2} /g,
//   extendOnNewLine: false,
//   shortcut: ['ctrl', 2],
// },
// h4: {
//   initialEmmet: ({ innerHtml = '&nbsp;' }) =>
//     `h4.et-h4>span.sign{####&nbsp;}+span.content{${innerHtml}}`,
//   newLineEmmet: () => 'p{&nbsp;}',
//   signLeft: /^#{2} /g,
//   extendOnNewLine: false,
//   shortcut: ['ctrl', 2],
// },
// h5: {
//   initialEmmet: ({ innerHtml = '&nbsp;' }) =>
//     `h5.et-h5>span.sign{#####&nbsp;}+span.content{${innerHtml}}`,
//   newLineEmmet: () => 'p>span.content{&nbsp;}',
//   signLeft: /^#{2} /g,
//   extendOnNewLine: false,
//   shortcut: ['ctrl', 2],
// },
// h6: {
//   initialEmmet: ({ innerHtml = '&nbsp;' }) =>
//     `h6.et-h6>span.sign{######&nbsp;}+span.content{${innerHtml}}`,
//   newLineEmmet: () => 'p>span.content{&nbsp;}',
//   signLeft: /^#{2} /g,
//   extendOnNewLine: false,
//   shortcut: ['ctrl', 2],
// },
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
// quote: {
//   initialEmmet: ({ indent = 0, innerHtml = '&nbsp;' }) =>
//     `p.et-quote.pl-${indent}>span.content{${innerHtml}}`,
//   newLineEmmet: () => ``,
//   signLeft: /^ *- \[([x ])]/g,
//   extendOnNewLine: false,
// },
// code: {
//   initialEmmet: ({ innerHtml = '&nbsp;' }) =>
//     `code.et-code>span.sign{\`}+span.content{${innerHtml}}+span.sign{\`}`,
//   signLeft: /`/g,
//   signRight: /`/g,
//   extendOnNewLine: false,
// },
// i: {
//   initialEmmet: ({ innerHtml = '&nbsp;' }) =>
//     `i.et-i>span.sign{\\*}+span.content{${innerHtml}}+span.sign{\\*}`,
//   signLeft: /\*/g,
//   signRight: /\*/g,
//   extendOnNewLine: false,
// },
// a: ,
// img: {
//   initialEmmet: ({ src = '&nbsp;', alt = '' }) =>
//     `img.et-img[alt=${alt}][src=${src}]`,
//   signLeft: /!\[/g,
//   signRight: /\)/g,
//   signInner: /]\(/g,
//   extendOnNewLine: false,
// },
// strike: {
//   initialEmmet: ({ innerHtml = '&nbsp;' }) =>
//     `span.et-strike>span.sign{~~}+span.content{${innerHtml}}+span.sign{~~}`,
//   signLeft: /~~/g,
//   signRight: /~~/g,
//   extendOnNewLine: false,
// },
// highlight: {
//   initialEmmet: ({ innerHtml = '&nbsp;' }) =>
//     `span.et-highlight>span.sign{==}+span.content{${innerHtml}}+span.sign{==}`,
//   signLeft: /==/g,
//   signRight: /==/g,
//   extendOnNewLine: false,
// },
