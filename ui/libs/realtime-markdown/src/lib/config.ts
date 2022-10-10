import { ParseBlockMarkdownToHtml, ParserTxtMarkdownToHtml } from './types';
import { aStaticParsers } from './elements/a-configs';
import { bStaticParser } from './elements/b-configs';
import { codeStaticParser } from './elements/code-configs';
import { headingsStaticParser } from './elements/headings-configs';
import { highlightStaticParser } from './elements/highlight-config';
import { iStaticParser } from './elements/i-configs';
import { imgStaticParser } from './elements/img-configs';
import { strikeStaticParser } from './elements/strike-configs';
import { precodeStaticParser } from './elements/precode-configs';
import { quoteStaticParser } from './elements/quote-configs';

// GENERAL
export const config = {
  maxIndent: 10,
};

// STATIC
export const STATIC_BLOCK_PARSERS: ParseBlockMarkdownToHtml[] = [
  headingsStaticParser,
  precodeStaticParser,
  quoteStaticParser,
];
export const STATIC_TXT_PARSERS: ParserTxtMarkdownToHtml[] = [
  imgStaticParser,
  ...aStaticParsers,
  bStaticParser,
  codeStaticParser,
  highlightStaticParser,
  iStaticParser,
  strikeStaticParser,
];

// DYNAMIC
