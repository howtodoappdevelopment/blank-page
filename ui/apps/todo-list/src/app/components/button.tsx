import React, { FunctionComponent, PropsWithChildren } from 'react';

export type ButtonProps = {
  size?: 'x-large' | 'large' | 'default' | 'medium' | 'small' | 'x-small';
  type?: 'default' | 'primary' | 'secondary' | 'tertiary';
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  size = 'default',
  type = 'default',
}) => {
  return <button className="w-12 h-12">{children}</button>;
};
