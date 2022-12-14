import { MouseEvent } from 'react';

export const buttonSizes: string[] = [
  'x-large',
  'large',
  'default',
  'small',
  'x-small',
];
export type buttonSize = typeof buttonSizes[number];

export const buttonTypes = [
  'default',
  'primary',
  'secondary',
  'tertiary',
  'ghost',
  'url',
  'active',
  'side-nav',
];
export type buttonType = typeof buttonTypes[number];

export type ButtonProps = {
  size?: buttonSize;
  type?: buttonType;

  className?: string;

  onClick?: (e: MouseEvent<HTMLElement>) => unknown;
};
