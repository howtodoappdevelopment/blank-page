import { CaretContext } from '../../utils/caret.utils';
import { range } from 'lodash-es';
import { HEADING_REGEX } from './heading.parser';
import { createParagraph } from '../paragraph.element';
import { createHeading } from './heading.element';
import { mount } from 'redom';
import { isSign } from '../signs.utils';
import { isParagraph } from '../../utils/elements.utils';

export const handleHeadingOnKeyDown = (
  $event: KeyboardEvent,
  { currentHtmlElement, position }: CaretContext,
  setCaretPosition: (element: Element, position: number) => void
): void => {
  const parentHtmlElement = currentHtmlElement.parentNode as HTMLElement;

  // move letter from sign to header text
  if (
    `${$event.key}`.length === 1 &&
    isSign(currentHtmlElement) &&
    _hasTextSign(parentHtmlElement.innerText) &&
    currentHtmlElement.innerText.length === position.relative
  ) {
    $event.preventDefault();
    $event.stopPropagation();

    const nextElement = currentHtmlElement.nextSibling;
    if (!nextElement) {
      parentHtmlElement.append($event.key);
    } else if (nextElement.nodeType === 3) {
      (nextElement as Text).before($event.key);
    } else {
      (nextElement as HTMLElement).innerText = `${$event.key}${
        (nextElement as HTMLElement).innerText
      }`;
    }

    setCaretPosition(parentHtmlElement, position.relative + 1);
  }
};

export const handleHeadingOnKeyUp = (
  $event: KeyboardEvent,
  { currentHtmlElement, position }: CaretContext,
  setCaretPosition: (element: Element, position: number) => void
): void => {
  const contentEditableElement = $event.currentTarget as HTMLElement;
  const parentHtmlElement = currentHtmlElement.parentNode as HTMLElement;

  // handle shortcuts
  if (_shouldHandleShortcuts($event, currentHtmlElement)) {
    const oldElement = isSign(currentHtmlElement)
      ? parentHtmlElement
      : currentHtmlElement;
    const currentSize = isParagraph(oldElement) ? 0 : _sizeOf(oldElement);
    const newSize = +$event.key;
    const innerHtml = _removeSign(oldElement.innerHTML);
    let newElement = createParagraph(innerHtml);
    if (newSize > 0) {
      newElement = createHeading(+$event.key, innerHtml);
    }
    mount(contentEditableElement, newElement, oldElement, true);
    if (isSign(currentHtmlElement)) {
      setCaretPosition(
        newElement,
        newSize < position.relative ? newSize : position.relative
      );
    } else {
      setCaretPosition(
        contentEditableElement,
        position.absolute - currentSize + newSize
      );
    }
  }
  // to heading from paragraph
  else if (
    isParagraph(currentHtmlElement) &&
    _hasTextSign(currentHtmlElement.innerHTML)
  ) {
    const newHeading = createHeading(
      _calcSize(currentHtmlElement.innerHTML),
      _removeSign(currentHtmlElement.innerHTML)
    );
    mount(contentEditableElement, newHeading, currentHtmlElement, true);
    setCaretPosition(newHeading, position.relative);
  }
  // to heading from heading
  else if (
    isSign(currentHtmlElement) &&
    _hasTextSign(parentHtmlElement.innerText)
  ) {
    const newSize = _calcSize(parentHtmlElement.innerText);
    const newHeading = createHeading(
      newSize,
      _removeSign(parentHtmlElement.innerHTML)
    );
    mount(contentEditableElement, newHeading, parentHtmlElement, true);
    setCaretPosition(newHeading, position.relative);
  }
  // to paragraph from heading
  else if (
    isSign(currentHtmlElement) &&
    _isHeading(parentHtmlElement) &&
    !_hasTextSign(parentHtmlElement.innerText)
  ) {
    const newParagraph = createParagraph(
      currentHtmlElement.innerText + _removeSign(parentHtmlElement.innerHTML)
    );
    mount(contentEditableElement, newParagraph, parentHtmlElement, true);
    setCaretPosition(newParagraph, position.relative);
  }
};
const _shouldHandleShortcuts = (
  $event: KeyboardEvent,
  currentElement: HTMLElement
) => {
  const keysArePressed =
    $event.altKey && $event.ctrlKey && range(0, 7).includes(+$event.key);
  const haveSameSizeAsRequested = +$event.key === +currentElement.tagName[1];
  return keysArePressed && !haveSameSizeAsRequested;
};

/* utils */
export const _calcSize = (txt: string) =>
  (txt.match(/^#{1,6} /gm) as RegExpMatchArray)[0].length - 1;
export const _removeSign = (txt: string): string =>
  txt.replace(/^#{1,6} /g, '').replace(/^<[^>]*>[^>]*<\/[^>]*>/g, '');
const _hasTextSign = (txt: string): boolean => !!txt.match(HEADING_REGEX);
const _isHeading = (currentElement: HTMLElement): boolean =>
  currentElement.tagName.toLowerCase().startsWith('h');
const _sizeOf = (heading: HTMLElement) => +heading.tagName[1];
