import { toOuterHtmlFunction, TxtStaticParserType } from '../types';
import expand from 'emmet';

export const HIGHLIGHT_ID = 'highlight';
export const toOuterHtml: toOuterHtmlFunction = ({ innerHtml = '&nbsp;' }) =>
  expand(
    `span.et-${HIGHLIGHT_ID}>span.sign{==}+span.content{${innerHtml}}+span.sign{==}`
  );
export const highlightStaticParser: TxtStaticParserType = {
  id: HIGHLIGHT_ID,
  parseMarkdownToHtml: (line: string) => {
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
  return `${leftChar}${toOuterHtml({ innerHtml: match })}${rightChar}`;
};
