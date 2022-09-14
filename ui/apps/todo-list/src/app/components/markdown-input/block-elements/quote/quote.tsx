import { FunctionComponent, PropsWithChildren } from 'react';
import { uniqueId } from 'lodash-es';

export const Quote: FunctionComponent<
  PropsWithChildren<{ indentPx?: number }>
> = ({ children, indentPx = 0 }) => {
  return (
    <p
      id={uniqueId('quote-')}
      key={uniqueId('quote-')}
      className="quote border-l-4 border-gray-200 pl-2 bg-gray-100"
      style={{
        marginLeft: `${indentPx}px`,
      }}
    >
      {children}
    </p>
  );
};
