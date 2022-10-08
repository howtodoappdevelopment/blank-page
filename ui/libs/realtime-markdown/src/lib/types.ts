import { ForkableIterator } from 'forkable-iterator';
import { CaretContext } from './utils/caret.utils';

export type toHtmlFuncArgs = {
  indent?: number;
  innerHtml?: string;
  [arg: string]: unknown | unknown[];
};
export type toOuterHtmlFunction = (args: toHtmlFuncArgs) => string;
export type BlockStaticParserType = {
  id: string;
  parseMarkdownToHtml: (
    line: string,
    txtParsers: TxtStaticParserType[],
    lineIterator: ForkableIterator<string, string>
  ) => string | null;
};
export type TxtStaticParserType = {
  id: string;
  parseMarkdownToHtml: (line: string) => string;
};
export type BlockDynamicParserType = {
  id: string;
  parseModifiedElement: (
    $event: KeyboardEvent,
    caretContext: CaretContext,
    setCaretPosition: (element: Element, position: number) => void
  ) => boolean;
  parseExtendedElement: (
    $event: KeyboardEvent,
    caretContext: CaretContext,
    setCaretPosition: (element: Element, position: number) => void
  ) => boolean;
  shortcut?: Array<string | number>;
};
export type TxtDynamicParserType = {
  id: string;
  parseModifiedElement: (
    $event: KeyboardEvent,
    caretContext: CaretContext,
    setCaretPosition: (element: Element, position: number) => void
  ) => boolean;
  shortcut?: Array<string | number>;
};
