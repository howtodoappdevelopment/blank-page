import { ElementRepresentationConfig, ParserType } from '../types';
import expand from 'emmet';

export const highlightConfig: ElementRepresentationConfig = {
  id: 'highlight',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `span.et-highlight>span.sign{==}+span.content{${innerHtml}}+span.sign{==}`,
  signLeft: /==/g,
  signRight: /==/g,
  extendOnNewLine: false,
};
export const highlightParser: ParserType = {
  id: 'highlight',
  regex: /( |^)==[^=]*==( |$)/gm,
  toHtml: (innerHtml: string) => {
    const leftCharRegExp = /^( |)/g;
    const leftChar = innerHtml.match(leftCharRegExp)[0] || '';
    const rightCharRegExp = /( |)$/g;
    const rightChar = innerHtml.match(rightCharRegExp)[0] || '';
    innerHtml = innerHtml
      .replace(leftCharRegExp, '')
      .replace(rightCharRegExp, '')
      .replace(/(^==|==$)/g, '');
    const emmet = highlightConfig.initialEmmet({
      innerHtml,
    });
    return `${leftChar}${expand(emmet)}${rightChar}`;
  },
};
