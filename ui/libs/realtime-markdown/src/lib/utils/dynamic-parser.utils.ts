// Examples:
//   p.et-p.ml-0>span.content{## test} -> to h2
// p.et.p.ml-3>span.content{**test**} -> to p>span>b{test}
// p.et-p.ml-0>span.content{```} + enter -> create precode
// h1.et-h1>span.sign{#}+span.content{### } -> do nothing

import { CaretContext } from './caret.utils';

export const rerenderElement = (
  $event: KeyboardEvent,
  caretContext: CaretContext,
  setCaretPosition: (element: Element, position: number) => void
) => {
  // handle only special chars, backspace, enter, ..., skip arrows
  // is block content modified ?
  // rerender with block parsers
  // rerender with txt parsers
  // is txt content modified ?
  // rerender with txt parsers
  // is block sign modified ?
  // rerender with block parsers
  // is txt sign modified ?
  // rerender with txt parsers
};
