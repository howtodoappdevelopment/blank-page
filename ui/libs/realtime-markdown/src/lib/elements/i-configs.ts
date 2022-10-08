import { TxtConfig, TxtParserType } from '../types';
import expand from 'emmet';

export const iConfig: TxtConfig = {
  id: 'i',
  toEmmet: ({ innerHtml = '&nbsp;' }) =>
    `i.et-i>span.sign{\\*}+span.content{${innerHtml}}+span.sign{\\*}`,
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
  const leftChar = match.match(leftCharRegExp)?.shift() || '';
  const rightCharRegExp = /( |)$/g;
  const rightChar = match.match(rightCharRegExp)?.shift() || '';
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

  const emmet = iConfig.toEmmet({
    innerHtml: parsedMatch,
  });
  return `${leftChar}${expand(emmet)}${rightChar}`;
};
