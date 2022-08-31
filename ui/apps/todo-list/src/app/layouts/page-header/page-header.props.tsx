import { ReactNode } from 'react';

export const MAX_NESTING_LEVEL = 3;
export type PageHeaderProps = {
  backUrl?: string;
  title: string;
  subTitle?: string;
  description?: string;
  extras?: ReactNode;
};
