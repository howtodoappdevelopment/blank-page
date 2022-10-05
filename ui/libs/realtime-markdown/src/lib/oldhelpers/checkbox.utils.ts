// import { CaretContext } from '../utils/caret.utils';
// import { isDiv, isParagraph } from '../utils/elements-configs.utils';
// import { mount, setStyle, unmount } from 'redom';

// on key down don't allow to go left from input
// handle tab
// handle tab + shift
// on enter generate new checkbox
// export const handleCheckboxOnMouseDown = (
//   $event: KeyboardEvent,
//   caretContext: CaretContext,
//   setCaretPosition: (element: Element, position: number) => void
// ): void => {};
//
// export const handleCheckboxOnKeyDown = (
//   $event: KeyboardEvent,
//   caretContext: CaretContext,
//   setCaretPosition: (element: Element, position: number) => void
// ): void => {
//   const currentElement = caretContext.currentHtmlElement;
//   const position = caretContext.position.relative;
//   const nextElement = currentElement.nextSibling as HTMLElement;
//
//   // go after input on right arrow and max length
//   if (
//     position === currentElement.innerText.length &&
//     nextElement &&
//     $event.key === 'ArrowRight' &&
//     nextElement.querySelector('input[type="checkbox"]')
//   ) {
//     $event.preventDefault();
//     $event.stopPropagation();
//     setCaretPosition(nextElement, 1);
//     return;
//   }
//
//   const checkboxInput = currentElement.querySelector('input[type="checkbox"]');
//   if (!checkboxInput) {
//     return;
//   }
//
//   if (position > 1) {
//     return;
//   }
//
//   // go through input on left arrow
//   if ($event.key === 'ArrowLeft') {
//     const prevElement = currentElement.previousSibling as HTMLElement;
//     if (prevElement) {
//       $event.preventDefault();
//       $event.stopPropagation();
//       setCaretPosition(prevElement, prevElement.innerText.length);
//     }
//     return;
//   }
//
//   console.log($event.key);
//   if ($event.key === 'Backspace') {
//     $event.preventDefault();
//     $event.stopPropagation();
//     unmount(currentElement, checkboxInput);
//   }
// };
//
// export const handleCheckboxOnKeyUp = (
//   $event: KeyboardEvent,
//   caretContext: CaretContext,
//   setCaretPosition: (element: Element, position: number) => void
// ): void => {
//   const currentElement = caretContext.currentHtmlElement;
//   if (isDiv(currentElement)) {
//     return;
//   }
//
//   if (!isParagraph(currentElement)) {
//     const checkboxInput = currentElement.querySelector(
//       'input[type="checkbox"]'
//     ) as HTMLInputElement;
//     if (!checkboxInput) {
//       return;
//     }
//
//     const sign = checkboxInput.checked ? '- [x]' : '- [ ]';
//     mount(currentElement, document.createTextNode(sign), checkboxInput, true);
//     return;
//   }
//
//   const checkboxInput = currentElement.querySelector(
//     'input[type="checkbox"]'
//   ) as HTMLInputElement;
//   if (checkboxInput) {
//     return;
//   }
//
//   const hasCheckboxSign = currentElement.innerHTML.match(CHECKBOX_REGEX);
//   if (!hasCheckboxSign) {
//     return;
//   }
//
//   const paragraphWithInput = PARSE_CHECKBOX(currentElement.innerHTML);
//   setStyle(paragraphWithInput, {
//     'padding-left': currentElement.style.paddingLeft || '0px',
//   });
//   mount(
//     $event.currentTarget as HTMLElement,
//     paragraphWithInput,
//     currentElement,
//     true
//   );
//   setCaretPosition(paragraphWithInput, caretContext.position.relative + 2);
// };
