import { ParserType } from '../../type';
import { Checkbox } from './checkbox';
import { removeSign } from './utils';
import { config } from '../../config';
import { countTabs } from '../utils';
import { uniqueId } from 'lodash-es';

export const CHECKBOX_PARSER: ParserType = {
  regex: /^ *- \[ ] .*$/gm,
  parse: (txt: string) => (
    <Checkbox
      key={uniqueId('checkbox-unchecked')}
      indentPx={countTabs(txt) * config.tabIndentPx}
    >
      {removeSign(txt)}
    </Checkbox>
  ),
};
export const CHECKBOX_CHECKED_PARSER: ParserType = {
  regex: /^ *- \[x] .*$/gm,
  parse: (txt: string) => (
    <Checkbox
      key={uniqueId('checkbox-checked')}
      indentPx={countTabs(txt) * config.tabIndentPx}
      defaultChecked
    >
      {removeSign(txt)}
    </Checkbox>
  ),
};
