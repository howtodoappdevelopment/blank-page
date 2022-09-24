import { createParagraph } from '../paragraph.element';
import { mount, setStyle } from 'redom';
import { createCheckbox } from './checkbox.element';
import { ParserType } from '../../utils/parser.type';
import { config } from '../../config';

export const CHECKBOX_REGEX = /^ *- \[([x ])] .*(\n|$)/gm;
export const PARSE_CHECKBOX = (innerHtml: string) => {
  const indent = Math.floor(
    (innerHtml.match(/^ */g) as RegExpMatchArray)[0].length / 2
  );
  const paragraph = createParagraph(innerHtml.replace(/^ *- \[([x ])]/g, ''));
  setStyle(paragraph, {
    'padding-left': `${indent * config.indentPx}px`,
  });

  const isChecked = !!innerHtml.match(/^ *- \[x]/g);
  const input = createCheckbox(isChecked);

  mount(paragraph, input, paragraph.firstChild as ChildNode);
  return paragraph;
};
export const CHECKBOX_PARSER: ParserType = {
  regex: CHECKBOX_REGEX,
  parser: PARSE_CHECKBOX,
};
