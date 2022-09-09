import { CodeBlock } from './code-block';
import { ParserType } from '../../type';
import { removeSign } from './utils';

export const CODE_BLOCK_PARSER: ParserType = {
  regex: /^( ?)+(```)((?!```)(.|\n))+(```)$/gm,
  parse: (txt: string) => <CodeBlock>{removeSign(txt)}</CodeBlock>,
};
