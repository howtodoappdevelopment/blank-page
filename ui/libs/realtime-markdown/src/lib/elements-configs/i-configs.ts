import { ElementRepresentationConfig, TxtParserType } from '../types';
import expand from 'emmet';

export const iConfig: ElementRepresentationConfig = {
  id: 'i',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `i.et-i>span.sign{\\*}+span.content{${innerHtml}}+span.sign{\\*}`,
  signLeft: /\*/g,
  signRight: /\*/g,
  extendOnNewLine: false,
};
export const iParser: TxtParserType = {
  id: 'i',
  toHtml: (line: string) => {
    const regExp = /( |^)\*[^*]+\*( |$)/gm;
    return line.replace(regExp, (match) => _toI(match));
  },
};
const _toI = (match: string) => {
  const leftCharRegExp = /^( |)/g;
  const leftChar = match.match(leftCharRegExp)[0] || '';
  const rightCharRegExp = /( |)$/g;
  const rightChar = match.match(rightCharRegExp)[0] || '';
  const parsedMatch = match
    .replace(leftCharRegExp, '')
    .replace(rightCharRegExp, '')
    .replace(/^\*|\*$/g, '');
  if (
    parsedMatch.startsWith(' ') ||
    parsedMatch.endsWith(' ') ||
    parsedMatch === ''
  ) {
    return match;
  }

  const emmet = iConfig.initialEmmet({
    innerHtml: parsedMatch,
  });
  return `${leftChar}${expand(emmet)}${rightChar}`;
};
