import { FunctionComponent, PropsWithChildren } from 'react';

export const CodeBlock: FunctionComponent<
  PropsWithChildren<{ indentPx?: number }>
> = ({ children, indentPx }) => {
  return (
    <pre
      className="border border-gray-200 bg-gray-100"
      style={{
        marginLeft: `${indentPx}px`,
      }}
    >
      <code>{children}</code>
    </pre>
  );
};
