import { PARSERS } from '../parsers';
import { isArray } from 'lodash-es';
import {
  NEXT_LINE_PARSER,
  PURE_TEXT_PARSER,
} from '../elements/pure-text.parser';

export const parseToHtml = (markdown: string): string => {
  for (const { regex, parser } of [
    ...PARSERS,
    PURE_TEXT_PARSER,
    NEXT_LINE_PARSER,
  ]) {
    markdown = markdown.replace(regex, (match) => {
      const parsedMatch = parser(match);
      const parsedElements = isArray(parsedMatch) ? parsedMatch : [parsedMatch];
      return parsedElements.map((element) => element.outerHTML).join('');
    });
  }

  markdown = markdown.replace(/<\/[^>]*>\n<[^>]*>/gm, (match) => {
    return match.replace('\n', '');
  });

  return markdown;
};
