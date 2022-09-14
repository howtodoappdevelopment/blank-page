export type ParserType = {
  regex: RegExp;
  parser: (innerHtml: string) => HTMLElement;
};
