import { ParseTxtMarkdownToHtml } from '../types';
import expand from 'emmet';

export const I_ID = 'i';
export const toOuterHtml = ({ innerHtml = '&nbsp;' }) =>
  expand(
    `i.et-${I_ID}>span.sign{\\*}+span.content{${innerHtml}}+span.sign{\\*}`
  );
export const iStaticParser: ParseTxtMarkdownToHtml = (line: string) => {
  const regExp = /( |^)\*[^*]+\*( |$)/gm;
  return line.replace(regExp, (match) => _toI(match));
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
  return `${leftChar}${toOuterHtml({ innerHtml: parsedMatch })}${rightChar}`;
};
