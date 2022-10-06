import { ElementRepresentationConfig, TxtParserType } from '../types';
import expand from 'emmet';

export const bConfig: ElementRepresentationConfig = {
  id: 'b',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `b.et-b>span.sign{\\*\\*}+span.content{${innerHtml}}+span.sign{\\*\\*}`,
  signLeft: /\*\*/g,
  signRight: /\*\*/g,
  extendOnNewLine: false,
};

export const bParser: TxtParserType = {
  id: 'b',
  toHtml: (line: string) => {
    const regExp = /( |^)\*\*[^*]*\*\*( |$)/gm;
    return line.replace(regExp, (match) => _toB(match));
  },
};

const _toB = (innerHtml: string) => {
  const leftCharRegExp = /^( |)/g;
  const leftChar = innerHtml.match(leftCharRegExp)?.shift() || '';
  const rightCharRegExp = /( |)$/g;
  const rightChar = innerHtml.match(rightCharRegExp)?.shift() || '';
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
};
