import { CaretContext } from './caret.utils';
import { ParseOnModification } from '../types';
import { getElementUUID, getParentElementOf } from './elements.utils';
import { BLOCK_TYPES_IDS } from '../config';

export const rerenderElement = (
  $event: KeyboardEvent,
  caretContext: CaretContext,
  setCaretPosition: (element: Element, position: number) => void,
  blockParsers: ParseOnModification[] = [],
  txtParsers: ParseOnModification[] = []
) => {
  if (
    [
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Shift',
      'Control',
      'Tab',
    ].includes($event.key)
  ) {
    return;
  }

  const { currentHtmlElement } = caretContext;
  const isBlockType = BLOCK_TYPES_IDS().includes(
    getElementUUID(getParentElementOf(currentHtmlElement)) ?? ''
  );

  console.log(currentHtmlElement, $event.key);
  if (isBlockType) {
    for (const parser of blockParsers) {
      if (parser($event, caretContext, setCaretPosition, txtParsers)) {
        return;
      }
    }

    return;
  }

  for (const parser of txtParsers) {
    if (parser($event, caretContext, setCaretPosition)) {
      return;
    }
  }
};
