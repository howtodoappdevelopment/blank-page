import { ElementRepresentationConfig, ParserType } from '../types';
import expand from 'emmet';

export const bConfig: ElementRepresentationConfig = {
  id: 'b',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `b.et-b>span.sign{\\*\\*}+span.content{${innerHtml}}+span.sign{\\*\\*}`,
  signLeft: /\*\*/g,
  signRight: /\*\*/g,
  extendOnNewLine: false,
};

export const bParser: ParserType = {
  id: 'b',
  regex: /( |^)\*\*[^*]*\*\*( |$)/gm,
  toHtml: (innerHtml: string) => {
    const leftCharRegExp = /^( |)/g;
    const leftChar = innerHtml.match(leftCharRegExp)[0] || '';
    const rightCharRegExp = /( |)$/g;
    const rightChar = innerHtml.match(rightCharRegExp)[0] || '';
    const parsedInnerHtml = innerHtml
      .replace(leftCharRegExp, '')
      .replace(rightCharRegExp, '')
      .replace(/^\*\*|\*\*$/g, '');

    if (
      parsedInnerHtml.startsWith(' ') ||
      parsedInnerHtml.endsWith(' ') ||
      parsedInnerHtml === ''
    ) {
      return innerHtml;
    }

    const emmet = bConfig.initialEmmet({
      innerHtml: parsedInnerHtml,
    });
    return `${leftChar}${expand(emmet)}${rightChar}`;
  },
};