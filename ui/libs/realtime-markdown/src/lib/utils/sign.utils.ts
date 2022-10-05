import { ELEMENTS_CONFIGS } from '../config';
import {
  getAllSignsElements,
  getElementUUID,
  isContent,
  isSign,
} from './elements.utils';

export const showSignOf = (currentHtmlElement: HTMLElement): void => {
  const currentElement =
    isSign(currentHtmlElement) || isContent(currentHtmlElement)
      ? (currentHtmlElement.parentElement as HTMLElement)
      : currentHtmlElement;
  const elementUUID = getElementUUID(currentElement) || '';
  const showLeftSign = !!ELEMENTS_CONFIGS[elementUUID]?.signLeft;
  if (showLeftSign) {
    (currentElement.firstElementChild as HTMLElement).style.display =
      'inline-block';
  }

  const showRightSign = !!ELEMENTS_CONFIGS[elementUUID]?.signRight;
  if (showRightSign) {
    (currentElement.lastElementChild as HTMLElement).style.display =
      'inline-block';
  }
};

export const hideSignsOf = (parent: HTMLElement) => {
  const children = getAllSignsElements(parent);
  for (const child of children) {
    child.style.display = 'none';
  }
};
