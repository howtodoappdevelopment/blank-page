import { FunctionComponent, PropsWithChildren } from 'react';

export const CodeSnippet: FunctionComponent<PropsWithChildren> = ({
  children,
}) => <code className="border border-gray-200 bg-gray-100">{children}</code>;
