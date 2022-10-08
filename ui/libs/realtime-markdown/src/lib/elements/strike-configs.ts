import { toOuterHtmlFunction, TxtStaticParserType } from '../types';
import expand from 'emmet';

export const STRIKE_ID = 'strike';
export const toOuterHtml: toOuterHtmlFunction = ({ innerHtml = '&nbsp;' }) =>
  expand(
    `span.et-${STRIKE_ID}>span.sign{~~}+span.content{${innerHtml}}+span.sign{~~}`
  );
export const strikeStaticParser: TxtStaticParserType = {
  id: STRIKE_ID,
  parseMarkdownToHtml: (line: string) => {
    const regExp = /( |^)~~[^~]*~~( |$)/gm;
    return line.replace(regExp, (match) => _toStrike(match));
  },
};
const _toStrike = (match: string) => {
  const leftCharRegExp = /^( |)/g;
  const leftChar = match.match(leftCharRegExp)?.shift() || '';
  const rightCharRegExp = /( |)$/g;
  const rightChar = match.match(rightCharRegExp)?.shift() || '';
  match = match
    .replace(leftCharRegExp, '')
    .replace(rightCharRegExp, '')
    .replace(/(^~~|~~$)/g, '');
  return `${leftChar}${toOuterHtml({ innerHtml: match })}${rightChar}`;
};
