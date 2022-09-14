import { FunctionComponent, PropsWithChildren } from 'react';
import { uniqueId } from 'lodash-es';

export const CodeBlock: FunctionComponent<
  PropsWithChildren<{ indentPx?: number }>
> = ({ children, indentPx }) => {
  return (
    <pre
      id={uniqueId('code-block')}
      key={uniqueId('code-block')}
      className="code-block border border-gray-200 bg-gray-100"
      style={{
        marginLeft: `${indentPx}px`,
      }}
    >
      <code>{children}</code>
    </pre>
  );
};
