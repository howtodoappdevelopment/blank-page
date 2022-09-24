export const isParagraph = (currentElement: HTMLElement): boolean =>
  currentElement.tagName.toLowerCase() === 'p';
export const isDiv = (currentElement: HTMLElement): boolean =>
  currentElement.tagName.toLowerCase() === 'div';
export const isSpan = (currentElement: HTMLElement): boolean =>
  currentElement.tagName.toLowerCase() === 'span';
