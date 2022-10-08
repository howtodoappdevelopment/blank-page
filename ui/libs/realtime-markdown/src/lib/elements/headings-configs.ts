import { BlockConfig, BlockParserType } from '../types';
import expand from 'emmet';
import { calcHeadingSize } from '../utils/elements.utils';

export const H1_ID = 'h1';
export const H2_ID = 'h2';
export const H3_ID = 'h3';
export const H4_ID = 'h4';
export const H5_ID = 'h5';
export const H6_ID = 'h6';

export const h1Config: BlockConfig = {
  id: H1_ID,
  toEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h1.et-${H1_ID}>span.sign{#&nbsp;}+span.content{${innerHtml}}`,
  newLineToEmmet: () => 'p{&nbsp;}',
  extendOnNewLine: false,
  shortcut: ['ctrl', 1],
};
export const h2Config: BlockConfig = {
  id: H2_ID,
  toEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h2.et-${H2_ID}>span.sign{##&nbsp;}+span.content{${innerHtml}}`,
  newLineToEmmet: () => 'p{&nbsp;}',
  extendOnNewLine: false,
  shortcut: ['ctrl', 2],
};
export const h3Config: BlockConfig = {
  id: H3_ID,
  toEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h3.et-${H3_ID}>span.sign{###&nbsp;}+span.content{${innerHtml}}`,
  newLineToEmmet: () => 'p{&nbsp;}',
  extendOnNewLine: false,
  shortcut: ['ctrl', 3],
};
export const h4Config: BlockConfig = {
  id: H4_ID,
  toEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h4.et-${H4_ID}>span.sign{####&nbsp;}+span.content{${innerHtml}}`,
  newLineToEmmet: () => 'p{&nbsp;}',
  extendOnNewLine: false,
  shortcut: ['ctrl', 4],
};
export const h5Config: BlockConfig = {
  id: H5_ID,
  toEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h5.et-${H5_ID}>span.sign{#####&nbsp;}+span.content{${innerHtml}}`,
  newLineToEmmet: () => 'p>span.content{&nbsp;}',
  extendOnNewLine: false,
  shortcut: ['ctrl', 5],
};
export const h6Config: BlockConfig = {
  id: H6_ID,
  toEmmet: ({ innerHtml = '&nbsp;' }) =>
    `h6.et-${H6_ID}>span.sign{######&nbsp;}+span.content{${innerHtml}}`,
  newLineToEmmet: () => 'p>span.content{&nbsp;}',
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

    const H_ID = `h${calcHeadingSize(line)}`;
    line = line.replace(/^#{1,6} /g, '');
    for (const { toHtml } of txtParsers) {
      line = toHtml(line);
    }

    return expand(
      headingsMap[H_ID].toEmmet({
        innerHtml: line,
      })
    );
  },
};
