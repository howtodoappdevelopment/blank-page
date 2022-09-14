import { MarkdownElementConfig } from '../../type';
import { Bold } from './bold';

export const BOLD_ID = 'b';
export const BOLD_PARSER: MarkdownElementConfig = {
  id: BOLD_ID,
  regex: /\*\*[^ ][^*]*[^ ]\*\*/gm,
  parser: (children) => <Bold>{children}</Bold>,
  removeSign: (txt: string) => txt.replace(/^\*\*|\*\*$/g, ''),
};
