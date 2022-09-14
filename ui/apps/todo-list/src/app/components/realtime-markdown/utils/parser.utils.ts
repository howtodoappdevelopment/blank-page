import { PARSERS } from '../parsers';
import { isArray } from 'lodash-es';

export const parseToHtml = (markdown: string): string => {
  for (const { regex, parser } of PARSERS) {
    markdown = markdown.replace(regex, (match) => {
      const parsedMatch = parser(match);
      const parsedElements = isArray(parsedMatch) ? parsedMatch : [parsedMatch];
      return parsedElements.map((element) => element.outerHTML).join('');
    });
  }

  return markdown;
};
