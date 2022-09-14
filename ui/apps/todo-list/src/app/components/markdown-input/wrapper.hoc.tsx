import { FunctionComponent, PropsWithChildren, useRef } from 'react';
import { find, uniqueId } from 'lodash-es';

import '../realtime-markdown/realtime-markdown.css';
import { getCaretPosition } from '../realtime-markdown/utils/caret.utils';
import { ALL_PARSERS } from './config';
import { MarkdownElementConfig } from './type';
import { handleBoldText, isBoldTextEvent } from './handlers/bold-text.handler';
import {
  handleItalicText,
  isItalicTextEvent,
} from './handlers/italic-text.handler';
import { handleNewLine, isNewLine } from './handlers/new-line-handler';

export const WrapperHoc: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const content = useRef<HTMLDivElement | null>(null);
  return (
    <div
      id={uniqueId('markdown-input')}
      className="markdown-input inline-block"
      ref={content}
      contentEditable
      suppressContentEditableWarning={true}
      onKeyUp={($event) => {
        //
      }}
      onKeyDown={($event) => {
        const caretPosition = getCaretPosition($event.currentTarget);
        console.log('KEY DOWN', caretPosition?.position?.absolute);

        const currentNode = caretPosition?.currentNode;
        if (!currentNode) {
          $event.preventDefault();
          $event.stopPropagation();
          return;
        }

        const configId = currentNode.id.replace(/-\d+$/g, '');
        const elementConfig = find(ALL_PARSERS, {
          id: configId,
        }) as MarkdownElementConfig;
        if (!elementConfig) {
          return;
        }

        if (isBoldTextEvent($event)) {
          handleBoldText($event, caretPosition, elementConfig);
        } else if (isItalicTextEvent($event)) {
          handleItalicText($event, caretPosition, elementConfig);
        } else if (isNewLine($event)) {
          handleNewLine($event, caretPosition, elementConfig);
        }

        // handle enter
        // handle shift + enter
        // handle esc
        // unselect text
        // handle ctrl + 1, ... (headers)
        // handle backspace on position relative 0
        // move all node elements into prev sibling or new paragraph
      }}
      onMouseDown={($event) => {
        // console.log('mouse down', getCursorPosition(content.current));
      }}
      onMouseUp={($event) => {
        console.log(
          'MOUSE UP',
          getCaretPosition($event.currentTarget)?.position?.absolute
        );
        // console.log(getCaretPosition($event.currentTarget as HTMLElement));
      }}
    >
      {children}
    </div>
  );
};
