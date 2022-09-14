import { FunctionComponent, PropsWithChildren } from 'react';
import { uniqueId } from 'lodash-es';

export const Bold: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <b id={uniqueId('b-')} key={uniqueId('b-')} className="b">
    {children}
  </b>
);
