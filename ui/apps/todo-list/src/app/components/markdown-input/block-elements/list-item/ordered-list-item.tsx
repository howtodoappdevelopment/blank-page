import { FunctionComponent, PropsWithChildren } from 'react';

export const OrderedListItem: FunctionComponent<
  PropsWithChildren<{ indentPx?: number }>
> = ({ children, indentPx = 0 }) => {
  return (
    <p
      style={{
        marginLeft: `${indentPx}px`,
      }}
    >
      {children}
    </p>
  );
};
