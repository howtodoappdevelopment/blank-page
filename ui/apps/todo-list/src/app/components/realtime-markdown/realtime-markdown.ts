import { el, setAttr } from 'redom';
import { uniqueId } from 'lodash-es';

import './realtime-markdown.css';
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
  setAttr(contentEditable, {
    contentEditable: 'true',
    id: uniqueId('realtime-markdown-input'),
    className: 'realtime-markdown-input inline-block w-full',
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
