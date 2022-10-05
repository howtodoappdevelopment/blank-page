import { getCaretContext } from './utils/caret.utils';
import { hideSignsOf, showSignOf } from './utils/sign.utils';

export const onMouseDown = ($event: MouseEvent) => {
  hideSignsOf($event.currentTarget as HTMLElement);
  showSignOf($event.target as HTMLElement);

  const caretContext = getCaretContext($event.target as HTMLElement);
  if (!caretContext) {
    return;
  }
};
