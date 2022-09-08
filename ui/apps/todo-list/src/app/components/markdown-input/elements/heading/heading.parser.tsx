import { Heading } from './heading';
import { ParserType } from '../../type';

export const HEADING_PARSER: ParserType = {
  regex: /^#{1,6} .*$/gm,
  parse: (line: string) => (
    <Heading
      type={[...line.matchAll(/^#{1,6} /g)].length as 1 | 2 | 3 | 4 | 5 | 6}
    >
      {line}
    </Heading>
  ),
};
