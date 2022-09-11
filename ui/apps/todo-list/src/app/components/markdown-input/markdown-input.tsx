import React, { FunctionComponent } from 'react';
import { MarkdownInputProps } from './markdown-input.props';

import './wrapper.hoc.css';
import { parseBlocksToHtml } from './utils/full-markdown-parser.utils';
import { BLOCK_PARSERS } from './config';
import { MarkdownElementConfig } from './type';
import { WrapperHoc } from './wrapper.hoc';

export const MarkdownInput: FunctionComponent<MarkdownInputProps> = ({
  markdown = '',
}) => {
  return (
    <div className="border-2 border-gray-100 w-full rounded-md focus:!border-gray-300 whitespace-pre h-96 overflow-auto p-4">
      <WrapperHoc>
        {parseBlocksToHtml(markdown, BLOCK_PARSERS as MarkdownElementConfig[])}
      </WrapperHoc>
    </div>
  );
};
