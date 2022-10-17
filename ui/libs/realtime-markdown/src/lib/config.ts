import {
  ParseBlockMarkdownToHtml,
  ParseOnModification,
  ParseTxtMarkdownToHtml,
} from './types';
import { aStaticParsers } from './elements/a-configs';
import { bStaticParser } from './elements/b-configs';
import { codeStaticParser } from './elements/code-configs';
import {
  H1_ID,
  H2_ID,
  H3_ID,
  H4_ID,
  H5_ID,
  H6_ID,
  headingsContentChangeParser,
  headingsStaticParser,
} from './elements/headings.parsers';
import { highlightStaticParser } from './elements/highlight-config';
import { iStaticParser } from './elements/i-configs';
import { imgStaticParser } from './elements/img-configs';
import { strikeStaticParser } from './elements/strike-configs';
import { PRECODE_ID, precodeStaticParser } from './elements/precode-configs';
import { QUOTE_ID, quoteStaticParser } from './elements/quote-configs';
import { P_ID } from './elements/paragraph.parsers';

// GENERAL
export const config = {
  maxIndent: 10,
};
export const BLOCK_TYPES_IDS = () => [
  P_ID,
  H1_ID,
  H2_ID,
  H3_ID,
  H4_ID,
  H5_ID,
  H6_ID,
  PRECODE_ID,
  QUOTE_ID,
];

// STATIC
export const STATIC_BLOCK_PARSERS: ParseBlockMarkdownToHtml[] = [
  headingsStaticParser,
  precodeStaticParser,
  quoteStaticParser,
];
export const STATIC_TXT_PARSERS: ParseTxtMarkdownToHtml[] = [
  imgStaticParser,
  ...aStaticParsers,
  bStaticParser,
  codeStaticParser,
  highlightStaticParser,
  iStaticParser,
  strikeStaticParser,
];

// DYNAMIC
export const DYNAMIC_BLOCK_PARSERS: ParseOnModification[] = [
  headingsContentChangeParser,
];
