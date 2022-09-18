import { el, setAttr } from 'redom';

export const createCheckbox = (defaultChecked = false) => {
  const input = el('input');
  setAttr(input, {
    className: 'inline-block',
    type: 'checkbox',
    defaultChecked: `${defaultChecked}`,
  });

  return input;
};
