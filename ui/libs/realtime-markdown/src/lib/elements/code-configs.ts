import { toOuterHtmlFunction, TxtStaticParserType } from '../types';
import expand from 'emmet';

export const CODE_ID = 'code';
export const toOuterHtml: toOuterHtmlFunction = ({ innerHtml = '&nbsp;' }) =>
  expand(
    `code.et-${CODE_ID}>span.sign{\`}+span.content{${innerHtml}}+span.sign{\`}`
  );
export const codeStaticParser: TxtStaticParserType = {
  id: CODE_ID,
  parseMarkdownToHtml: (line: string) => {
    const regExp = /( |^|>)`[^ ][^`]+[^ ]`( |$|<)/gm;
    return line.replace(regExp, (match) => _toCode(match));
  },
};

const _toCode = (match: string) => {
  const leftCharRegExp = /^( |)/g;
  const leftChar = match.match(leftCharRegExp)?.shift() || '';
  const rightCharRegExp = /( |)$/g;
  const rightChar = match.match(rightCharRegExp)?.shift() || '';
  match = match
    .replace(leftCharRegExp, '')
    .replace(rightCharRegExp, '')
    .replace(/^`|`$/g, '');
  return `${leftChar}${toOuterHtml({ innerHtml: match })}${rightChar}`;
};
