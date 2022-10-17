import { toOuterHtmlFunction, ParseTxtMarkdownToHtml } from '../types';
import expand from 'emmet';

export const B_ID = 'b';
export const toOuterHtml: toOuterHtmlFunction = ({ innerHtml = '&nbsp;' }) =>
  expand(
    `b.et-${B_ID}>span.sign{\\*\\*}+span.content{${innerHtml}}+span.sign{\\*\\*}`
  );
export const bStaticParser: ParseTxtMarkdownToHtml = (line: string) => {
  const regExp = /( |^)\*\*[^*]*\*\*( |$)/gm;
  return line.replace(regExp, (match) => _toB(match));
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
  return `${leftChar}${toOuterHtml({
    innerHtml: parsedInnerHtml,
  })}${rightChar}`;
};
