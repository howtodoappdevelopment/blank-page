import { MarkdownElementConfig } from '../../type';
import { CodeSnippet } from './code-snippet';
import { BOLD_ID } from '../bold/bold.parser';
import { ITALIC_ID } from '../italic/italic.parser';

export const CODE_SNIPPET_ID = 'code';
export const CODE_SNIPPET_PARSER: MarkdownElementConfig = {
  id: CODE_SNIPPET_ID,
  regex: /`.*`( ?)/gm,
  parser: (children) => <CodeSnippet>{children}</CodeSnippet>,
  removeSign: (txt: string) => txt.replace(/(^|)`|`$/g, ''),
  disallowedTextElementsIds: [BOLD_ID, ITALIC_ID],
};
