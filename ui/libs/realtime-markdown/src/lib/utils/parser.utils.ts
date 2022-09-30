import { isArray } from 'lodash-es';
import { STATIC_PARSERS } from '../config';
import { ParserType } from '../types';

export const parseToHtml = (
  markdown: string,
  parsers: ParserType[] = STATIC_PARSERS
): string => {
  for (const { regex, toHtml } of parsers) {
    markdown = markdown.replace(regex, (match) =>
      toArray<string>(toHtml(match)).join('')
    );
  }
  return markdown;
};

const toArray = <T>(val: unknown): T[] => (isArray(val) ? val : [val as T]);
