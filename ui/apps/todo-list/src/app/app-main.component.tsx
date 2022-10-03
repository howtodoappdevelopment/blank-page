import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MainHeader } from './layouts/main-header/main-header';
import { Button } from './layouts/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { Modal } from './layouts/modal/modal';
import { createMarkdownInput } from '@blank-page/realtime-markdown';

export const AppMainComponent: FunctionComponent<
  PropsWithChildren<{
    sideNavOpen: boolean;
    onSideNavToggle: (isOpen: boolean) => unknown;
  }>
> = ({
  children,
  sideNavOpen = false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSideNavToggle = () => {},
}) => {
  const [openAddModal, setOpenAddModal] = useState(true);

  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ref && ref.current) {
      const fullMarkdown = `
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
<span style="border: 1px solid red">my custom span</span>`;

      Array.from(
        ref.current?.getElementsByClassName('content') || []
      )[0]?.replaceChildren(createMarkdownInput(fullMarkdown));
    }
  }, []);

  return (
    <>
      <div className="flex flex-col basis-3/4 grow">
        <MainHeader
          open={sideNavOpen}
          onSideNavToggle={onSideNavToggle}
          extras={
            <div className="inline-block">
              <Button onClick={() => setOpenAddModal(true)}>
                <FontAwesomeIcon icon={faPlus} />
                &nbsp; Add
              </Button>
            </div>
          }
        />
        <div className="mx-8 my-6">{children}</div>
      </div>
      {openAddModal && (
        <Modal
          ref={ref}
          onModalCancel={() => setOpenAddModal(false)}
          onModalSubmit={() => setOpenAddModal(false)}
        >
          {/*<MarkdownInput markdown={fullMarkdown} />*/}
        </Modal>
      )}
    </>
  );
};
