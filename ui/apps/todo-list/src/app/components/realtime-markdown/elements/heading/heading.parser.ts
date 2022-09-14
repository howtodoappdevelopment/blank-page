import { createHeading } from './heading.element';
import { ParserType } from '../../utils/parser.type';

const HEADING_REGEX = /^#{1,6} .*\n/gm;
const PARSE_HEADING = (innerHtml: string): HTMLElement => {
  const size =
    (innerHtml.match(/^#{1,6} /gm) as RegExpMatchArray)[0].length - 1;
  return createHeading(size, innerHtml);
};
export const HEADING_PARSER: ParserType = {
  regex: HEADING_REGEX,
  parser: PARSE_HEADING,
};
