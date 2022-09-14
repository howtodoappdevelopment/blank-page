import { el, setAttr } from 'redom';
import { uniqueId } from 'lodash-es';

import './realtime-markdown.css';
import { getCaretPosition, setCaretPosition } from './utils/caret.utils';
import {
  handleHeading,
  handleHeadingShortcuts,
} from './elements/heading.utils';
import { createWrapper } from './elements/wrapper.element';
import { createParagraph } from './elements/paragraph.element';
import { parseToHtml } from './utils/parser.utils';

export const createMarkdownInput = (
  initialMarkdown?: string
): HTMLDivElement => {
  let innerHtml: string = Array(10)
    .fill(createParagraph(' ').outerHTML)
    .join('\n');
  if (initialMarkdown) {
    innerHtml = parseToHtml(initialMarkdown);
  }

  return createWrapper(createContentEditable(innerHtml));
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
