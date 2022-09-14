import { MarkdownElementConfig } from '../type';
import { KeyboardEvent } from 'react';
import { BOLD_ID } from '../text-elements/bold/bold.parser';
import { CaretPosition } from '../../realtime-markdown/utils/caret.utils';

export const isBoldTextEvent = ($event: KeyboardEvent<HTMLElement>) =>
  $event.ctrlKey && $event.key === 'b';
export const handleBoldText = (
  $event: KeyboardEvent<HTMLElement>,
  caretPosition: CaretPosition,
  elementConfig: MarkdownElementConfig
): void => {
  if ((elementConfig.disallowedTextElementsIds || []).includes(BOLD_ID)) {
    $event.preventDefault();
    $event.stopPropagation();
    return;
  }
};
