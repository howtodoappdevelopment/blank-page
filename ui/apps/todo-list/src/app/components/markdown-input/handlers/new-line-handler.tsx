import { KeyboardEvent } from 'react';
import {
  CaretPosition,
  setCaretPosition,
} from '../../realtime-markdown/utils/caret.utils';
import { MarkdownElementConfig } from '../type';
import { EXTEND_ON_NEW_LINE, TEXT_PARSERS } from '../config';
import { hydrate } from 'react-dom';
import { RegularText } from '../block-elements/regular-text/regular-text';

export const isNewLine = ($event: KeyboardEvent<HTMLElement>) =>
  $event.code === 'Enter';
export const handleNewLine = (
  $event: KeyboardEvent<HTMLElement>,
  caretPosition: CaretPosition,
  elementConfig: MarkdownElementConfig
): void => {
  // $event.preventDefault();
  // $event.stopPropagation();
  //
  // caretPosition.currentNode = caretPosition.currentNode as HTMLElement;
  //
  // if (EXTEND_ON_NEW_LINE.includes(elementConfig.id)) {
  //   //
  //   return;
  // }
  //
  // const placeholder = document.createElement('div');
  // placeholder.id = 'placeholder';
  // const nextHtmlElement = caretPosition.currentNode.nextSibling;
  // if (nextHtmlElement) {
  //   $event.currentTarget.insertBefore(placeholder, nextHtmlElement);
  // } else {
  //   $event.currentTarget.append(placeholder);
  // }
  //
  // hydrate(
  //   <RegularText textParsers={TEXT_PARSERS}>&nbsp;</RegularText>,
  //   document.getElementById('placeholder') as Element
  // );
  // setCaretPosition(
  //   $event.currentTarget,
  //   caretPosition.position.absolute[0] + 1
  // );
};
