import React, { FunctionComponent, PropsWithChildren } from 'react';
import { SideNavProps } from './side-nav.props';

export const SideNav: FunctionComponent<PropsWithChildren<SideNavProps>> = ({
  children,
  extras,
}) => {
  return (
    <div className="flex flex-col basis-1/4 h-screen border-r-2 border-gray-100 px-8 py-6">
      {children}
      <div className="absolute bottom-6">{extras}</div>
    </div>
  );
};
