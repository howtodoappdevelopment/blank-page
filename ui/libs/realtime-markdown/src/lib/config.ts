import { BlockStaticParserType, TxtStaticParserType } from './types';
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

export const config = {
  maxIndent: 10,
};

export const STATIC_BLOCK_PARSERS: BlockStaticParserType[] = [
  headingsStaticParser,
  precodeStaticParser,
  quoteStaticParser,
];
export const STATIC_TXT_PARSERS: TxtStaticParserType[] = [
  imgStaticParser,
  ...aStaticParsers,
  bStaticParser,
  codeStaticParser,
  highlightStaticParser,
  iStaticParser,
  strikeStaticParser,
];
