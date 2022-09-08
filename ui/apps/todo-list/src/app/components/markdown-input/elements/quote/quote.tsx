import { FunctionComponent } from 'react';

export const Quote: FunctionComponent<{ children: string }> = ({
  children,
}) => {
  return (
    <p className="border-l-4 border-gray-200 pl-2 bg-gray-100">
      {children.replace('> ', '')}
    </p>
  );
};
