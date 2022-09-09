import { UnorderedListItem } from './unordered-list-item';
import { MarkdownElementConfig } from '../../type';
import { uniqueId } from 'lodash-es';
import { OrderedListItem } from './ordered-list-item';

export const UNORDERED_LIST_ITEM_PARSER: MarkdownElementConfig = {
  regex: /^( ?)+[-+*] .*$/gm,
  parser: (children, indentPx = 0) => (
    <UnorderedListItem
      key={uniqueId('unordered-list-item')}
      indentPx={indentPx}
    >
      {children}
    </UnorderedListItem>
  ),
  removeSign: (txt: string) => txt.replace(/^( ?)+([-+*]) /gm, ''),
};
export const ORDERED_LIST_ITEM_PARSER: MarkdownElementConfig = {
  regex: /^( ?)+\d+\. .*$/gm,
  parser: (children, indentPx = 0) => (
    <OrderedListItem key={uniqueId('unordered-list-item')} indentPx={indentPx}>
      {children}
    </OrderedListItem>
  ),
  removeSign: (txt: string) => txt,
};
