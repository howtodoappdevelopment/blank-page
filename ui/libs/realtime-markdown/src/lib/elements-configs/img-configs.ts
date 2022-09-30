import { ElementRepresentationConfig, ParserType } from '../types';
import expand from 'emmet';

export const imgConfig: ElementRepresentationConfig = {
  id: 'img',
  initialEmmet: ({ src = '&nbsp;', alt = '' }) =>
    `img.et-img[alt=${alt}][src=${src}]`,
  signLeft: /!\[/g,
  signRight: /\)/g,
  signInner: /]\(/g,
  extendOnNewLine: false,
};
export const imgParser: ParserType = {
  id: 'img',
  regex: /( |^)!\[[^[\]]*]\([^()]*\)( |$)/gm,
  toHtml: (innerHtml: string) => {
    const leftCharRegExp = /^( |)/g;
    const leftChar = innerHtml.match(leftCharRegExp)[0] || '';
    const rightCharRegExp = /( |)$/g;
    const rightChar = innerHtml.match(rightCharRegExp)[0] || '';
    const alt = (innerHtml.match(/\[.*]/g) as RegExpMatchArray)[0].replace(
      /[\\[\]]/g,
      ''
    );
    const src = (innerHtml.match(/\(.*\)/g) as RegExpMatchArray)[0].replace(
      /[()]/g,
      ''
    );
    const emmet = imgConfig.initialEmmet({
      alt,
      src,
    });
    return `${leftChar}${expand(emmet)}${rightChar}`;
  },
};
