// import { CaretContext } from '../utils/caret.utils';
// import { isDiv, isParagraph, isSpan } from '../utils/elements-configs.utils';
// import { createParagraph } from './paragraph.element';
// import { mount, unmount } from 'redom';
// import { config } from '../config';

// export const handleParagraphOnKeyDown = (
//   $event: KeyboardEvent,
//   { currentHtmlElement }: CaretContext,
//   setCaretPosition: (element: Element, position: number) => void
// ): void => {
//   if (!isParagraph(currentHtmlElement)) {
//     return;
//   }
//
//   const currentPadding = (currentHtmlElement.style.paddingLeft || '').match(
//     /^\d*/g
//   );
//
//   // handle shift + tab
//   if ($event.shiftKey && $event.key === 'Tab' && currentPadding) {
//     $event.preventDefault();
//     $event.stopPropagation();
//     currentHtmlElement.style.paddingLeft = `${
//       +currentPadding[0] - config.indentPx || 0
//     }px`;
//     return;
//   }
//
//   // handle tab
//   if ($event.key === 'Tab' && currentPadding) {
//     $event.preventDefault();
//     $event.stopPropagation();
//     currentHtmlElement.style.paddingLeft = `${
//       +currentPadding[0] + config.indentPx || 0
//     }px`;
//     return;
//   }
// };

// turn into transform new element to flat paragraph
// export const handleParagraphOnKeyUp = (
//   $event: KeyboardEvent,
//   { currentHtmlElement }: CaretContext,
//   setCaretPosition: (element: Element, position: number) => void
// ) => {
//   // convert div to paragraph
//   if (isDiv(currentHtmlElement)) {
//     const newParagraph = createParagraph(currentHtmlElement.innerHTML);
//     mount($event.target as HTMLElement, newParagraph, currentHtmlElement, true);
//     return;
//   }
//
//   // convert span wihtout any class to text node
//   if (isSpan(currentHtmlElement) && !currentHtmlElement.className) {
//     const parent = currentHtmlElement.parentNode as HTMLElement;
//     unmount(parent, currentHtmlElement);
//     parent.innerHTML += currentHtmlElement.innerHTML;
//     return;
//   }
// };
