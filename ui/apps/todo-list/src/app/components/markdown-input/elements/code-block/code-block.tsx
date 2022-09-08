import { FunctionComponent } from 'react';

export const CodeBlock: FunctionComponent<{ children: string }> = ({
  children,
}) => {
  return (
    <pre>
      <code>{children.replace(/(^(```)\n|\n(```)$)/gm, '')}</code>
    </pre>
  );
};
