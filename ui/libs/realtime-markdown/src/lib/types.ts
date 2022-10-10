import { ForkableIterator } from 'forkable-iterator';
import { CaretContext } from './utils/caret.utils';

export type toHtmlFuncArgs = {
  indent?: number;
  innerHtml?: string;
  [arg: string]: unknown | unknown[];
};
export type toOuterHtmlFunction = (args: toHtmlFuncArgs) => string;
export type ParseBlockMarkdownToHtml = (
  line: string,
  txtParsers: ParserTxtMarkdownToHtml[],
  lineIterator: ForkableIterator<string, string>
) => string | null;
export type ParserTxtMarkdownToHtml = (line: string) => string;
export type ParseOnModification = (
  $event: KeyboardEvent,
  caretContext: CaretContext,
  setCaretPosition: (element: Element, position: number) => void
) => boolean;
export type ParseOnShortCut = {
  shortcut: string[];
  parse: ParseOnModification;
};
