import { el, setStyle } from 'redom';

export const createWrapper = (
  children?: string | HTMLElement | HTMLElement[]
): HTMLDivElement => {
  const wrapper = el('div', children ?? ' ');
  setStyle(wrapper, {
    width: '100%',
    height: '100%',
    display: 'flex',
    'border-width': '2px',
    'border-color': '#f3f4f6',
    'border-radius': '0.375rem',
  });
  return wrapper;
};
