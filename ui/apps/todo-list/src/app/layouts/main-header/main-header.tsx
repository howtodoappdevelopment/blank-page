import React, { FunctionComponent, PropsWithChildren, useState } from 'react';
import { MainHeaderProps } from './main-header.props';
import { Button } from '../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

export const MainHeader: FunctionComponent<
  PropsWithChildren<MainHeaderProps>
  // eslint-disable-next-line react/jsx-no-useless-fragment,@typescript-eslint/no-empty-function
> = ({ extras = <></>, onSideNavToggle = () => {} }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between align-middle border-b-2 border-gray-100 px-8 py-6">
      <Button
        className="!px-2.5"
        type="tertiary"
        onClick={() => {
          onSideNavToggle(!open);
          setOpen(!open);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <div>{extras}</div>
    </div>
  );
};
