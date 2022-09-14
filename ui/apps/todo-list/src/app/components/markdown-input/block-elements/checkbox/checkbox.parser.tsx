import { MarkdownElementConfig } from '../../type';
import { Checkbox } from './checkbox';
import { uniqueId } from 'lodash-es';
import { ReactNode } from 'react';

export const CHECKBOX_ID = 'checkbox';
export const CHECKBOX_CHECKED_ID = 'checkbox-checked';
export const CHECKBOX_PARSER: MarkdownElementConfig = {
  id: CHECKBOX_ID,
  regex: /^ *- \[ ] .*$/gm,
  parser: (children, indentPx = 0) => (
    <Checkbox key={uniqueId('checkbox-unchecked')} indentPx={indentPx}>
      {children}
    </Checkbox>
  ),
  removeSign: (txt: string) => txt.replace(/^ *- \[(x| )] /g, ''),
};
export const CheckboxParser = (children: ReactNode, indentPx = 0) => (
  <Checkbox
    key={uniqueId('checkbox-checked')}
    indentPx={indentPx}
    defaultChecked
  >
    {children}
  </Checkbox>
);
export const CHECKBOX_CHECKED_PARSER: MarkdownElementConfig = {
  id: CHECKBOX_CHECKED_ID,
  regex: /^ *- \[x] .*$/gm,
  parser: CheckboxParser,
  removeSign: (txt: string) => txt.replace(/^ *- \[(x| )] /g, ''),
};
