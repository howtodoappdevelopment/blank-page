import { ParserType } from '../types';
import expand from 'emmet';

export const EmptyLineParser: ParserType = {
  id: 'empty-line',
  regex: /(^([ \t])*(\n|\r\n|\r)?$)/gm,
  toHtml: () => expand('p{&nbsp;}'),
};
