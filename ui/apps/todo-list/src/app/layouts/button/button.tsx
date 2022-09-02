import React, { FunctionComponent, PropsWithChildren } from 'react';
import { ButtonProps, buttonSize, buttonType } from './button.props';

const commonClasses = 'rounded-full';
const typesClasses: { [type: buttonType]: string } = {
  primary:
    'border-2 border-transparent bg-primary-100 text-display-primary-900',
  secondary: 'border-2 border-primary-400 text-display-primary-900',
  tertiary: 'border-2 border-transparent bg-gray-100 text-display-gray-700',
  ghost: 'border-2 border-transparent text-display-gray-700',
  url: 'text-cyan-500 !p-0',
  'active-nav':
    'border-2 border-transparent text-display-left text-display-cyan-500 !px-0',
  'side-nav':
    'border-2 border-transparent text-display-gray-700 text-display-left !px-0',
  default:
    'border-2 border-transparent bg-primary-100 text-display-primary-900',
};
const sizesClasses: { [size: buttonSize]: string } = {
  'x-large': 'text-display-3xl px-6 py-2',
  large: 'text-display-2xl px-5 py-2',
  default: 'text-display-base px-4 py-1',
  small: 'text-display-sm px-3 py-0.5',
  'x-small': 'text-display-xs px-3 py-0.5',
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
