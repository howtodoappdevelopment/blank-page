import { el, setAttr, setStyle } from 'redom';
import { uniqueId } from 'lodash-es';

import { getCaretPosition, setCaretPosition } from './utils/caret.utils';
import {
  handleHeadingOnKeyDown,
  handleHeadingOnKeyUp,
} from './elements/heading/heading.utils';
import { createWrapper } from './elements/wrapper.element';
import { createParagraph } from './elements/paragraph.element';
import { parseToHtml } from './utils/parser.utils';
import {
  getAllSignsElements,
  displayCurrentHtmlElementSign,
  hideSigns,
} from './elements/signs.utils';

export const createMarkdownInput = (
  initialMarkdown?: string
): HTMLDivElement => {
  let innerHtml: string = Array(10)
    .fill(createParagraph(' ').outerHTML)
    .join('\n');
  if (initialMarkdown) {
    innerHtml = parseToHtml(initialMarkdown);
  }
  const contentEditable = createContentEditable(innerHtml);
  hideSigns(getAllSignsElements(contentEditable));
  return createWrapper(contentEditable);
};

/* UTILS */
export const createContentEditable = (children: string): HTMLElement => {
  const contentEditable = el('div');
  contentEditable.innerHTML = children;
  setStyle(contentEditable, {
    width: '100%',
    height: '100%',
    outline: 'none',
    border: 'none',
    'overflow-x': 'hidden',
    'overflow-y': 'auto',
    'box-shadow': 'none',
    'word-break': 'break-all',
    padding: '1rem',
  });
  setAttr(contentEditable, {
    contentEditable: 'true',
    id: uniqueId('realtime-markdown-input'),
  });

  contentEditable.addEventListener('mouseup', ($event) => {
    const caretPosition = getCaretPosition(contentEditable);
    if (!caretPosition) {
      return;
    }

    displayCurrentHtmlElementSign($event, caretPosition);
  });
  contentEditable.addEventListener('keydown', ($event) => {
    const caretPosition = getCaretPosition(contentEditable);
    if (!caretPosition) {
      return;
    }

    const SKIP_EVENTS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    if (SKIP_EVENTS.includes($event.key)) {
      return;
    }

    handleHeadingOnKeyDown($event, caretPosition, setCaretPosition);
  });
  contentEditable.addEventListener('keyup', ($event) => {
    const caretPosition = getCaretPosition(contentEditable);
    if (!caretPosition) {
      return;
    }

    const SKIP_EVENTS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    if (SKIP_EVENTS.includes($event.key)) {
      displayCurrentHtmlElementSign($event, caretPosition);
      return;
    }

    handleHeadingOnKeyUp($event, caretPosition, setCaretPosition);
  });

  return contentEditable;
};
