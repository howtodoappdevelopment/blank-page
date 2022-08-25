import React, { FunctionComponent, PropsWithChildren } from 'react';
import { EmptyProps } from './empty.props';
import { EmptyDefaultImage } from '../../../assets/empty_default';

export const Empty: FunctionComponent<PropsWithChildren<EmptyProps>> = ({
  children,
  description = 'No data',
  image = (
    <div className="w-96">
      <EmptyDefaultImage />
    </div>
  ),
}) => {
  if (typeof image === 'string') {
    image = <img src={image} alt="no content" />;
  }
  if (typeof description === 'string') {
    description = <span className="text-gray-500">{description}</span>;
  }

  return (
    <div className="flex flex-col items-center h-full w-full">
      {image}
      {description}
      {children}
    </div>
  );
};
