import { Heading } from './heading';
import { MarkdownElementConfig } from '../../type';
import { BOLD_ID } from '../../text-elements/bold/bold.parser';
import { ITALIC_ID } from '../../text-elements/italic/italic.parser';
import { CODE_SNIPPET_ID } from '../../text-elements/code-snippet/code-snippet.parser';

export const HEADING_1_ID = 'h1';
export const HEADING_1_PARSER: MarkdownElementConfig = {
  id: HEADING_1_ID,
  regex: /^# .*$/gm,
  parser: (children) => <Heading size={1}>{children}</Heading>,
  removeSign: (txt: string) => txt.replace(/^#{1,6} /g, ''),
  disallowedTextElementsIds: [BOLD_ID, ITALIC_ID, CODE_SNIPPET_ID],
};
export const HEADING_2_ID = 'h2';
export const HEADING_2_PARSER: MarkdownElementConfig = {
  id: HEADING_2_ID,
  regex: /^#{2} .*$/gm,
  parser: (children) => <Heading size={2}>{children}</Heading>,
  removeSign: (txt: string) => txt.replace(/^#{1,6} /g, ''),
  disallowedTextElementsIds: [BOLD_ID, ITALIC_ID, CODE_SNIPPET_ID],
};
export const HEADING_3_ID = 'h3';
export const HEADING_3_PARSER: MarkdownElementConfig = {
  id: HEADING_3_ID,
  regex: /^#{3} .*$/gm,
  parser: (children) => <Heading size={3}>{children}</Heading>,
  removeSign: (txt: string) => txt.replace(/^#{1,6} /g, ''),
  disallowedTextElementsIds: [BOLD_ID, ITALIC_ID, CODE_SNIPPET_ID],
};
export const HEADING_4_ID = 'h4';
export const HEADING_4_PARSER: MarkdownElementConfig = {
  id: HEADING_4_ID,
  regex: /^#{4} .*$/gm,
  parser: (children) => <Heading size={4}>{children}</Heading>,
  removeSign: (txt: string) => txt.replace(/^#{1,6} /g, ''),
  disallowedTextElementsIds: [BOLD_ID, ITALIC_ID, CODE_SNIPPET_ID],
};
export const HEADING_5_ID = 'h5';
export const HEADING_5_PARSER: MarkdownElementConfig = {
  id: HEADING_5_ID,
  regex: /^#{5} .*$/gm,
  parser: (children) => <Heading size={5}>{children}</Heading>,
  removeSign: (txt: string) => txt.replace(/^#{1,6} /g, ''),
  disallowedTextElementsIds: [BOLD_ID, ITALIC_ID, CODE_SNIPPET_ID],
};
export const HEADING_6_ID = 'h6';
export const HEADING_6_PARSER: MarkdownElementConfig = {
  id: HEADING_6_ID,
  regex: /^#{6} .*$/gm,
  parser: (children) => <Heading size={6}>{children}</Heading>,
  removeSign: (txt: string) => txt.replace(/^#{1,6} /g, ''),
  disallowedTextElementsIds: [BOLD_ID, ITALIC_ID, CODE_SNIPPET_ID],
};
