import { getAllSignsElements, isContent, isSign } from './elements.utils';
import { setStyle } from 'redom';

export const showSignOf = (currentHtmlElement: HTMLElement): void => {
  const currentElement =
    isSign(currentHtmlElement) || isContent(currentHtmlElement)
      ? (currentHtmlElement.parentElement as HTMLElement)
      : currentHtmlElement;
  const firstChild = currentElement.firstElementChild as HTMLElement;
  if (isSign(firstChild)) {
    setStyle(currentElement.firstElementChild as HTMLElement, {
      display: 'inline-block',
    });
  }

  const lastChild = currentElement.lastElementChild as HTMLElement;
  if (isSign(lastChild)) {
    setStyle(lastChild, {
      display: 'inline-block',
    });
  }
};

export const hideSignsOf = (parent: HTMLElement) => {
  const children = getAllSignsElements(parent);
  for (const child of children) {
    setStyle(child, {
      display: 'none',
    });
  }
};
