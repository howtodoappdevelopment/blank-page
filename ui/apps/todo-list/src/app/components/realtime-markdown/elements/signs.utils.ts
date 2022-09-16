import { CaretPosition } from '../utils/caret.utils';

let PREV_NODE_SIGNS: HTMLElement[] = [];
export const handleShowSign = (
  $event: MouseEvent | KeyboardEvent,
  { currentHtmlElement }: CaretPosition
) => {
  hideSigns(PREV_NODE_SIGNS);
  if (isSign(currentHtmlElement)) {
    showSigns([currentHtmlElement]);
    PREV_NODE_SIGNS = [currentHtmlElement];
    return;
  }

  const currentNodeSigns = getAllSignsElements(currentHtmlElement);
  showSigns(currentNodeSigns);
  PREV_NODE_SIGNS = currentNodeSigns;
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
