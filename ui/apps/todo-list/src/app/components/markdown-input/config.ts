import { MarkdownElementConfig } from './type';
import {
  HEADING_1_PARSER,
  HEADING_2_PARSER,
  HEADING_3_PARSER,
  HEADING_4_PARSER,
  HEADING_5_PARSER,
  HEADING_6_PARSER,
} from './block-elements/heading/heading.parser';
import {
  CHECKBOX_CHECKED_PARSER,
  CHECKBOX_PARSER,
} from './block-elements/checkbox/checkbox.parser';
import { QUOTE_PARSER } from './block-elements/quote/quote.parser';
import { CODE_BLOCK_PARSER } from './block-elements/code-block/code-block.parser';
import {
  ORDERED_LIST_ITEM_PARSER,
  UNORDERED_LIST_ITEM_PARSER,
} from './block-elements/list-item/list-item.parser';
import { BOLD_PARSER } from './text-elements/bold/bold.parser';
import { CODE_SNIPPET_PARSER } from './text-elements/code-snippet/code-snippet.parser';
import { ITALIC_PARSER } from './text-elements/italic/italic.parser';

export const config = Object.freeze({
  tabIndentPx: 20,
});

export const BLOCK_PARSERS: Readonly<MarkdownElementConfig[]> = [
  HEADING_1_PARSER,
  HEADING_2_PARSER,
  HEADING_3_PARSER,
  HEADING_4_PARSER,
  HEADING_5_PARSER,
  HEADING_6_PARSER,
  CHECKBOX_PARSER,
  CHECKBOX_CHECKED_PARSER,
  QUOTE_PARSER,
  CODE_BLOCK_PARSER,
  UNORDERED_LIST_ITEM_PARSER,
  ORDERED_LIST_ITEM_PARSER,
];
export const TEXT_PARSERS: Readonly<MarkdownElementConfig[]> = [
  BOLD_PARSER,
  CODE_SNIPPET_PARSER,
  ITALIC_PARSER,
];
