import { ParserType } from './utils/parser.type';
import { HEADING_PARSER } from './elements/heading/heading.parser';
import { CHECKBOX_PARSER } from './elements/checkbox/checkbox.parser';
import {
  NEXT_LINE_PARSER,
  PURE_TEXT_PARSER,
} from './elements/pure-text.parser';

export const PARSERS: ParserType[] = [
  PURE_TEXT_PARSER,
  HEADING_PARSER,
  CHECKBOX_PARSER,
  NEXT_LINE_PARSER,
];
