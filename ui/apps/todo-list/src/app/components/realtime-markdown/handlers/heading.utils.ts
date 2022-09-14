import { mount } from 'redom';
import { createHeading, createParagraph } from '../elements';
import { CaretPosition } from '../utils/caret.utils';
import { range } from 'lodash-es';

const HANDLED_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

/**
 * @param $event
 * @param caretPosition
 * @return true if have been handled
 */
export const handleHeading = (
  $event: KeyboardEvent,
  caretPosition: CaretPosition
): boolean => {
  const canTagBeHandled = HANDLED_TAGS.includes(
    caretPosition.currentNode.tagName.toLowerCase()
  );
  if (!canTagBeHandled) {
    return false;
  }

  const match = caretPosition.currentNode.innerHTML.match(/^#{1,6} /g);
  const isHeadingElement = caretPosition.currentNode.tagName
    .toLowerCase()
    .startsWith('h');
  const nothingToConvert = !match && !isHeadingElement;
  if (nothingToConvert) {
    return false;
  }

  const replaceWithParagraph = !match && isHeadingElement;
  if (replaceWithParagraph) {
    mount(
      $event.currentTarget as HTMLElement,
      createParagraph(caretPosition.currentNode.innerHTML),
      caretPosition.currentNode,
      true
    );
    return true;
  }

  const newSize = (match as RegExpMatchArray)[0].length - 1;
  const nothingChanged = newSize === +caretPosition.currentNode.tagName[1];
  if (nothingChanged) {
    return false;
  }

  mount(
    $event.currentTarget as HTMLElement,
    createHeading(newSize, caretPosition.currentNode.innerHTML),
    caretPosition.currentNode,
    true
  );

  return true;
};

export const handleHeadingShortcuts = (
  $event: KeyboardEvent,
  caretPosition: CaretPosition
): boolean => {
  if (!$event.altKey || !$event.ctrlKey || !range(0, 7).includes(+$event.key)) {
    return false;
  }

  const newSize = +$event.key;
  const nothingChanged = newSize === +caretPosition.currentNode.tagName[1];
  if (nothingChanged) {
    return false;
  }

  const elementContentWithoutHashes =
    caretPosition.currentNode.innerHTML.replace(/^#{1,6} /g, '');
  const isHeadingElement = caretPosition.currentNode.tagName
    .toLowerCase()
    .startsWith('h');
  const replaceWithParagraph = newSize === 0 && isHeadingElement;
  if (replaceWithParagraph) {
    mount(
      $event.currentTarget as HTMLElement,
      createParagraph(elementContentWithoutHashes),
      caretPosition.currentNode,
      true
    );
    return true;
  }

  const innerHtml =
    Array(newSize).fill('#').join('') + ' ' + elementContentWithoutHashes;
  mount(
    $event.currentTarget as HTMLElement,
    createHeading(newSize, innerHtml),
    caretPosition.currentNode,
    true
  );

  return true;
};
