import { ParserType } from './type';
import { HEADING_PARSER } from './elements/heading/heading.parser';
import {
  CHECKBOX_CHECKED_PARSER,
  CHECKBOX_PARSER,
} from './elements/checkbox/checkbox.parser';
import { QUOTE_PARSER } from './elements/quote/quote.parser';
import { CODE_BLOCK_PARSER } from './elements/code-block/code-block.parser';

export const config = Object.freeze({
  tabIndentPx: 20,
});

export const BLOCK_PARSERS: Readonly<ParserType[]> = [
  HEADING_PARSER,
  CHECKBOX_PARSER,
  CHECKBOX_CHECKED_PARSER,
  QUOTE_PARSER,
  CODE_BLOCK_PARSER,
];
