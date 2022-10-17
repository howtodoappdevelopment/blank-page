import { getCaretContext } from '../utils/caret.utils';
import { hideSignsOf, showSignOf } from '../utils/sign.utils';

export const onKeyUp = ($event: KeyboardEvent) => {
  if (
    ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes($event.key)
  ) {
    const caretContext = getCaretContext($event.target as HTMLElement);
    if (!caretContext) {
      return;
    }

    hideSignsOf($event.target as HTMLElement);
    showSignOf(caretContext.currentHtmlElement);
  }
};
