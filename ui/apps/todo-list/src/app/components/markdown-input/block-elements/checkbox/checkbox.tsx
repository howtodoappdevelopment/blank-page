import { FunctionComponent, PropsWithChildren, useState } from 'react';
import { uniqueId } from 'lodash-es';

export const Checkbox: FunctionComponent<
  PropsWithChildren<{
    defaultChecked?: boolean;
    indentPx?: number;
  }>
> = ({ children, defaultChecked = false, indentPx = 0 }) => {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <p
      id={uniqueId('checkbox-')}
      key={uniqueId('checkbox-')}
      className={`checkbox${checked ? '-checked' : ''}`}
      style={{
        marginLeft: `${indentPx}px`,
      }}
    >
      <input
        className="inline-block"
        type="checkbox"
        defaultChecked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
      {'  '}
      {children}
    </p>
  );
};
