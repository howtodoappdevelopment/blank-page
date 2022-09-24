import { isArray } from 'lodash-es';
import { STATIC_PARSERS } from '../config';

export const parseToHtml = (markdown: string): string => {
  for (const { regex, toHtml } of STATIC_PARSERS) {
    markdown = markdown.replace(regex, (match) =>
      toArray<string>(toHtml(match)).join('')
    );
  }
  return markdown;
};

const toArray = <T>(val: unknown): T[] => (isArray(val) ? val : [val as T]);
