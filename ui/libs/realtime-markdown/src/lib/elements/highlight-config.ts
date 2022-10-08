import { TxtConfig, TxtParserType } from '../types';
import expand from 'emmet';

export const highlightConfig: TxtConfig = {
  id: 'highlight',
  toEmmet: ({ innerHtml = '&nbsp;' }) =>
    `span.et-highlight>span.sign{==}+span.content{${innerHtml}}+span.sign{==}`,
};
export const highlightParser: TxtParserType = {
  id: 'highlight',
  toHtml: (line: string) => {
    const regExp = /( |^)==[^=]*==( |$)/gm;
    return line.replace(regExp, (match) => _toHighlight(match));
  },
};

const _toHighlight = (match: string) => {
  const leftCharRegExp = /^( |)/g;
  const leftChar = match.match(leftCharRegExp)?.shift() || '';
  const rightCharRegExp = /( |)$/g;
  const rightChar = match.match(rightCharRegExp)?.shift() || '';
  match = match
    .replace(leftCharRegExp, '')
    .replace(rightCharRegExp, '')
    .replace(/(^==|==$)/g, '');
  const emmet = highlightConfig.toEmmet({
    innerHtml: match,
  });
  return `${leftChar}${expand(emmet)}${rightChar}`;
};
