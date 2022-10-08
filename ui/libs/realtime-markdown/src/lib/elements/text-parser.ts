import {
  BlockDynamicParserType,
  BlockStaticParserType,
  toOuterHtmlFunction,
} from '../types';
import { calcIndent } from '../utils/elements.utils';
import { CaretContext } from '../utils/caret.utils';

export const P_ID = 'p';
export const toOuterHtml: toOuterHtmlFunction = ({
  indent = 0,
  innerHtml = '&nbsp;',
}) =>
  `<p class="et-${P_ID} ml-${indent}"><span class="content">${innerHtml}</span></p>`;
export const paragraphDynamicParser: BlockDynamicParserType = {
  id: P_ID,
  parseModifiedElement: (
    $event: KeyboardEvent,
    caretContext: CaretContext,
    setCaretPosition: (element: Element, position: number) => void
  ) => false,
  parseExtendedElement: (
    $event: KeyboardEvent,
    caretContext: CaretContext,
    setCaretPosition: (element: Element, position: number) => void
  ) => false,
  shortcut: ['ctrl', 0],
};
export const paragraphStaticParser: BlockStaticParserType = {
  id: P_ID,
  parseMarkdownToHtml: (line: string, txtParsers): string => {
    for (const { parseMarkdownToHtml } of txtParsers) {
      line = parseMarkdownToHtml(line);
    }

    const indent = calcIndent(line);
    let content = line.replace('\n', '');
    content = content.trim() === '' ? '&nbsp;' : content;
    content = content.replace(new RegExp(`^ {${indent * 2}}`, 'g'), '');
    return toOuterHtml({ indent, innerHtml: content });
  },
};
