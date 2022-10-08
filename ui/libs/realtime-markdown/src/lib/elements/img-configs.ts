import { toOuterHtmlFunction, TxtStaticParserType } from '../types';
import expand from 'emmet';

export const IMG_ID = 'img';
export const toOuterHtml: toOuterHtmlFunction = ({
  src = '&nbsp;',
  alt = '',
}) => expand(`img.et-${IMG_ID}[alt=${alt}][src=${src}]`);
export const imgStaticParser: TxtStaticParserType = {
  id: IMG_ID,
  parseMarkdownToHtml: (line: string): string => {
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
  return `${leftChar}${toOuterHtml({ alt, src })}${rightChar}`;
};
