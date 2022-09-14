import { KeyboardEvent } from 'react';
import { CaretPosition } from '../../realtime-markdown/utils/caret.utils';
import { MarkdownElementConfig } from '../type';
import { ITALIC_ID } from '../text-elements/italic/italic.parser';

export const isItalicTextEvent = ($event: KeyboardEvent<HTMLElement>) =>
  $event.ctrlKey && $event.key === 'i';
export const handleItalicText = (
  $event: KeyboardEvent<HTMLElement>,
  caretPosition: CaretPosition,
  elementConfig: MarkdownElementConfig
): void => {
  if ((elementConfig.disallowedTextElementsIds || []).includes(ITALIC_ID)) {
    $event.preventDefault();
    $event.stopPropagation();
    return;
  }
};
