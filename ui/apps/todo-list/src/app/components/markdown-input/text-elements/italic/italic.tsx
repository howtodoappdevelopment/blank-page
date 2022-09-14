import { FunctionComponent, PropsWithChildren } from 'react';
import { uniqueId } from 'lodash-es';

export const Italic: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <i id={uniqueId('i-')} key={uniqueId('i-')} className="i">
    {children}
  </i>
);
