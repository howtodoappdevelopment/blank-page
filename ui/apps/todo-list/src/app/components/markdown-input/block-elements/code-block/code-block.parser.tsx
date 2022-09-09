import { CodeBlock } from './code-block';
import { MarkdownElementConfig } from '../../type';

export const CODE_BLOCK_PARSER: MarkdownElementConfig = {
  regex: /^( ?)+(```)((?!```)(.|\n))+(```)$/gm,
  parser: (children) => <CodeBlock>{children}</CodeBlock>,
  removeSign: (txt: string) => txt.replace(/^( ?)+(```)\n|( ?)+(```)$/gm, ''),
};
