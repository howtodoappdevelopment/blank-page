import { ReactNode } from 'react';

export type MainHeaderProps = {
  extras?: ReactNode;
  onSideNavToggle?: (isOpen: boolean) => unknown;
};
