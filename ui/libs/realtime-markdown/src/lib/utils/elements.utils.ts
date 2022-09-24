import { setAttr, setStyle } from 'redom';
import expand from 'emmet';
import { config } from '../config';

export type DOMConfig = {
  emmet: string;
  attr?: string | object;
  styles?: string | object;
  className?: string;
};
export const createNewElement = ({
  emmet,
  attr,
  styles,
}: DOMConfig): HTMLElement => {
  const parsedHtml = expand(emmet);
  const div = document.createElement('div');
  div.innerHTML = parsedHtml;
  const newElement = div.firstChild as HTMLElement;
  setStyle(newElement, styles ?? {});
  setAttr(newElement, attr ?? {});
  return newElement;
};
export const isHeading = (currentElement: HTMLElement): boolean =>
  currentElement.tagName.toLowerCase().startsWith('h');
export const calcHeadingSize = (innerHtml: string) =>
  (innerHtml.match(/^#{1,6} /g) as RegExpMatchArray)[0].length - 1;
export const isParagraph = (currentElement: HTMLElement): boolean =>
  currentElement.tagName.toLowerCase() === 'p';
export const isDiv = (currentElement: HTMLElement): boolean =>
  currentElement.tagName.toLowerCase() === 'div';
export const isSpan = (currentElement: HTMLElement): boolean =>
  currentElement.tagName.toLowerCase() === 'span';
export const calcIndent = (innerHtml: string): number => {
  const calcIndent = Math.floor(
    (innerHtml.match(/^ */g) as RegExpMatchArray)[0].length / 2
  );
  return calcIndent > config.maxIndent ? config.maxIndent : calcIndent;
};
export const increaseIndent = (
  element: HTMLElement | null | undefined
): void => {
  if (!element) {
    return;
  }

  const currentIndent = getIndent(element);
  const newIndent =
    currentIndent + 1 > config.maxIndent ? config.maxIndent : currentIndent + 1;
  element.className = element.className.replace(
    /pl-\d{1,2}/g,
    `pl-${newIndent}`
  );
};
export const decreaseIndent = (
  element: HTMLElement | null | undefined
): void => {
  if (!element) {
    return;
  }

  const currentIndent = getIndent(element);
  const newIndent = currentIndent - 1 < 0 ? 0 : currentIndent - 1;
  element.className = element.className.replace(
    /pl-\d{1,2}/g,
    `pl-${newIndent}`
  );
};
export const getIndent = (element: HTMLElement | null | undefined): number => {
  if (!element) {
    return -1;
  }

  const match = element.className.match(/pl-\d{1,2}/g);
  return match ? +match[0].replace('pl-', '') : -1;
};

export function uuid() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
export function canIndentRight(element: HTMLElement) {
  const MAX_SEARCH_DEPTH = 100;
  const currentElementIndent = getIndent(element);

  let depth = 0;
  let prevSibling = element.previousSibling as HTMLElement;
  while (depth < MAX_SEARCH_DEPTH && prevSibling) {
    const prevSiblingIndent = getIndent(prevSibling);
    if (prevSiblingIndent === -1) {
      return false;
    }

    if (prevSiblingIndent >= currentElementIndent) {
      return true;
    }

    prevSibling = prevSibling.previousSibling as HTMLElement;
    depth++;
  }

  return false;
}
