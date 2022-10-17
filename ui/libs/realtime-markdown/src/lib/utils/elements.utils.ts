import { config } from '../config';

export const currentInnerHtml = (
  $event: KeyboardEvent,
  innerHtml: string,
  relativePosition: number
): string => {
  switch ($event.key) {
    case 'Backspace':
      return [
        innerHtml.slice(0, relativePosition - 1),
        innerHtml.slice(relativePosition),
      ].join('');
    default:
      return [
        innerHtml.slice(0, relativePosition),
        $event.key,
        innerHtml.slice(relativePosition),
      ].join('');
  }
};

export const htmlToElement = (html: string): HTMLElement => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstChild as HTMLElement;
};

export const getParentElementOf = (
  currentHtmlElement: HTMLElement
): HTMLElement =>
  isSign(currentHtmlElement) || isContent(currentHtmlElement)
    ? (currentHtmlElement.parentElement as HTMLElement)
    : currentHtmlElement;
export const isHeading = (currentElement: HTMLElement): boolean =>
  currentElement.className.includes('et-h');
export const getHeadingSize = (currentElement: HTMLElement): number | -1 =>
  isHeading(currentElement)
    ? +(currentElement.className.match(/et-h\d/g) || ['-1'])[0].replace(
        'et-h',
        ''
      )
    : -1;
export const NOT_HEADING = 0;
export const calcHeadingSize = (innerHtml: string): number | 0 =>
  (innerHtml.match(/^#{1,6}( |&nbsp;)/g) || [''])[0].replace(/( |&nbsp;)/, '')
    .length;
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
    /ml-\d{1,2}/g,
    `ml-${newIndent}`
  );
};
export const getIndent = (element: HTMLElement | null | undefined): number => {
  if (!element) {
    return -1;
  }

  const match = element.className.match(/ml-\d{1,2}/g);
  return match ? +match[0].replace('ml-', '') : -1;
};
