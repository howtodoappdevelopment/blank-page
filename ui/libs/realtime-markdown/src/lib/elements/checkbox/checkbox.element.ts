import { el, setAttr, setStyle } from 'redom';

export const createCheckbox = (defaultChecked = false) => {
  const input = el('input');
  setStyle(input, {
    display: 'inline-block',
  });
  setAttr(input, {
    type: 'checkbox',
    defaultChecked: `${defaultChecked}`,
  });

  return input;
};
