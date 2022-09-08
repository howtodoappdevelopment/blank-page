import { Quote } from './quote';
import { ParserType } from '../../type';

export const QUOTE_PARSER: ParserType = {
  regex: /^((( )?)+> .*(\n|$))+/gm,
  parse: (txt: string) => <Quote>{txt}</Quote>,
};
