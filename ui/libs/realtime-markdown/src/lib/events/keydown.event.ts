import { getCaretContext } from '../utils/caret.utils';

export const onKeyDown = ($event: KeyboardEvent) => {
  const caretContext = getCaretContext($event.target as HTMLElement);
  if (!caretContext) {
    return;
  }
};
