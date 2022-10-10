import {
  ParseBlockMarkdownToHtml,
  ParserTxtMarkdownToHtml,
  toOuterHtmlFunction,
} from '../types';
import { fork } from 'forkable-iterator';
import { calcIndent } from '../utils/elements.utils';
import expand from 'emmet';

export const PRECODE_ID = 'precode';
export const toOuterHtml: toOuterHtmlFunction = ({
  indent = 0,
  innerHtml = '<br />',
}) => expand(`pre.et-${PRECODE_ID}.ml-${indent}>code.content{${innerHtml}}`);
export const precodeStaticParser: ParseBlockMarkdownToHtml = (
  line,
  txtParsers,
  linesIterator
) => {
  const isCodeBlockStart = line.match(/^ *```[a-zA-Z\d]*/g);
  if (!isCodeBlockStart) {
    return null;
  }

  const iteratorDuplicate = fork(linesIterator);
  let content = '';
  let parsedLines = 0;
  let isCodeBlockEnd = false;
  let currentLine = '';
  while (!isCodeBlockEnd) {
    content += currentLine.replace(/\n/g, '<br>');

    const { value, done } = iteratorDuplicate.next();
    currentLine = value as string;
    isCodeBlockEnd = !!currentLine?.trimLeft()?.startsWith('```') || !!done;
    parsedLines++;
  }

  const parsed = _getParsedPrecodeElement(
    (content === '' ? '&nbsp;' : content).replace(/<br>$/g, ''),
    calcIndent(line),
    txtParsers
  );

  // move main iterator to skip already parsed lines
  if (parsedLines > 0) {
    for (let i = 0; i < parsedLines; i++) {
      linesIterator.next();
    }
  }

  return parsed;
};
const _getParsedPrecodeElement = (
  innerHtml: string,
  indent: number,
  txtParsers: ParserTxtMarkdownToHtml[]
) => {
  for (const parseMarkdownToHtml of txtParsers) {
    innerHtml = parseMarkdownToHtml(innerHtml);
  }

  return toOuterHtml({ innerHtml, indent });
};
