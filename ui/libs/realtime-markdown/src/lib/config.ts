import { BlockParserType, TxtParserType } from './types';
import { aParsers } from './elements/a-configs';
import { bParser } from './elements/b-configs';
import { codeParser } from './elements/code-configs';
import { headingsParser } from './elements/headings-configs';
import { highlightParser } from './elements/highlight-config';
import { iParser } from './elements/i-configs';
import { imgParser } from './elements/img-configs';
import { strikeParser } from './elements/strike-configs';
import { precodeParser } from './elements/precode-configs';
import { quoteParser } from './elements/quote-configs';

export const config = {
  maxIndent: 10,
};

export const STATIC_BLOCK_PARSERS: BlockParserType[] = [
  headingsParser,
  precodeParser,
  quoteParser,
];
export const STATIC_TXT_PARSERS: TxtParserType[] = [
  imgParser,
  ...aParsers,
  bParser,
  codeParser,
  highlightParser,
  iParser,
  strikeParser,
];
