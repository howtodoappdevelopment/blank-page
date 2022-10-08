import { ForkableIterator } from 'forkable-iterator';

export type BlockParserType = {
  id: string;
  toHtml: (
    line: string,
    txtParsers: TxtParserType[],
    lineIterator: ForkableIterator<string, string>
  ) => string | null;
};
export type TxtParserType = {
  id: string;
  toHtml: (line: string) => string;
};

export type EmmetFuncArgs = {
  indent?: number;
  innerHtml?: string;
  [arg: string]: unknown | unknown[];
};
export type BlockConfig = {
  id: string;
  toEmmet: (args: EmmetFuncArgs) => string;
  newLineToEmmet?: (args: EmmetFuncArgs) => string;
  extendOnNewLine: boolean;
  shortcut?: Array<string | number>;
};
export type TxtConfig = {
  id: string;
  toEmmet: (args: EmmetFuncArgs) => string;
  shortcut?: Array<string | number>;
};
