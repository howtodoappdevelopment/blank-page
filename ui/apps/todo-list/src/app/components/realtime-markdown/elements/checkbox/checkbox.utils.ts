import { CaretPosition } from '../../utils/caret.utils';
import { CHECKBOX_REGEX, PARSE_CHECKBOX } from './checkbox.parser';
import { mount } from 'redom';

const HANDLED_TAGS = ['p'];

export const handleCheckboxOnKeyUp = (
  $event: KeyboardEvent,
  caretPosition: CaretPosition
): void => {
  const canTagBeHandled = HANDLED_TAGS.includes(
    caretPosition.currentHtmlElement.tagName.toLowerCase()
  );
  const checkboxInput = !!caretPosition.currentHtmlElement.innerHTML.match(
    /<input.*type="checkbox".*>/g
  );
  // if (!canTagBeHandled && !hasCheckbox) {
  //   return false;
  // }
  //
  // if (!canTagBeHandled && hasCheckbox) {
  //   return true;
  // }

  // const match =
  //   caretPosition.currentHtmlElement.innerHTML.match(CHECKBOX_REGEX);
  // if (!match) {
  //   return false;
  // }
  //
  // mount(
  //   $event.currentTarget as HTMLElement,
  //   PARSE_CHECKBOX(caretPosition.currentHtmlElement.innerHTML),
  //   caretPosition.currentHtmlElement,
  //   true
  // );
};
