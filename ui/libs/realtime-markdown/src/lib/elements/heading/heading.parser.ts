import { createHeading } from './heading.element';
import { ParserType } from '../../utils/parser.type';
import { _calcSize, _removeSign } from './heading.utils';

export const HEADING_REGEX = /^#{1,6} .*$/gm;
export const PARSE_HEADING = (innerHtml: string): HTMLElement =>
  createHeading(_calcSize(innerHtml), _removeSign(innerHtml));
export const HEADING_PARSER: ParserType = {
  regex: HEADING_REGEX,
  parser: PARSE_HEADING,
};
