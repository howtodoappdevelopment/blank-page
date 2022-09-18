import { el, mount, setAttr } from 'redom';

export const createHeading = (
  size: number,
  children?: string
): HTMLHeadingElement => {
  const sign = Array(size).fill('#').join('');
  const signElement = el('span', `${sign} `) as HTMLSpanElement;
  setAttr(signElement, {
    className: 'sign text-gray-300',
  });

  const heading = el(`h${size}`) as HTMLHeadingElement;
  heading.innerHTML = children ?? '&nbsp;';
  mount(heading, signElement, heading.firstChild as ChildNode);
  return heading;
};
