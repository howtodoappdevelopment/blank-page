import React, { FunctionComponent, useRef } from 'react';
import { MarkdownInputProps } from './markdown-input.props';

import './mardown-input.css';
import { parseBlocksToHtml } from './utils/full-markdown-parser.utils';
import { BLOCK_PARSERS } from './config';
import { MarkdownElementConfig } from './type';

export const MarkdownInput: FunctionComponent<MarkdownInputProps> = ({
  markdown = '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChanges = () => {},
}) => {
  const content = useRef<HTMLDivElement | null>(null);

  return (
    <div className="border-2 border-gray-100 w-full rounded-md focus:!border-gray-300 whitespace-pre h-96 overflow-auto p-4">
      <div
        id="markdown-input"
        ref={content}
        contentEditable
        suppressContentEditableWarning={true}
        onKeyUp={() => {
          // console.log('key up', getCursorPosition(content.current));
        }}
        onKeyDown={() => {
          // console.log('key down', getCursorPosition(content.current));
          // event.preventDefault();
          // event.stopPropagation();
        }}
        onMouseDown={() => {
          // console.log('mouse down', getCursorPosition(content.current));
        }}
        onMouseUp={() => {
          // console.log('mouse up', getCursorPosition(content.current));
        }}
      >
        {parseBlocksToHtml(
          `

random text

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

random text
 \`random text\`
  - random text
  ### random text

- [ ] non filled
 - [ ] non filled (0 lvl)
   - [x] child
     - [ ] child ||
     - [ ] child II.5
       - [x] child |||
         - [ ] child IV
          - [ ] child V
- [x] filled
 - [ ] filled child

> my **block quote**
    > test

> separate

\`\`\`
\`\`\`

\`\`\`


\`\`\`

\`\`\`
code block
\`\`\`

- unordered 1
 - un 2
  - un 2.1
   - un 3
* unor *dered 2*
+ unordered

1. ordered
  - nested
2. ordered
  > nested

# Heading 1 x 2

http://url.com
[url](http://url.com)
[url-id][]
[example][url-id-2]
[url-id]: http://test.com
[url-id]: http://test2.com

![Alt](https://picsum.photos/200/300)
![Alt](https://picsum.photos/200/300 "Title")

  ~~strike trough~~
 ==highlight==
<span style="border: 1px solid red">my custom span</span>
          `,
          BLOCK_PARSERS as MarkdownElementConfig[]
        )}
      </div>
    </div>
  );
};
