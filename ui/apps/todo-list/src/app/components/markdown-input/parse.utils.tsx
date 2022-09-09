import { ParserType } from './type';
import { ReactNode } from 'react';
import { HEADING_PARSER } from './elements/heading/heading.parser';
import {
  CHECKBOX_CHECKED_PARSER,
  CHECKBOX_PARSER,
} from './elements/checkbox/checkbox.parser';

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

export const parseToHtml = (fullMarkdown: string) => {
  const ranges: [number, number][] = [];
  const parsedDoc: { [startIndex: string]: ReactNode } = {};

  // parse
  for (const { regex, parse } of _blockParsers) {
    for (const match of fullMarkdown.matchAll(regex)) {
      const txt = match[0];

      const lastIndex = (match.index || 0) + txt.length;
      ranges.push([match.index as number, lastIndex]);

      parsedDoc[match.index as number] = parse(txt);
    }
  }

  // fill gaps
  const missingLinesRanges = _calcGapsRanges(ranges, fullMarkdown.length);
  for (const [rangeStart, rangeEnd] of missingLinesRanges) {
    parsedDoc[rangeStart] = <p>{fullMarkdown.slice(rangeStart, rangeEnd)}</p>;
  }

  return Object.keys(parsedDoc)
    .map((key) => +key)
    .sort((a, b) => a - b)
    .map((key) => parsedDoc[key]);
};

export const _calcGapsRanges = (
  ranges: [number, number][],
  maxLength: number
): [number, number][] => {
  if (ranges.length === 0 || maxLength === 0) {
    return [];
  }

  ranges = ranges.sort((a, b) => a[0] - b[0]);
  let prevRange = ranges.shift() as [number, number];
  let missingLinesRanges: [number, number][] =
    prevRange[0] > 0 ? [[0, prevRange[0]]] : [];

  for (const currentRange of ranges) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,prefer-const
    let [rangeStart, _] = currentRange;
    const prevRangeEnd = prevRange[1] + 1;
    prevRange = currentRange;

    if (rangeStart - prevRangeEnd > 0) {
      const newRange = [prevRangeEnd, rangeStart] as [number, number];
      missingLinesRanges = [...missingLinesRanges, newRange];
    }
  }
  const lastRangeEnd = prevRange[1];
  if (maxLength - lastRangeEnd) {
    missingLinesRanges.push([lastRangeEnd + 1, maxLength]);
  }

  return missingLinesRanges;
};

export const _blockParsers: ParserType[] = [
  HEADING_PARSER,
  CHECKBOX_PARSER,
  CHECKBOX_CHECKED_PARSER,
  // QUOTE_PARSER,
  // CODE_BLOCK_PARSER,
];
