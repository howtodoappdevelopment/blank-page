import { FunctionComponent, PropsWithChildren } from 'react';
import { uniqueId } from 'lodash-es';

export const CodeSnippet: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <code
    id={uniqueId('code-')}
    key={uniqueId('code-')}
    className="code border border-gray-200 bg-gray-100"
  >
    {children}
  </code>
);
