export type ParserType = {
  id: string;
  regex: RegExp;
  toHtml: (innerHtml: string) => string | string[];
};

export type EmmetFuncArgs = {
  indent?: number;
  innerHtml?: string;
  [arg: string]: unknown | unknown[];
};
export type ElementRepresentationConfig = {
  id: string;
  initialEmmet: (args: EmmetFuncArgs) => string;
  newLineEmmet?: (args: EmmetFuncArgs) => string;
  extendOnNewLine: boolean;
  signTop?: RegExp;
  signLeft?: RegExp;
  signRight?: RegExp;
  signInner?: RegExp;
  shortcut?: Array<string | number>;
};
