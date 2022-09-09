import { ReactNode } from 'react';
import { MarkdownElementConfig } from '../type';
import {
  _calcNotCoveredTextRanges,
  _countTabs,
  _parseElements,
  _parseTextToHtml,
  _toSortedValues,
} from './parse.utils';
import { config, TEXT_PARSERS } from '../config';

export const parseBlocksToHtml = (
  fullMarkdown: string,
  blockParsers: MarkdownElementConfig[]
) => {
  const ranges: [number, number][] = [];
  const parsedDoc: { [startIndex: string]: ReactNode } = {};

  for (const {
    range,
    config: { parser, removeSign },
    match,
  } of _parseElements(fullMarkdown, blockParsers)) {
    ranges.push(range);
    parsedDoc[range[0]] = parser(
      _parseTextToHtml(
        removeSign(match),
        TEXT_PARSERS as MarkdownElementConfig[]
      ),
      _countTabs(match) * config.tabIndentPx
    );
  }

  for (const [rangeStart, rangeEnd] of _calcNotCoveredTextRanges(
    ranges,
    fullMarkdown.length
  )) {
    parsedDoc[rangeStart] = <p>{fullMarkdown.slice(rangeStart, rangeEnd)}</p>;
  }

  return [..._toSortedValues(parsedDoc)];
};
