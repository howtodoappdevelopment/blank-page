import { FunctionComponent, PropsWithChildren } from 'react';

export const Bold: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <b>{children}</b>
);
