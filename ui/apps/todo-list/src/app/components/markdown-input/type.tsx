import { ReactNode } from 'react';

export type ParserType = {
  regex: RegExp;
  parse: (line: string) => ReactNode;
};
