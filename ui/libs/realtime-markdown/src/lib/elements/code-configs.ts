import { ElementRepresentationConfig, TxtParserType } from '../types';
import expand from 'emmet';

export const codeConfig: ElementRepresentationConfig = {
  id: 'code',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `code.et-code>span.content{${innerHtml}}`,
  signLeft: /`/g,
  signRight: /`/g,
  extendOnNewLine: false,
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
  const emmet = codeConfig.initialEmmet({ innerHtml: match });
  return `${leftChar}${expand(emmet)}${rightChar}`;
};