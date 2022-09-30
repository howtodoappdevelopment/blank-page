import expand from 'emmet';
import { ElementRepresentationConfig, ParserType } from '../types';

export const aConfig: ElementRepresentationConfig = {
  id: 'a',
  initialEmmet: ({ innerHtml = '&nbsp;', url = '' }) =>
    `a[href=${url}].et-a{${innerHtml}}`,
  signLeft: /\[/g,
  signRight: /\)/g,
  signInner: /\\]\(/g,
  extendOnNewLine: false,
};

export const aParsers: ParserType[] = [
  {
    id: 'a',
    regex: /\[[^[\]]*]\([^()]*\)/gm,
    toHtml: (innerHtml: string) => {
      const aUrl = (innerHtml.match(/\(.*\)/g) as RegExpMatchArray)[0].replace(
        /[()]/g,
        ''
      );
      if (aUrl.startsWith(' ') || aUrl.endsWith(' ')) {
        return innerHtml;
      }

      const aInnerHtml = (
        innerHtml.match(/\[.*]/g) as RegExpMatchArray
      )[0].replace(/[\\[\]]/g, '');
      const emmet = aConfig.initialEmmet({
        innerHtml: aInnerHtml,
        url: aUrl,
      });
      return expand(emmet);
    },
  },
  {
    id: 'a',
    regex:
      /( |^)https?:\/\/(www\.)?[-a-zA-Z\d@:%._+~#=]{1,256}\.[a-zA-Z\d]{2,6}\b([-a-zA-Z\d@:%_+.()~#?&\\/=]*)( |$)/gm,
    toHtml: (innerHtml: string) => {
      const leftCharRegExp = /^( |)/g;
      const leftChar = innerHtml.match(leftCharRegExp)[0] || '';
      const rightCharRegExp = /( |)$/g;
      const rightChar = innerHtml.match(rightCharRegExp)[0] || '';
      innerHtml = innerHtml
        .replace(leftCharRegExp, '')
        .replace(rightCharRegExp, '');
      const emmet = aConfig.initialEmmet({
        innerHtml: innerHtml,
        url: innerHtml,
      });
      return `${leftChar}${expand(emmet)}${rightChar}`;
    },
  },
];
