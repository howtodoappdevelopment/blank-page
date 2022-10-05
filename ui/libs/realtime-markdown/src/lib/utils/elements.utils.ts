import { setAttr, setStyle } from 'redom';
import expand from 'emmet';
import { config } from '../config';
import { includes } from 'lodash-es';

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
export const isSign = (element: HTMLElement): boolean =>
  element.className.includes('sign');
export const isContent = (element: HTMLElement): boolean =>
  element.className.includes('content');

export const calcIndent = (innerHtml: string): number => {
  const calcIndent = Math.floor(
    (innerHtml.match(/^ */g) as RegExpMatchArray)[0].length / 2
  );
  return calcIndent > config.maxIndent ? config.maxIndent : calcIndent;
};
export const getElementUUID = (element: HTMLElement): string | undefined =>
  element.className
    .match(/et-([a-zA-Z\d-]*)/g)
    ?.shift()
    ?.replace('et-', '');
export const getAllSignsElements = (element: HTMLElement): HTMLElement[] =>
  Array.from(element.getElementsByClassName('sign')) as HTMLElement[];
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
