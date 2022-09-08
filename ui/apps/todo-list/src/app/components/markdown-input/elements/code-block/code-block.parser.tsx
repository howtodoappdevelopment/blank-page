import { CodeBlock } from './code-block';
import { ParserType } from '../../type';

export const CODE_BLOCK_PARSER: ParserType = {
  regex: /^```(\n|[^`])+```(\n|$)/gm,
  parse: (txt: string) => <CodeBlock>{txt}</CodeBlock>,
};
