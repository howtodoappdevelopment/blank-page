import { TxtConfig, TxtParserType } from '../types';
import expand from 'emmet';

export const codeConfig: TxtConfig = {
  id: 'code',
  toEmmet: ({ innerHtml = '&nbsp;' }) =>
    `code.et-code>span.sign{\`}+span.content{${innerHtml}}+span.sign{\`}`,
};
export const codeParser: TxtParserType = {
  id: 'code',
  toHtml: (line: string) => {
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
  const emmet = codeConfig.toEmmet({ innerHtml: match });
  return `${leftChar}${expand(emmet)}${rightChar}`;
};
