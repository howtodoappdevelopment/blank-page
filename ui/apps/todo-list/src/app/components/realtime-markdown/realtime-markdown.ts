import { el, setAttr } from 'redom';
import { uniqueId } from 'lodash-es';

import './realtime-markdown.css';
import { getCaretPosition, setCaretPosition } from './utils/caret.utils';
import { handleHeading } from './elements/heading/heading.utils';
import { createWrapper } from './elements/wrapper.element';
import { createParagraph } from './elements/paragraph.element';
import { parseToHtml } from './utils/parser.utils';
import {
  getAllSignsElements,
  handleShowSign,
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

    console.log(caretPosition.position.absolute);
    handleShowSign($event, caretPosition);
  });
  contentEditable.addEventListener('keyup', ($event) => {
    const caretPosition = getCaretPosition(contentEditable);
    if (!caretPosition) {
      return;
    }

    const SKIP_EVENTS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    if (SKIP_EVENTS.includes($event.key)) {
      handleShowSign($event, caretPosition);
      return;
    }

    const setPosition = (position: number) =>
      setCaretPosition($event.currentTarget as HTMLElement, position);
    handleHeading($event, caretPosition, setPosition);
  });

  return contentEditable;
};
