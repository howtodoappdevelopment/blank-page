import { FunctionComponent, PropsWithChildren } from 'react';

export const UnorderedListItem: FunctionComponent<
  PropsWithChildren<{ indentPx?: number }>
> = ({ children, indentPx = 0 }) => {
  return (
    <p
      style={{
        marginLeft: `${indentPx}px`,
      }}
    >
      <span>&#x2022; </span>
      {children}
    </p>
  );
};
