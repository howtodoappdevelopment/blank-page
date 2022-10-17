import { getCaretContext, setCaretPosition } from '../utils/caret.utils';
import { rerenderElement } from '../utils/dynamic-parser.utils';
import { DYNAMIC_BLOCK_PARSERS } from '../config';

export const onKeyDown = ($event: KeyboardEvent) => {
  const caretContext = getCaretContext($event.target as HTMLElement);
  if (!caretContext) {
    return;
  }

  rerenderElement(
    $event,
    caretContext,
    setCaretPosition,
    DYNAMIC_BLOCK_PARSERS
  );
};
