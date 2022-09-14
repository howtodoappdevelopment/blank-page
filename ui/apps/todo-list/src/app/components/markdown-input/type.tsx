import { ReactNode } from 'react';

export type ParserType = (children: ReactNode, indentPx?: number) => ReactNode;
export type RemoveSignType = (txt: string) => string;
export type MarkdownElementConfig = {
  id: string;
  regex: RegExp;
  parser: ParserType;
  removeSign: RemoveSignType;
  disallowedTextElementsIds?: string[];
};
