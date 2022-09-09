import { ReactNode } from 'react';
import { toNumber } from 'lodash-es';
import { MarkdownElementConfig } from '../type';

export const _countTabs = (txt: string) =>
  Math.floor((txt.match(/^ */g) as RegExpMatchArray)[0].length / 2);

export const _parseTextToHtml = (
  txt: string,
  txtParsers: MarkdownElementConfig[]
) => {
  const ranges: [number, number][] = [];
  const parsedDoc: { [startIndex: string]: ReactNode } = {};

  for (const {
    range,
    config: { parser, removeSign },
    match,
  } of _parseElements(txt, txtParsers)) {
    ranges.push(range);
    parsedDoc[range[0]] = parser(removeSign(match));
  }

  for (const [rangeStart, rangeEnd] of _calcNotCoveredTextRanges(
    ranges,
    txt.length
  )) {
    parsedDoc[rangeStart] = txt.slice(rangeStart, rangeEnd);
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
  blockElementConfigs: MarkdownElementConfig[]
): Generator<{
  range: [number, number];
  config: MarkdownElementConfig;
  match: string;
}> {
  for (const config of blockElementConfigs) {
    const { regex } = config;
    for (const match of markdown.matchAll(regex)) {
      const txt = match[0];
      const lastIndex = (match.index || 0) + txt.length;
      yield {
        range: [match.index as number, lastIndex],
        config,
        match: txt,
      };
    }
  }
}

export function* _calcNotCoveredTextRanges(
  ranges: [number, number][],
  maxLength: number
): Generator<[number, number]> {
  if (ranges.length === 0 || maxLength === 0) {
    return yield [0, maxLength];
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
