import { ParseBlockMarkdownToHtml, ParseOnModification } from '../types';
import expand from 'emmet';
import {
  calcHeadingSize,
  currentInnerHtml,
  getElementUUID,
  getParentElementOf,
  htmlToElement,
  isContent,
  isHeading,
  isSign,
  NOT_HEADING,
} from '../utils/elements.utils';
import { keyBy } from 'lodash-es';
import { CaretContext } from '../utils/caret.utils';
import { P_ID, toOuterHtml } from './paragraph.parsers';
import { mount } from 'redom';

export const H1_ID = 'h1';
export const h1Config = {
  id: H1_ID,
  toOuterHtml: ({ innerHtml = '&nbsp;' }) =>
    `<h1 class="et-${H1_ID}">` +
    `<span class="sign">#&nbsp;</span>` +
    `<span class="content">${innerHtml}</span>` +
    `</h1>`,
};
export const H2_ID = 'h2';
export const h2Config = {
  id: H2_ID,
  toOuterHtml: ({ innerHtml = '&nbsp;' }) =>
    `<h2 class="et-${H2_ID}">` +
    `<span class="sign">##&nbsp;</span>` +
    `<span class="content">${innerHtml}</span>` +
    `</h2>`,
};
export const H3_ID = 'h3';
export const h3Config = {
  id: H3_ID,
  toOuterHtml: ({ innerHtml = '&nbsp;' }) =>
    `<h3 class="et-${H3_ID}">` +
    `<span class="sign">###&nbsp;</span>` +
    `<span class="content">${innerHtml}</span>` +
    `</h3>`,
};
export const H4_ID = 'h4';
export const h4Config = {
  id: H4_ID,
  toOuterHtml: ({ innerHtml = '&nbsp;' }) =>
    `<h4 class="et-${H4_ID}">` +
    `<span class="sign">####&nbsp;</span>` +
    `<span class="content">${innerHtml}</span>` +
    `</h4>`,
};
export const H5_ID = 'h5';
export const h5Config = {
  id: H5_ID,
  toOuterHtml: ({ innerHtml = '&nbsp;' }) =>
    `<h5 class="et-${H5_ID}">` +
    `<span class="sign">#####&nbsp;</span>` +
    `<span class="content">${innerHtml}</span>` +
    `</h5>`,
};
export const H6_ID = 'h6';
export const h6Config = {
  id: H6_ID,
  toOuterHtml: ({ innerHtml = '&nbsp;' }) =>
    `<h6 class="et-${H6_ID}">` +
    `<span class="sign">######&nbsp;</span>` +
    `<span class="content">${innerHtml}</span>` +
    `</h6>`,
};
const HEADINGS_MAP = keyBy(
  [h1Config, h2Config, h3Config, h4Config, h5Config, h6Config],
  'id'
);
const ALLOWED_KEYS = ['#', ' ', 'Backspace'];
const ALLOWED_ELEMENTS_TYPES = () => [
  P_ID,
  H1_ID,
  H2_ID,
  H3_ID,
  H4_ID,
  H5_ID,
  H6_ID,
];
export const headingsContentChangeParser: ParseOnModification = (
  $event: KeyboardEvent,
  { currentHtmlElement, position: { relative } }: CaretContext,
  setCaretPosition: (element: Element, position: number) => void
) => {
  if (!ALLOWED_KEYS.includes($event.key)) {
    return false;
  }

  const parent = getParentElementOf(currentHtmlElement);
  const uuid = getElementUUID(parent) || '';
  const hasUuid = uuid && uuid !== '';
  const isAllowedElementType = ALLOWED_ELEMENTS_TYPES().includes(uuid);

  if (!hasUuid || !isAllowedElementType) {
    return false;
  }

  const newInnerHtml = currentInnerHtml(
    $event,
    currentHtmlElement.innerHTML,
    relative
  );
  const newSize = calcHeadingSize(newInnerHtml);
  const H_ID = `h${newSize}`;

  console.log(newSize, H_ID, newInnerHtml);

  const skipParsingParagraph =
    uuid === P_ID &&
    (!isContent(currentHtmlElement) || newSize === NOT_HEADING);
  if (skipParsingParagraph) {
    return false;
  }

  const skipParsingHeading = isHeading(parent) && !isSign(currentHtmlElement);
  if (skipParsingHeading) {
    return false;
  }

  $event.preventDefault();
  $event.stopPropagation();
  let newElement: HTMLElement | null = null;
  if (uuid === P_ID) {
    newElement = htmlToElement(
      HEADINGS_MAP[H_ID].toOuterHtml({
        innerHtml: newInnerHtml.replace(/^#{1,6}( |&nbsp;)/g, ''),
      })
    );
  } else if (newSize === NOT_HEADING) {
    newElement = htmlToElement(
      toOuterHtml({
        innerHtml:
          newInnerHtml +
          (currentHtmlElement.nextSibling as HTMLElement).innerHTML,
      })
    );
  } else {
    newElement = htmlToElement(
      HEADINGS_MAP[H_ID].toOuterHtml({
        innerHtml: (currentHtmlElement.nextSibling as HTMLElement).innerHTML,
      })
    );
  }

  mount($event.target as HTMLElement, newElement as HTMLElement, parent, true);
  setCaretPosition(
    newElement,
    $event.key === 'Backspace' ? relative - 1 : relative + 1
  );
  return true;
};
export const headingsStaticParser: ParseBlockMarkdownToHtml = (
  line,
  txtParsers
) => {
  const regExp = /^#{1,6} .*$/gm;
  if (!regExp.test(line)) {
    return null;
  }

  const H_ID = `h${calcHeadingSize(line)}`;
  line = line.replace(/^#{1,6} /g, '');
  for (const parseMarkdownToHtml of txtParsers) {
    line = parseMarkdownToHtml(line);
  }

  return HEADINGS_MAP[H_ID].toOuterHtml({
    innerHtml: line,
  });
};
