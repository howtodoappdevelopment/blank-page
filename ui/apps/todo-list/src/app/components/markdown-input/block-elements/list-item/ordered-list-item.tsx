import { FunctionComponent, PropsWithChildren } from 'react';
import { uniqueId } from 'lodash-es';

export const OrderedListItem: FunctionComponent<
  PropsWithChildren<{ indentPx?: number }>
> = ({ children, indentPx = 0 }) => {
  return (
    <p
      id={uniqueId('ordered-list-item-')}
      key={uniqueId('ordered-list-item-')}
      className="ordered-list-item"
      style={{
        marginLeft: `${indentPx}px`,
      }}
    >
      {children}
    </p>
  );
};
