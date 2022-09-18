import { createParagraph } from './paragraph.element';
import { ParserType } from '../utils/parser.type';

const PURE_TEXT_REGEX = /[^<>\n]+(?![^<]*>|[^<>]*<\/)$/gm;
const PARSE_PURE_TEXT = (innerHtml: string): HTMLElement[] => {
  return innerHtml
    .split('\n')
    .filter((html) => html.trim() !== '')
    .map((html) => createParagraph(html));
};
export const PURE_TEXT_PARSER: ParserType = {
  regex: PURE_TEXT_REGEX,
  parser: PARSE_PURE_TEXT,
};

const NEXT_LINE_REGEX = /(^ *(\n|\r\n|\r)$)|(^$)/gm;
const PARSE_NEXT_LINE = (): HTMLElement => {
  return createParagraph('&nbsp;');
};
export const NEXT_LINE_PARSER: ParserType = {
  regex: NEXT_LINE_REGEX,
  parser: PARSE_NEXT_LINE,
};
