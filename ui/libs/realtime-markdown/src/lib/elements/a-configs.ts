import expand from 'emmet';
import { TxtConfig, TxtParserType } from '../types';

export const aConfig: TxtConfig = {
  id: 'a',
  toEmmet: ({ innerHtml = '&nbsp;', url = '' }) =>
    `a[href=${url}].et-a{${innerHtml}}`,
};

export const aParsers: TxtParserType[] = [
  {
    id: 'a',
    toHtml: (line: string) => {
      const regExp = /\[[^[\]]*]\([^()]*\)/gm;
      return line.replace(regExp, (match) => _toA(match));
    },
  },
  {
    id: 'a',
    toHtml: (line: string) => {
      const regExp =
        /( |^)https?:\/\/(www\.)?[-a-zA-Z\d@:%._+~#=]{1,256}\.[a-zA-Z\d]{2,6}\b([-a-zA-Z\d@:%_+.()~#?&\\/=]*)( |$)/gm;
      return line.replace(regExp, (match) => _txtToA(match));
    },
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
  const emmet = aConfig.toEmmet({
    innerHtml: aInnerHtml,
    url: aUrl,
  });
  return expand(emmet);
};
const _txtToA = (match: string) => {
  const leftCharRegExp = /^( |)/g;
  const leftChar = match.match(leftCharRegExp)?.shift() || '';
  const rightCharRegExp = /( |)$/g;
  const rightChar = match.match(rightCharRegExp)?.shift() || '';
  match = match.replace(leftCharRegExp, '').replace(rightCharRegExp, '');
  const emmet = aConfig.toEmmet({
    innerHtml: match,
    url: match,
  });
  return `${leftChar}${expand(emmet)}${rightChar}`;
};
