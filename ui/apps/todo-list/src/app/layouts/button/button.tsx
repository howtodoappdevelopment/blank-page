import React, { FunctionComponent, PropsWithChildren } from 'react';
import { ButtonProps, buttonSize, buttonType } from './button.props';

const commonClasses = 'rounded-full';
const typesClasses: { [type: buttonType]: string } = {
  primary: 'border-2 border-transparent bg-primary-100 text-primary-900',
  secondary: 'border-2 border-primary-400 text-primary-900',
  tertiary: 'border-2 border-transparent bg-gray-100 text-gray-700',
  ghost: 'border-2 border-transparent text-gray-700',
  url: 'text text-cyan-500 !p-0',
  active: 'border-2 border-transparent bg-cyan-100 text-cyan-700',
  'side-nav': 'border-2 border-transparent text-gray-700 text-left !px-0',
  default: 'border-2 border-transparent bg-primary-100 text-primary-900',
};
const sizesClasses: { [size: buttonSize]: string } = {
  'x-large': 'text-3xl px-6 py-2',
  large: 'text-2xl px-5 py-2',
  default: 'text-base px-4 py-1',
  small: 'text-sm px-3 py-0.5',
  'x-small': 'text-xs px-3 py-0.5',
};
export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  size = 'default',
  type = 'default',
  className = '',

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
}) => {
  const sizeClasses = sizesClasses[size]
    ? sizesClasses[size]
    : sizesClasses['default'];
  const typeClasses = typesClasses[type]
    ? typesClasses[type]
    : typesClasses['default'];
  const classes = `${commonClasses} ${sizeClasses} ${typeClasses} ${className} `;
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
