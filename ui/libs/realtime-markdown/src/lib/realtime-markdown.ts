import { el, setAttr, setStyle } from 'redom';
import { uniqueId } from 'lodash-es';

import { getCaretContext, setCaretPosition } from './utils/caret.utils';
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
import {
  handleCheckboxOnKeyDown,
  handleCheckboxOnKeyUp,
} from './elements/checkbox/checkbox.utils';
import {
  handleParagraphOnKeyDown,
  handleParagraphOnKeyUp,
} from './elements/paragraph.utils';

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
    const caretContext = getCaretContext(contentEditable);
    if (!caretContext) {
      return;
    }

    displayCurrentHtmlElementSign($event, caretContext);
  });
  contentEditable.addEventListener('keydown', ($event) => {
    const caretContext = getCaretContext(contentEditable);
    if (!caretContext) {
      return;
    }

    handleCheckboxOnKeyDown($event, caretContext, setCaretPosition);

    const SKIP_EVENTS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    if (SKIP_EVENTS.includes($event.key)) {
      return;
    }

    handleHeadingOnKeyDown($event, caretContext, setCaretPosition);
    handleParagraphOnKeyDown($event, caretContext, setCaretPosition);
  });
  contentEditable.addEventListener('keyup', ($event) => {
    const caretContext = getCaretContext(contentEditable);
    if (!caretContext) {
      return;
    }

    const SKIP_EVENTS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    if (SKIP_EVENTS.includes($event.key)) {
      displayCurrentHtmlElementSign($event, caretContext);
      return;
    }

    handleParagraphOnKeyUp($event, caretContext, setCaretPosition);
    handleHeadingOnKeyUp($event, caretContext, setCaretPosition);
    handleCheckboxOnKeyUp($event, caretContext, setCaretPosition);
  });

  return contentEditable;
};
