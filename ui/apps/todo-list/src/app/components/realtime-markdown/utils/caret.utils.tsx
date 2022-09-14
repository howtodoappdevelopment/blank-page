export type CaretPosition = {
  currentNode: HTMLElement;
  position: {
    relative: [number, number];
    absolute: number;
  };
};

export const getCaretPosition = (element: Element): CaretPosition | null => {
  const selection = window.getSelection() as Selection;
  if (!selection) {
    return null;
  }

  const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : undefined;
  if (!range) {
    return null;
  }

  const clonedRange = range.cloneRange();
  clonedRange.selectNodeContents(element);
  clonedRange.setEnd(range.endContainer, range.endOffset);
  const absolutePosition = clonedRange.toString().length;
  clonedRange.detach();

  let currentNode = selection.anchorNode as HTMLElement;
  if (
    currentNode.nodeType === 3 ||
    currentNode.tagName.toLowerCase() === 'span'
  ) {
    currentNode = selection.anchorNode?.parentNode as HTMLElement;
  }

  return {
    currentNode,
    position: {
      relative: [
        selection.anchorOffset,
        selection.anchorOffset + selection.focusOffset,
      ],
      absolute: absolutePosition,
    },
  };
};

export const setCaretPosition = (element: Element, position: number): void => {
  const selection = window.getSelection() as Selection;
  if (!selection) {
    return;
  }

  _moveCaretTo(selection, element, position);
};

/* INTERNAL */
const _moveCaretTo = (
  selection: Selection,
  parent: Node,
  destinationPosition: number,
  offset = { position: 0 }
): boolean => {
  let found = false;
  for (const node of Array.from(parent.childNodes)) {
    const isTextNode = node.nodeType === 3;
    if (!isTextNode) {
      if (_moveCaretTo(selection, node, destinationPosition, offset)) {
        break;
      }
      continue;
    }

    const currentPosition = offset.position + (node as Text).length;
    if (currentPosition < destinationPosition) {
      offset.position = currentPosition;
      continue;
    }

    found = true;
    const range = window.document.createRange();
    range.setStart(node, destinationPosition - offset.position);
    selection.removeAllRanges();
    selection.addRange(range);
    break;
  }

  return found;
};
