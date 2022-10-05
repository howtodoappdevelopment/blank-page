import { el, setAttr, setStyle } from 'redom';
import { uniqueId } from 'lodash-es';

import { createWrapper } from './wrapper.element';
import { parseToHtml } from './utils/parser.utils';
import { createNewElement } from './utils/elements.utils';
import { BLOCK_PARSERS, TXT_PARSERS } from './config';

import './realtime-markdown.css';
import { onKeyDown } from './keydown.event';
import { onMouseDown } from './mousedown.event';
import { hideSignsOf } from './utils/sign.utils';

export const createMarkdownInput = (
  initialMarkdown?: string
): HTMLDivElement => {
  let innerHtml: string = Array(10)
    .fill(createNewElement({ emmet: 'p{ }' }).outerHTML)
    .join('\n');
  if (initialMarkdown) {
    innerHtml = parseToHtml(initialMarkdown, BLOCK_PARSERS, TXT_PARSERS);
  }

  const contentEditable = createContentEditable(innerHtml);
  hideSignsOf(contentEditable);
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

  contentEditable.addEventListener('mousedown', onMouseDown);
  contentEditable.addEventListener('keydown', onKeyDown);

  return contentEditable;
};
