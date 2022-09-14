import { el } from 'redom';

export const createHeading = (
  size: number,
  children?: string | HTMLElement | HTMLElement[]
): HTMLHeadingElement => {
  return el(`h${size}`, children ?? ' ') as HTMLHeadingElement;
};
