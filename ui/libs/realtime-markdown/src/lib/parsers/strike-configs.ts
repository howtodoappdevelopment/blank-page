import { ElementRepresentationConfig, ParserType } from '../types';
import expand from 'emmet';

export const strikeConfig: ElementRepresentationConfig = {
  id: 'strike',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `span.et-strike>span.sign{~~}+span.content{${innerHtml}}+span.sign{~~}`,
  signLeft: /~~/g,
  signRight: /~~/g,
  extendOnNewLine: false,
};
export const strikeParser: ParserType = {
  id: 'strike',
  regex: /( |^)~~[^~]*~~( |$)/gm,
  toHtml: (innerHtml: string) => {
    const leftCharRegExp = /^( |)/g;
    const leftChar = innerHtml.match(leftCharRegExp)[0] || '';
    const rightCharRegExp = /( |)$/g;
    const rightChar = innerHtml.match(rightCharRegExp)[0] || '';
    innerHtml = innerHtml
      .replace(leftCharRegExp, '')
      .replace(rightCharRegExp, '')
      .replace(/(^~~|~~$)/g, '');
    const emmet = strikeConfig.initialEmmet({
      innerHtml,
    });
    return `${leftChar}${expand(emmet)}${rightChar}`;
  },
};
