import { PARSERS } from '../parsers';
import { isArray } from 'lodash-es';

export const parseToHtml = (markdown: string): string => {
  console.log(markdown);
  for (const { regex, parser } of PARSERS) {
    markdown = markdown.replace(regex, (match) => {
      const parsedMatch = parser(match);
      const parsedElements = isArray(parsedMatch) ? parsedMatch : [parsedMatch];
      return parsedElements.map((element) => element.outerHTML).join('');
    });
  }

  console.log(markdown);

  markdown = markdown.replace(/<\/[^>]*>\n<[^>]*>/gm, (match) => {
    return match.replace('\n', '');
  });

  return markdown;
};
