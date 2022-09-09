import { UnorderedListItem } from './unordered-list-item';
import { ParserType } from '../../type';
import { countTabs } from '../utils';
import { config } from '../../config';
import { uniqueId } from 'lodash-es';
import { removeUnorderedSign } from './utils';
import { OrderedListItem } from './ordered-list-item';

export const UNORDERED_LIST_ITEM_PARSER: ParserType = {
  regex: /^( ?)+[-+*] .*$/gm,
  parse: (txt: string) => (
    <UnorderedListItem
      key={uniqueId('unordered-list-item')}
      indentPx={countTabs(txt) * config.tabIndentPx}
    >
      {removeUnorderedSign(txt)}
    </UnorderedListItem>
  ),
};
export const ORDERED_LIST_ITEM_PARSER: ParserType = {
  regex: /^( ?)+\d+\. .*$/gm,
  parse: (txt: string) => (
    <OrderedListItem
      key={uniqueId('unordered-list-item')}
      indentPx={countTabs(txt) * config.tabIndentPx}
    >
      {removeUnorderedSign(txt)}
    </OrderedListItem>
  ),
};
