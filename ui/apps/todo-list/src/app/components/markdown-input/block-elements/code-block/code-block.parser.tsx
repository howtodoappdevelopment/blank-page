import { CodeBlock } from './code-block';
import { MarkdownElementConfig } from '../../type';
import { CODE_SNIPPET_ID } from '../../text-elements/code-snippet/code-snippet.parser';

export const CODE_BLOCK_ID = 'code-block';
export const CODE_BLOCK_PARSER: MarkdownElementConfig = {
  id: CODE_BLOCK_ID,
  regex: /^( ?)+(```)((?!```)(.|\n))+(```)$/gm,
  parser: (children) => <CodeBlock>{children}</CodeBlock>,
  removeSign: (txt: string) => txt.replace(/^( ?)+(```)\n|( ?)+(```)$/gm, ''),
  disallowedTextElementsIds: [CODE_SNIPPET_ID],
};
