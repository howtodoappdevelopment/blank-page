import { BlockParserType, BlockConfig, TxtParserType } from '../types';
import { fork } from 'forkable-iterator';
import { calcIndent } from '../utils/elements.utils';
import expand from 'emmet';

export const PRECODE_ID = 'precode';
export const precodeConfig: BlockConfig = {
  id: PRECODE_ID,
  toEmmet: ({ indent = 0, innerHtml = '<br />' }) =>
    `pre.et-${PRECODE_ID}.ml-${indent}>code.content{${innerHtml}}`,
  newLineToEmmet: () => '{&nbsp;}',
  extendOnNewLine: true,
};

export const precodeParser: BlockParserType = {
  id: PRECODE_ID,
  toHtml: (line, txtParsers, linesIterator) => {
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
  },
};

const _getParsedPrecodeElement = (
  innerHtml: string,
  indent: number,
  txtParsers: TxtParserType[]
) => {
  for (const { toHtml } of txtParsers) {
    innerHtml = toHtml(innerHtml);
  }

  return expand(
    precodeConfig.toEmmet({
      indent,
      innerHtml,
    })
  );
};
