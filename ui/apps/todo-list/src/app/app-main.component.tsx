import { FunctionComponent, PropsWithChildren } from 'react';
import { MainHeader } from './layouts/main-header/main-header';
import { Button } from './layouts/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

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
  return (
    <div className="flex flex-col basis-3/4 grow">
      <MainHeader
        open={sideNavOpen}
        onSideNavToggle={onSideNavToggle}
        extras={
          <div className="inline-block">
            <Button>
              <FontAwesomeIcon icon={faPlus} />
              &nbsp; Add
            </Button>
          </div>
        }
      />
      <div className="mx-8 my-6">{children}</div>
    </div>
  );
};
