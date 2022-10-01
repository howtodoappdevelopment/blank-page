import { ElementRepresentationConfig, TxtParserType } from '../types';
import expand from 'emmet';

export const strikeConfig: ElementRepresentationConfig = {
  id: 'strike',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `span.et-strike>span.sign{~~}+span.content{${innerHtml}}+span.sign{~~}`,
  signLeft: /~~/g,
  signRight: /~~/g,
  extendOnNewLine: false,
};
export const strikeParser: TxtParserType = {
  id: 'strike',
  toHtml: (line: string) => {
    const regExp = /( |^)~~[^~]*~~( |$)/gm;
    return line.replace(regExp, (match) => _toStrike(match));
  },
};

const _toStrike = (match: string) => {
  const leftCharRegExp = /^( |)/g;
  const leftChar = match.match(leftCharRegExp)[0] || '';
  const rightCharRegExp = /( |)$/g;
  const rightChar = match.match(rightCharRegExp)[0] || '';
  match = match
    .replace(leftCharRegExp, '')
    .replace(rightCharRegExp, '')
    .replace(/(^~~|~~$)/g, '');
  const emmet = strikeConfig.initialEmmet({
    innerHtml: match,
  });
  return `${leftChar}${expand(emmet)}${rightChar}`;
};
