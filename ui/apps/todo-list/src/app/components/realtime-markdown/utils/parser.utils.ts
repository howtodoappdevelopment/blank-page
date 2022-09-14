import { PARSERS } from '../config';

export const parseToHtml = (markdown: string): string => {
  for (const { regex, parser } of PARSERS) {
    markdown = markdown.replace(regex, (match) => {
      return parser(match).outerHTML;
    });
  }

  return markdown;
};
