import { MarkdownElementConfig } from '../../type';
import { Bold } from './bold';

export const BOLD_PARSER: MarkdownElementConfig = {
  regex: /\*\*[^ ][^*]*[^ ]\*\*/gm,
  parser: (children) => <Bold>{children}</Bold>,
  removeSign: (txt: string) => txt.replace(/^\*\*|\*\*$/g, ''),
};
