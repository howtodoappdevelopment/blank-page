import { Quote } from './quote';
import { MarkdownElementConfig } from '../../type';
import { uniqueId } from 'lodash-es';

export const QUOTE_ID = 'quote';
export const QUOTE_PARSER: MarkdownElementConfig = {
  id: QUOTE_ID,
  regex: /^( ?)+> .*$/gm,
  parser: (children, indentPx) => (
    <Quote key={uniqueId('quote')} indentPx={indentPx}>
      {children}
    </Quote>
  ),
  removeSign: (txt: string) => txt.replace(/^( ?)+> /gm, ''),
};
