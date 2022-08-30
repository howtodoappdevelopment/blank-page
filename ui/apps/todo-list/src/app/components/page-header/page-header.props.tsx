import { ReactNode } from 'react';

export type PageHeaderProps = {
  backUrl?: string;
  title: string;
  subTitle?: string;
  description?: string;
  extras?: ReactNode;
};
