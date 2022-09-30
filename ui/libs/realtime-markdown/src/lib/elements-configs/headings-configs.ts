import { ElementRepresentationConfig, ParserType } from '../types';
import expand from 'emmet';
import { calcHeadingSize } from '../utils/elements.utils';

export const h1Config: ElementRepresentationConfig = {
  id: 'h1',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h1.et-h1>span.sign{#&nbsp;}+span.content{${innerHtml}}`,
  newLineEmmet: () => 'p{&nbsp;}',
  signLeft: /^# /g,
  extendOnNewLine: false,
  shortcut: ['ctrl', 1],
};
export const h2Config: ElementRepresentationConfig = {
  id: 'h2',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h2.et-h2>span.sign{##&nbsp;}+span.content{${innerHtml}}`,
  newLineEmmet: () => 'p{&nbsp;}',
  signLeft: /^#{2} /g,
  extendOnNewLine: false,
  shortcut: ['ctrl', 2],
};
export const h3Config: ElementRepresentationConfig = {
  id: 'h3',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h3.et-h3>span.sign{###&nbsp;}+span.content{${innerHtml}}`,
  newLineEmmet: () => 'p{&nbsp;}',
  signLeft: /^#{2} /g,
  extendOnNewLine: false,
  shortcut: ['ctrl', 2],
};
export const h4Config: ElementRepresentationConfig = {
  id: 'h4',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h4.et-h4>span.sign{####&nbsp;}+span.content{${innerHtml}}`,
  newLineEmmet: () => 'p{&nbsp;}',
  signLeft: /^#{2} /g,
  extendOnNewLine: false,
  shortcut: ['ctrl', 2],
};
export const h5Config: ElementRepresentationConfig = {
  id: 'h5',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h5.et-h5>span.sign{#####&nbsp;}+span.content{${innerHtml}}`,
  newLineEmmet: () => 'p>span.content{&nbsp;}',
  signLeft: /^#{2} /g,
  extendOnNewLine: false,
  shortcut: ['ctrl', 2],
};
export const h6Config: ElementRepresentationConfig = {
  id: 'h6',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h6.et-h6>span.sign{######&nbsp;}+span.content{${innerHtml}}`,
  newLineEmmet: () => 'p>span.content{&nbsp;}',
  signLeft: /^#{2} /g,
  extendOnNewLine: false,
  shortcut: ['ctrl', 2],
};

const headingsMap = [h1Config, h2Config, h3Config, h4Config, h5Config, h6Config]
  .map((config) => ({ [config.id]: config }))
  .reduce((acc, config) => ({ ...acc, ...config }), {});
export const headingsParser: ParserType = {
  id: 'heading',
  regex: /^#{1,6} .*$/gm,
  toHtml: (innerHtml: string) =>
    expand(
      headingsMap[`h${calcHeadingSize(innerHtml)}`].initialEmmet({
        innerHtml: innerHtml.replace(/^#{1,6} /g, ''), // .replace(/^<[^>]*>[^>]*<\/[^>]*>/g, '')
      })
    ),
};
