export type CaretContext = {
  currentHtmlElement: HTMLElement;
  position: {
    relative: number;
    absolute: number;
  };
};

export const getCaretContext = (element: Element): CaretContext | null => {
  const selection = window.getSelection() as Selection;
  if (!selection) {
    return null;
  }

  const range =
    selection.rangeCount > 0 ? selection.getRangeAt(0).cloneRange() : undefined;
  if (!range) {
    return null;
  }

  range.selectNodeContents(element);
  range.setEnd(range.endContainer, range.endOffset);
  const absolutePosition = range.toString().length;
  range.detach();

  let currentNode = selection.anchorNode as HTMLElement;
  if (currentNode.nodeType === 3) {
    currentNode = selection.anchorNode?.parentNode as HTMLElement;
  }

  return {
    currentHtmlElement: currentNode,
    position: {
      relative: selection.anchorOffset,
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
