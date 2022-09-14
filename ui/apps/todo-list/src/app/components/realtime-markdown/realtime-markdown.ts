import { el, setAttr } from 'redom';
import { range, uniqueId } from 'lodash-es';

import './realtime-markdown.css';
import { getCaretPosition, setCaretPosition } from './utils/caret.utils';
import { createParagraph, createWrapper } from './elements';
import {
  handleHeading,
  handleHeadingShortcuts,
} from './handlers/heading.utils';

export const createMarkdownInput = (
  initialMarkdown?: string
): HTMLDivElement => {
  const initialChildren = range(0, 6).map(createParagraph);
  return createWrapper(createContentEditable(initialChildren));
};

/* UTILS */

export const createContentEditable = (
  children?: string | HTMLElement | HTMLElement[]
): HTMLElement => {
  const contentEditable = el('div', children ?? ' ');
  setAttr(contentEditable, {
    contentEditable: 'true',
    id: uniqueId('realtime-markdown-input'),
    className: 'realtime-markdown-input inline-block w-full',
  });

  contentEditable.addEventListener('keyup', ($event) => {
    const caretPosition = getCaretPosition(contentEditable);
    if (!caretPosition) {
      return;
    }

    const eventHandled =
      handleHeading($event, caretPosition) ||
      handleHeadingShortcuts($event, caretPosition);
    if (eventHandled) {
      setCaretPosition(
        $event.currentTarget as HTMLElement,
        caretPosition.position.absolute
      );
    }
  });

  return contentEditable;
};
