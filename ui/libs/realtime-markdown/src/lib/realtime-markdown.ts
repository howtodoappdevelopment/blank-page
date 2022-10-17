import { el, setAttr, setStyle } from 'redom';
import { uniqueId } from 'lodash-es';

import { createWrapper } from './wrapper.element';
import { parseMarkdownToHtml } from './utils/static-parser.utils';
import { STATIC_BLOCK_PARSERS, STATIC_TXT_PARSERS } from './config';

import './realtime-markdown.css';
import { onKeyDown } from './events/keydown.event';
import { onMouseDown } from './events/mousedown.event';
import { hideSignsOf } from './utils/sign.utils';
import { onKeyUp } from './events/keyup.event';
import expand from 'emmet';

export const createMarkdownInput = (
  initialMarkdown?: string
): HTMLDivElement => {
  let innerHtml: string = Array(10).fill(expand('p{ }')).join('\n');
  if (initialMarkdown) {
    innerHtml = parseMarkdownToHtml(
      initialMarkdown,
      STATIC_BLOCK_PARSERS,
      STATIC_TXT_PARSERS
    );
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
  contentEditable.addEventListener('keyup', onKeyUp);

  return contentEditable;
};
