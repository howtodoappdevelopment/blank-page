import { FunctionComponent, PropsWithChildren, useRef } from 'react';
import { uniqueId } from 'lodash-es';

import './wrapper.hoc.css';
import { getCaretPosition } from './utils/caret.utils';

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
        if ($event.target instanceof HTMLElement)
          console.log(getCaretPosition($event.currentTarget));
        // console.log('key up', getCursorPosition(content.current));
      }}
      onKeyDown={($event) => {
        console.log($event.key);
        // console.log('key down', getCursorPosition(content.current));
        // event.preventDefault();
        // event.stopPropagation();
      }}
      onMouseDown={($event) => {
        // console.log(position($event.currentTarget).pos);
        // console.log('mouse down', getCursorPosition(content.current));
      }}
      onMouseUp={($event) => {
        // $event.stopPropagation();
        // const target = $event.target as HTMLElement;
        // console.log(().innerText);
        // console.log(document.getElementById(($event.target as HTMLElement).id));
        // if ($event.target instanceof HTMLElement)
        console.log(getCaretPosition($event.currentTarget as HTMLElement));
        console.log(($event.target as HTMLElement).attributes);
        // console.log($event.target);
        // console.log('mouse up', getCursorPosition(content.current));
      }}
    >
      {children}
    </div>
  );
};
