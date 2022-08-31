import React, { FunctionComponent, useState } from 'react';
import { Button } from '../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck';

export const SubTasksBtn: FunctionComponent<{
  size: number;
  finished: number;
  onClick: (isActive: boolean) => unknown;
}> = ({
  size,
  finished,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
}) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
    onClick(!active);
  };

  return (
    <Button
      type={active ? 'active' : 'tertiary'}
      size="small"
      onClick={toggleActive}
    >
      <FontAwesomeIcon icon={faListCheck} />
      &nbsp; sub-tasks &nbsp;
      <small>
        {finished} / {size}
      </small>
    </Button>
  );
};
