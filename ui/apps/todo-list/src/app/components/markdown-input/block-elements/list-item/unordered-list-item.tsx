import { FunctionComponent, PropsWithChildren } from 'react';
import { uniqueId } from 'lodash-es';

export const UnorderedListItem: FunctionComponent<
  PropsWithChildren<{ indentPx?: number }>
> = ({ children, indentPx = 0 }) => {
  return (
    <p
      id={uniqueId('unordered-list-item-')}
      key={uniqueId('unordered-list-item-')}
      className="unordered-list-item"
      style={{
        marginLeft: `${indentPx}px`,
      }}
    >
      <span>&#x2022; </span>
      {children}
    </p>
  );
};
