import { TxtConfig, TxtParserType } from '../types';
import expand from 'emmet';

export const imgConfig: TxtConfig = {
  id: 'img',
  toEmmet: ({ src = '&nbsp;', alt = '' }) =>
    `img.et-img[alt=${alt}][src=${src}]`,
};
export const imgParser: TxtParserType = {
  id: 'img',
  toHtml: (line: string): string => {
    const regExp = /( |^)!\[[^[\]]*]\([^()]*\)( |$)/gm;
    return line.replace(regExp, (match) => _toImg(match));
  },
};

const _toImg = (match: string) => {
  const leftCharRegExp = /^( |)/g;
  const leftChar = match.match(leftCharRegExp)?.shift() || '';
  const rightCharRegExp = /( |)$/g;
  const rightChar = match.match(rightCharRegExp)?.shift() || '';
  const alt = (match.match(/\[.*]/g) as RegExpMatchArray)
    ?.shift()
    ?.replace(/[\\[\]]/g, '');
  const src = (match.match(/\(.*\)/g) as RegExpMatchArray)
    ?.shift()
    ?.replace(/[()]/g, '');
  const emmet = imgConfig.toEmmet({
    alt,
    src,
  });
  return `${leftChar}${expand(emmet)}${rightChar}`;
};
