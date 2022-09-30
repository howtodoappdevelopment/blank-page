import { ElementRepresentationConfig, ParserType } from '../types';
import expand from 'emmet';

export const codeConfig: ElementRepresentationConfig = {
  id: 'code',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `code.et-code>span.sign{\`}+span.content{${innerHtml}}+span.sign{\`}`,
  signLeft: /`/g,
  signRight: /`/g,
  extendOnNewLine: false,
};
export const codeParser: ParserType = {
  id: 'code',
  regex: /( |^|>)`[^ ][^`]+[^ ]`( |$|<)/gm,
  toHtml: (innerHtml: string) => {
    const leftCharRegExp = /^( |)/g;
    const leftChar = innerHtml.match(leftCharRegExp)[0] || '';
    const rightCharRegExp = /( |)$/g;
    const rightChar = innerHtml.match(rightCharRegExp)[0] || '';
    innerHtml = innerHtml
      .replace(leftCharRegExp, '')
      .replace(rightCharRegExp, '')
      .replace(/^`|`$/g, '');
    const emmet = codeConfig.initialEmmet({ innerHtml });
    return `${leftChar}${expand(emmet)}${rightChar}`;
  },
};
