import { el, setAttr } from 'redom';

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
