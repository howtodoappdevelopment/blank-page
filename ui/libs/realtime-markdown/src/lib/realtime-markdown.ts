import { el, setAttr, setStyle } from 'redom';
import { uniqueId } from 'lodash-es';

import { createWrapper } from './wrapper.element';
import { parseToHtml } from './utils/parser.utils';
import { getAllSignsElements, hideSigns } from './helpers/signs.utils';
import { createNewElement } from './utils/elements.utils';

export const createMarkdownInput = (
  initialMarkdown?: string
): HTMLDivElement => {
  let innerHtml: string = Array(10)
    .fill(createNewElement({ emmet: 'p{ }' }).outerHTML)
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
    padding: '2rem',
  });
  setAttr(contentEditable, {
    contentEditable: 'true',
    id: uniqueId('realtime-markdown-input'),
  });

  // contentEditable.addEventListener('mouseup', ($event) => {
  //   const caretContext = getCaretContext(contentEditable);
  //   if (!caretContext) {
  //     return;
  //   }
  //
  //   displayCurrentHtmlElementSign($event, caretContext);
  // });
  // contentEditable.addEventListener('keydown', ($event) => {
  //   const caretContext = getCaretContext(contentEditable);
  //   if (!caretContext) {
  //     return;
  //   }
  // });
  // contentEditable.addEventListener('keyup', ($event) => {
  //   const caretContext = getCaretContext(contentEditable);
  //   if (!caretContext) {
  //     return;
  //   }
  // });

  return contentEditable;
};
