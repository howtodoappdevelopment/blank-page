import { getCaretContext } from '../utils/caret.utils';
import { hideSignsOf, showSignOf } from '../utils/sign.utils';

export const onKeyUp = ($event: KeyboardEvent) => {
  const caretContext = getCaretContext($event.target as HTMLElement);
  if (!caretContext) {
    return;
  }

  if (
    ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes($event.key)
  ) {
    hideSignsOf($event.target as HTMLElement);
    showSignOf(caretContext.currentHtmlElement);
  } else {
    //
  }
};
