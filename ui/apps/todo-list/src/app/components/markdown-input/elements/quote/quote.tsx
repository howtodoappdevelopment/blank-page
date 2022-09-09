import { FunctionComponent, PropsWithChildren } from 'react';

export const Quote: FunctionComponent<
  PropsWithChildren<{ indentPx?: number }>
> = ({ children, indentPx = 0 }) => {
  return (
    <p
      className="border-l-4 border-gray-200 pl-2 bg-gray-100"
      style={{
        marginLeft: `${indentPx}px`,
      }}
    >
      {children}
    </p>
  );
};
