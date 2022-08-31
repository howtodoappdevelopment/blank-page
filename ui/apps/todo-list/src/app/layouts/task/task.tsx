import React, { FunctionComponent, PropsWithChildren, useState } from 'react';
import { TaskProps } from './task.props';
import { Button } from '../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { isOverdue } from './utils';
import { Text } from '../../components/text/text';
import { SubTasksBtn } from './sub-tasks-btn';
import { uniqueId } from 'lodash-es';

export const Task: FunctionComponent<PropsWithChildren<TaskProps>> = ({
  children,
  task,
}) => {
  const { id, title, description, subTasks, isLeaf, dates } = task;
  const [tab, setTab] = useState<'description' | 'subTasks'>('description');
  return (
    <div
      className="border-2 border-gray-100 flex flex-col items-start w-full rounded-md p-4 gap-3"
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
          <SubTasksBtn
            size={subTasks?.length || 0}
            finished={subTasks?.filter(({ done }) => !!done)?.length || 0}
            onClick={(isActive) =>
              setTab(isActive ? 'subTasks' : 'description')
            }
          />
        )}
      </div>
      {tab === 'description' && description && <Text text={description} />}
      {tab === 'subTasks' &&
        subTasks &&
        subTasks.length > 0 &&
        subTasks.map((subTask) => (
          <Task key={uniqueId('sub-task')} task={subTask}>
            {children}
          </Task>
        ))}
      <div className="flex flex-row gap-2">{children}</div>
    </div>
  );
};
