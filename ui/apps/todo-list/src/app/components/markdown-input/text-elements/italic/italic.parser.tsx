import { MarkdownElementConfig } from '../../type';
import { Italic } from './italic';

export const ITALIC_ID = 'i';
export const ITALIC_PARSER: MarkdownElementConfig = {
  id: ITALIC_ID,
  regex: /\*[^ *\n][^*]*[^ *\n]\*[^*]/gm,
  parser: (children) => <Italic>{children}</Italic>,
  removeSign: (txt: string) => txt.replace(/^\*\*|\*\*$/g, ''),
};
