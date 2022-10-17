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
  txtParsers: ParseTxtMarkdownToHtml[],
  lineIterator: ForkableIterator<string, string>
) => string | null;
export type ParseTxtMarkdownToHtml = (line: string) => string;
export type ParseOnModification = (
  $event: KeyboardEvent,
  caretContext: CaretContext,
  setCaretPosition: (element: Element, position: number) => void,
  txtParsers?: ParseOnModification[]
) => boolean;
export type ParseOnShortCut = {
  shortcut: string[];
  parse: ParseOnModification;
};
