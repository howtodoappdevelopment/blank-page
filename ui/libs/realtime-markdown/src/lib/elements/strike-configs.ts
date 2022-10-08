import { TxtConfig, TxtParserType } from '../types';
import expand from 'emmet';

export const STRIKE_ID = 'strike';
export const strikeConfig: TxtConfig = {
  id: STRIKE_ID,
  toEmmet: ({ innerHtml = '&nbsp;' }) =>
    `span.et-${STRIKE_ID}>span.sign{~~}+span.content{${innerHtml}}+span.sign{~~}`,
};
export const strikeParser: TxtParserType = {
  id: STRIKE_ID,
  toHtml: (line: string) => {
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
  const emmet = strikeConfig.toEmmet({
    innerHtml: match,
  });
  return `${leftChar}${expand(emmet)}${rightChar}`;
};
