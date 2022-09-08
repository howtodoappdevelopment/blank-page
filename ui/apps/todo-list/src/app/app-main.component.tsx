import { FunctionComponent, PropsWithChildren, useState } from 'react';
import { MainHeader } from './layouts/main-header/main-header';
import { Button } from './layouts/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { Modal } from './layouts/modal/modal';
import { MarkdownInput } from './components/markdown-input/markdown-input';

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
          onModalCancel={() => setOpenAddModal(false)}
          onModalSubmit={() => setOpenAddModal(false)}
        >
          <MarkdownInput />
        </Modal>
      )}
    </>
  );
};
