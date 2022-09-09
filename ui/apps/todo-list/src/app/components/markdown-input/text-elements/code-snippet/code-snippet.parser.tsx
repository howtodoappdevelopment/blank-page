import { MarkdownElementConfig } from '../../type';
import { CodeSnippet } from './code-snippet';

export const CODE_SNIPPET_PARSER: MarkdownElementConfig = {
  regex: /`.*`( ?)/gm,
  parser: (children) => <CodeSnippet>{children}</CodeSnippet>,
  removeSign: (txt: string) => txt.replace(/(^|)`|`$/g, ''),
};
