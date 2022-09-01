import { ReactNode } from 'react';

export type MainHeaderProps = {
  extras?: ReactNode;
  open?: boolean;
  onSideNavToggle?: (isOpen: boolean) => unknown;
};
