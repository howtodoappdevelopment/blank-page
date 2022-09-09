export const getCursorPosition = (
  editableElement:
    | HTMLDivElement
    | HTMLParagraphElement
    | HTMLSpanElement
    | null
): number | null => {
  const selection = window.getSelection() as Selection;
  if (!editableElement || !selection) {
    return null;
  }

  // const range = selection.getRangeAt(0);
  // const preCaretRange = range.cloneRange();
  // preCaretRange.selectNodeContents(editableElement);
  // preCaretRange.setEnd(range.endContainer, range.endOffset);
  // return preCaretRange.toString().length;
  return null;
};
