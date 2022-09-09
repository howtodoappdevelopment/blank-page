import { Quote } from './quote';
import { ParserType } from '../../type';
import { removeSign } from './utils';
import { countTabs } from '../utils';
import { config } from '../../config';
import { uniqueId } from 'lodash-es';

export const QUOTE_PARSER: ParserType = {
  regex: /^( ?)+> .*$/gm,
  parse: (txt: string) => (
    <Quote
      key={uniqueId('quote')}
      indentPx={countTabs(txt) * config.tabIndentPx}
    >
      {removeSign(txt)}
    </Quote>
  ),
};
