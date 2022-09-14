import { el, setAttr } from 'redom';

export const createParagraph = (
  innerText: string | number = ' '
): HTMLParagraphElement => {
  const regularTextElement = el('p', innerText);
  setAttr(regularTextElement, {
    className: 'w-full mb-1',
  });
  return regularTextElement;
};
