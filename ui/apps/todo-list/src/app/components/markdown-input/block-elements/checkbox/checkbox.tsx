import { FunctionComponent, PropsWithChildren } from 'react';

export const Checkbox: FunctionComponent<
  PropsWithChildren<{
    defaultChecked?: boolean;
    indentPx?: number;
  }>
> = ({ children, defaultChecked = false, indentPx = 0 }) => {
  return (
    <p
      style={{
        marginLeft: `${indentPx}px`,
      }}
    >
      <input
        className="inline-block"
        type="checkbox"
        defaultChecked={defaultChecked}
      />
      {'  '}
      <span>{children}</span>
    </p>
  );
};
