import { ElementRepresentationConfig, ParserType } from '../types';
import expand from 'emmet';

export const iConfig: ElementRepresentationConfig = {
  id: 'i',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `i.et-i>span.sign{\\*}+span.content{${innerHtml}}+span.sign{\\*}`,
  signLeft: /\*/g,
  signRight: /\*/g,
  extendOnNewLine: false,
};
export const iParser: ParserType = {
  id: 'i',
  regex: /( |^)\*[^*]+\*( |$)/gm,
  toHtml: (innerHtml: string) => {
    const leftCharRegExp = /^( |)/g;
    const leftChar = innerHtml.match(leftCharRegExp)[0] || '';
    const rightCharRegExp = /( |)$/g;
    const rightChar = innerHtml.match(rightCharRegExp)[0] || '';
    const parsedInnerHtml = innerHtml
      .replace(leftCharRegExp, '')
      .replace(rightCharRegExp, '')
      .replace(/^\*|\*$/g, '');
    if (
      parsedInnerHtml.startsWith(' ') ||
      parsedInnerHtml.endsWith(' ') ||
      parsedInnerHtml === ''
    ) {
      return innerHtml;
    }

    const emmet = iConfig.initialEmmet({
      innerHtml: parsedInnerHtml,
    });
    return `${leftChar}${expand(emmet)}${rightChar}`;
  },
};
