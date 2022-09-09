import { MarkdownElementConfig } from '../../type';
import { Checkbox } from './checkbox';
import { uniqueId } from 'lodash-es';

export const CHECKBOX_PARSER: MarkdownElementConfig = {
  regex: /^ *- \[ ] .*$/gm,
  parser: (children, indentPx = 0) => (
    <Checkbox key={uniqueId('checkbox-unchecked')} indentPx={indentPx}>
      {children}
    </Checkbox>
  ),
  removeSign: (txt: string) => txt.replace(/^ *- \[(x| )] /g, ''),
};
export const CHECKBOX_CHECKED_PARSER: MarkdownElementConfig = {
  regex: /^ *- \[x] .*$/gm,
  parser: (children, indentPx = 0) => (
    <Checkbox
      key={uniqueId('checkbox-checked')}
      indentPx={indentPx}
      defaultChecked
    >
      {children}
    </Checkbox>
  ),
  removeSign: (txt: string) => txt.replace(/^ *- \[(x| )] /g, ''),
};
