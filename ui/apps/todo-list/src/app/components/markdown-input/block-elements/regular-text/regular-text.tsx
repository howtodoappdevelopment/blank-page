import { FunctionComponent } from 'react';
import { MarkdownElementConfig } from '../../type';
import { uniqueId } from 'lodash-es';

export const RegularText: FunctionComponent<{
  children: string;
  textParsers: MarkdownElementConfig[];
}> = ({ children }) => {
  return (
    <p id={uniqueId('p')} key={uniqueId('p')} className="p">
      {children}
    </p>
  );
};
