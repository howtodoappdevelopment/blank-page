import { el, setAttr } from 'redom';

export const createHeading = (
  size: number,
  children?: string | HTMLElement | HTMLElement[]
): HTMLHeadingElement => {
  return el(`h${size}`, children ?? ' ') as HTMLHeadingElement;
};

export const createParagraph = (
  innerText: string | number = ' '
): HTMLParagraphElement => {
  const regularTextElement = el('p', innerText);
  setAttr(regularTextElement, {
    className: 'w-full mb-1',
  });
  return regularTextElement;
};

export const createWrapper = (
  children?: string | HTMLElement | HTMLElement[]
): HTMLDivElement => {
  const wrapper = el('div', children ?? ' ');
  setAttr(wrapper, {
    className:
      'border-2 border-gray-100 w-full rounded-md focus:!border-gray-300 whitespace-pre h-96 overflow-auto p-4',
  });
  return wrapper;
};
