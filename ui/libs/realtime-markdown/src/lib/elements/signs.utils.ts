import { CaretPosition } from '../utils/caret.utils';

export const displayCurrentHtmlElementSign = (
  $event: MouseEvent | KeyboardEvent,
  { currentHtmlElement }: CaretPosition
) => {
  hideSigns(getAllSignsElements($event.currentTarget as HTMLElement));
  if (isSign(currentHtmlElement)) {
    showSigns([currentHtmlElement]);
    return;
  }

  showSigns(getAllSignsElements(currentHtmlElement));
};

export const isSign = (element: HTMLElement): boolean =>
  element.className.includes('sign');
export const getAllSignsElements = (element: HTMLElement): HTMLElement[] =>
  Array.from(element.getElementsByClassName('sign')) as HTMLElement[];
export const showSigns = (elements: HTMLElement[]) => {
  for (const element of elements) {
    element.style.display = 'inline-block';
  }
};
export const hideSigns = (elements: HTMLElement[]) => {
  for (const element of elements) {
    element.style.display = 'none';
  }
};
