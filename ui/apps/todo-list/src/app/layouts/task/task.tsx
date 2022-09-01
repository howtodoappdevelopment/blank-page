import React, { FunctionComponent, PropsWithChildren } from 'react';
import { TaskProps } from './task.props';
import { Button } from '../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { isOverdue } from './utils';
import { SubTasksBadge } from './sub-tasks-badge';
import { Text } from '../../components/text/text';

export const Task: FunctionComponent<PropsWithChildren<TaskProps>> = ({
  children,
  task,
}) => {
  const { id, title, description, subTasks, isLeaf, dates } = task;
  return (
    <div
      className="border-2 border-gray-100 flex flex-col items-start w-full rounded-md p-4 gap-3"
      data-component-name={this}
      id={id}
    >
      <h4>{title}</h4>
      <div className="flex flex-row items-start w-full gap-2">
        {isOverdue(dates) && (
          <Button size="small">
            <FontAwesomeIcon icon={faClock} />
            &nbsp; &nbsp;
            <small>Schedule</small>
          </Button>
        )}
        {!isLeaf && (
          <SubTasksBadge
            size={subTasks?.length || 0}
            finished={subTasks?.filter(({ done }) => !!done)?.length || 0}
          />
        )}
      </div>
      {description && <Text text={description} />}
      <div className="flex flex-row gap-2">{children}</div>
    </div>
  );
};
