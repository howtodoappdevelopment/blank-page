import { ReactNode } from 'react';
import { ParserType } from './type';
import { toNumber } from 'lodash-es';

export const parseToHtml = (
  fullMarkdown: string,
  blockParsers: ParserType[]
) => {
  const ranges: [number, number][] = [];
  const parsedDoc: { [startIndex: string]: ReactNode } = {};

  for (const { range, element } of _parseElements(fullMarkdown, blockParsers)) {
    ranges.push(range);
    parsedDoc[range[0]] = element;
  }

  for (const [rangeStart, rangeEnd] of _calcNotCoveredTextRanges(
    ranges,
    fullMarkdown.length
  )) {
    parsedDoc[rangeStart] = <p>{fullMarkdown.slice(rangeStart, rangeEnd)}</p>;
  }

  return [..._toSortedValues(parsedDoc)];
};

export function* _toSortedValues(obj: { [startIndex: string]: ReactNode }) {
  const sortedKeys = Object.keys(obj)
    .map(toNumber)
    .sort((a, b) => a - b);
  for (const key of sortedKeys) {
    yield obj[key];
  }
}

export function* _parseElements(
  markdown: string,
  blockParsers: ParserType[]
): Generator<{ range: [number, number]; element: ReactNode }> {
  for (const { regex, parse } of blockParsers) {
    for (const match of markdown.matchAll(regex)) {
      const txt = match[0];
      const lastIndex = (match.index || 0) + txt.length;
      yield {
        range: [match.index as number, lastIndex],
        element: parse(txt),
      };
    }
  }
}

export function* _calcNotCoveredTextRanges(
  ranges: [number, number][],
  maxLength: number
): Generator<[number, number]> {
  if (ranges.length === 0 || maxLength === 0) {
    return yield [0, 0];
  }

  ranges = ranges.sort((a, b) => a[0] - b[0]);
  let prevRange = ranges.shift() as [number, number];
  if (prevRange[0] > 0) {
    yield [0, prevRange[0]];
  }

  for (const currentRange of ranges) {
    if (currentRange[0] - (prevRange[1] + 1) > 0) {
      yield [prevRange[1] + 1, currentRange[0]] as [number, number];
    }

    prevRange = currentRange;
  }

  if (maxLength - prevRange[1]) {
    yield [prevRange[1] + 1, maxLength];
  }
}
