import { ParserType } from './utils/parser.type';
import { HEADING_PARSER } from './elements/heading/heading.parser';
import { CHECKBOX_PARSER } from './elements/checkbox/checkbox.parser';

export const PARSERS: ParserType[] = [HEADING_PARSER, CHECKBOX_PARSER];
