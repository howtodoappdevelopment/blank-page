import { ParseBlockMarkdownToHtml } from '../types';
import expand from 'emmet';
import { calcHeadingSize } from '../utils/elements.utils';
import { keyBy } from 'lodash-es';

export const H1_ID = 'h1';
export const H2_ID = 'h2';
export const H3_ID = 'h3';
export const H4_ID = 'h4';
export const H5_ID = 'h5';
export const H6_ID = 'h6';

export const h1Config = {
  id: H1_ID,
  toOuterHtml: ({ innerHtml = '&nbsp;' }) =>
    expand(`h1.et-${H1_ID}>span.sign{#&nbsp;}+span.content{${innerHtml}}`),
};
export const h2Config = {
  id: H2_ID,
  toOuterHtml: ({ innerHtml = '&nbsp;' }) =>
    expand(`h2.et-${H2_ID}>span.sign{##&nbsp;}+span.content{${innerHtml}}`),
};
export const h3Config = {
  id: H3_ID,
  toOuterHtml: ({ innerHtml = '&nbsp;' }) =>
    expand(`h3.et-${H3_ID}>span.sign{###&nbsp;}+span.content{${innerHtml}}`),
};
export const h4Config = {
  id: H4_ID,
  toOuterHtml: ({ innerHtml = '&nbsp;' }) =>
    expand(`h4.et-${H4_ID}>span.sign{####&nbsp;}+span.content{${innerHtml}}`),
};
export const h5Config = {
  id: H5_ID,
  toOuterHtml: ({ innerHtml = '&nbsp;' }) =>
    expand(`h5.et-${H5_ID}>span.sign{#####&nbsp;}+span.content{${innerHtml}}`),
};
export const h6Config = {
  id: H6_ID,
  toOuterHtml: ({ innerHtml = '&nbsp;' }) =>
    expand(`h6.et-${H6_ID}>span.sign{######&nbsp;}+span.content{${innerHtml}}`),
};

const headingsMap = keyBy(
  [h1Config, h2Config, h3Config, h4Config, h5Config, h6Config],
  'id'
);

export const headingsStaticParser: ParseBlockMarkdownToHtml = (
  line,
  txtParsers
) => {
  const regExp = /^#{1,6} .*$/gm;
  if (!regExp.test(line)) {
    return null;
  }

  const H_ID = `h${calcHeadingSize(line)}`;
  line = line.replace(/^#{1,6} /g, '');
  for (const parseMarkdownToHtml of txtParsers) {
    line = parseMarkdownToHtml(line);
  }

  return headingsMap[H_ID].toOuterHtml({
    innerHtml: line,
  });
};
