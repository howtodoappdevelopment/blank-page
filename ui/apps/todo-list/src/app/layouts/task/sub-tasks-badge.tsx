import React, { FunctionComponent } from 'react';
import { Button } from '../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck';

export const SubTasksBadge: FunctionComponent<{
  size: number;
  finished: number;
}> = ({ size, finished }) => {
  return (
    <Button type="tertiary" size="small" className="!cursor-auto">
      <FontAwesomeIcon icon={faListCheck} />
      &nbsp; sub-tasks &nbsp;
      <small>
        {finished} / {size}
      </small>
    </Button>
  );
};
