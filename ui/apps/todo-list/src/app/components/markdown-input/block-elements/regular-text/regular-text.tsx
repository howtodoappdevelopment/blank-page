import { FunctionComponent } from 'react';
import { MarkdownElementConfig } from '../../type';

export const RegularText: FunctionComponent<{
  children: string;
  textParsers: MarkdownElementConfig[];
}> = ({ children }) => {
  return <p>{children}</p>;
};
