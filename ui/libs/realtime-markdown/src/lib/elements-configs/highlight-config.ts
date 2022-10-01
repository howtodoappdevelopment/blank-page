import {
  ElementRepresentationConfig,
  BlockParserType,
  TxtParserType,
} from '../types';
import expand from 'emmet';

export const highlightConfig: ElementRepresentationConfig = {
  id: 'highlight',
  initialEmmet: ({ innerHtml = '&nbsp;' }) =>
    `span.et-highlight>span.sign{==}+span.content{${innerHtml}}+span.sign{==}`,
  signLeft: /==/g,
  signRight: /==/g,
  extendOnNewLine: false,
};
export const highlightParser: TxtParserType = {
  id: 'highlight',
  toHtml: (line: string) => {
    const regExp = /( |^)==[^=]*==( |$)/gm;
    return line.replace(regExp, (match) => _toHighlight(match));
  },
};

const _toHighlight = (match: string) => {
  const leftCharRegExp = /^( |)/g;
  const leftChar = match.match(leftCharRegExp)[0] || '';
  const rightCharRegExp = /( |)$/g;
  const rightChar = match.match(rightCharRegExp)[0] || '';
  match = match
    .replace(leftCharRegExp, '')
    .replace(rightCharRegExp, '')
    .replace(/(^==|==$)/g, '');
  const emmet = highlightConfig.initialEmmet({
    innerHtml: match,
  });
  return `${leftChar}${expand(emmet)}${rightChar}`;
};
