import expand from 'emmet';
import { toOuterHtmlFunction, ParseTxtMarkdownToHtml } from '../types';

export const A_ID = 'a';
export const toOuterHtml: toOuterHtmlFunction = ({
  innerHtml = '&nbsp;',
  url = '',
}) => expand(`a[href=${url}].et-${A_ID}{${innerHtml}}`);
export const aStaticParsers: ParseTxtMarkdownToHtml[] = [
  (line: string) => {
    const regExp = /\[[^[\]]*]\([^()]*\)/gm;
    return line.replace(regExp, (match) => _toA(match));
  },
  (line: string) => {
    const regExp =
      /( |^)https?:\/\/(www\.)?[-a-zA-Z\d@:%._+~#=]{1,256}\.[a-zA-Z\d]{2,6}\b([-a-zA-Z\d@:%_+.()~#?&\\/=]*)( |$)/gm;
    return line.replace(regExp, (match) => _txtToA(match));
  },
];

const _toA = (match: string) => {
  const aUrl = (match.match(/\(.*\)/g) as RegExpMatchArray)[0].replace(
    /[()]/g,
    ''
  );
  if (aUrl.startsWith(' ') || aUrl.endsWith(' ')) {
    return match;
  }

  const aInnerHtml = (match.match(/\[.*]/g) as RegExpMatchArray)[0].replace(
    /[\\[\]]/g,
    ''
  );
  return toOuterHtml({ innerHtml: aInnerHtml, url: aUrl });
};
const _txtToA = (match: string) => {
  const leftCharRegExp = /^( |)/g;
  const leftChar = match.match(leftCharRegExp)?.shift() || '';
  const rightCharRegExp = /( |)$/g;
  const rightChar = match.match(rightCharRegExp)?.shift() || '';
  match = match.replace(leftCharRegExp, '').replace(rightCharRegExp, '');
  return `${leftChar}${toOuterHtml({
    innerHtml: match,
    url: match,
  })}${rightChar}`;
};
