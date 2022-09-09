import { Heading } from './heading';
import { MarkdownElementConfig } from '../../type';

export const HEADING_1_PARSER: MarkdownElementConfig = {
  regex: /^# .*$/gm,
  parser: (children) => <Heading size={1}>{children}</Heading>,
  removeSign: (txt: string) => txt.replace(/^#{1,6} /g, ''),
};
export const HEADING_2_PARSER: MarkdownElementConfig = {
  regex: /^#{2} .*$/gm,
  parser: (children) => <Heading size={2}>{children}</Heading>,
  removeSign: (txt: string) => txt.replace(/^#{1,6} /g, ''),
};
export const HEADING_3_PARSER: MarkdownElementConfig = {
  regex: /^#{3} .*$/gm,
  parser: (children) => <Heading size={3}>{children}</Heading>,
  removeSign: (txt: string) => txt.replace(/^#{1,6} /g, ''),
};
export const HEADING_4_PARSER: MarkdownElementConfig = {
  regex: /^#{4} .*$/gm,
  parser: (children) => <Heading size={4}>{children}</Heading>,
  removeSign: (txt: string) => txt.replace(/^#{1,6} /g, ''),
};
export const HEADING_5_PARSER: MarkdownElementConfig = {
  regex: /^#{5} .*$/gm,
  parser: (children) => <Heading size={5}>{children}</Heading>,
  removeSign: (txt: string) => txt.replace(/^#{1,6} /g, ''),
};
export const HEADING_6_PARSER: MarkdownElementConfig = {
  regex: /^#{6} .*$/gm,
  parser: (children) => <Heading size={6}>{children}</Heading>,
  removeSign: (txt: string) => txt.replace(/^#{1,6} /g, ''),
};
