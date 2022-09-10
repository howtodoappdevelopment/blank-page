import { FunctionComponent, PropsWithChildren } from 'react';

export const Italic: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <i>{children}</i>
);
