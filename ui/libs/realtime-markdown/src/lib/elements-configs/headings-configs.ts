import { ElementRepresentationConfig, BlockParserType } from '../types';
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
  signLeft: /^#{3} /g,
  extendOnNewLine: false,
  shortcut: ['ctrl', 3],
};
export const h4Config: ElementRepresentationConfig = {
  id: 'h4',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h4.et-h4>span.sign{####&nbsp;}+span.content{${innerHtml}}`,
  newLineEmmet: () => 'p{&nbsp;}',
  signLeft: /^#{4} /g,
  extendOnNewLine: false,
  shortcut: ['ctrl', 4],
};
export const h5Config: ElementRepresentationConfig = {
  id: 'h5',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h5.et-h5>span.sign{#####&nbsp;}+span.content{${innerHtml}}`,
  newLineEmmet: () => 'p>span.content{&nbsp;}',
  signLeft: /^#{5} /g,
  extendOnNewLine: false,
  shortcut: ['ctrl', 5],
};
export const h6Config: ElementRepresentationConfig = {
  id: 'h6',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h6.et-h6>span.sign{######&nbsp;}+span.content{${innerHtml}}`,
  newLineEmmet: () => 'p>span.content{&nbsp;}',
  signLeft: /^#{6} /g,
  extendOnNewLine: false,
  shortcut: ['ctrl', 6],
};

const headingsMap = [h1Config, h2Config, h3Config, h4Config, h5Config, h6Config]
  .map((config) => ({ [config.id]: config }))
  .reduce((acc, config) => ({ ...acc, ...config }), {});
export const headingsParser: BlockParserType = {
  id: 'heading',
  toHtml: (line, txtParsers) => {
    const regExp = /^#{1,6} .*$/gm;
    if (!regExp.test(line)) {
      return null;
    }

    const hTag = `h${calcHeadingSize(line)}`;
    line = line.replace(/^#{1,6} /g, '');
    for (const { toHtml } of txtParsers) {
      line = toHtml(line);
    }

    return expand(
      headingsMap[hTag].initialEmmet({
        innerHtml: line,
      })
    );
  },
};
