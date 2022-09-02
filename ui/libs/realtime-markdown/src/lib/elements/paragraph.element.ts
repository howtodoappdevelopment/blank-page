import { el, setAttr } from 'redom';

export const createParagraph = (
  children: string | number = ' '
): HTMLParagraphElement => {
  const regularTextElement = el('p');
  regularTextElement.innerHTML = `${children}`;
  setAttr(regularTextElement, {
    className: 'w-full mb-1',
  });
  return regularTextElement;
};
