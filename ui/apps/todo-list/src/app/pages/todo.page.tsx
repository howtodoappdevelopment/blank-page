import { FunctionComponent } from 'react';
import { PageHeader } from '../layouts/page-header/page-header';
import { Button } from '../layouts/button/button';
import { Task } from '../layouts/task/task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { fullTaskDataMock } from '../data-mocks/tasks';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';

export const TodoPage: FunctionComponent = () => {
  return (
    <>
      <PageHeader
        title="Todo"
        backUrl="/inbox"
        extras={
          <Button>
            <FontAwesomeIcon icon={faEye} />
            &nbsp; Focus mode
          </Button>
        }
      />
      <Task task={fullTaskDataMock}>
        <Button
          size="small"
          type="secondary"
          onClick={(e) =>
            console.log(e.currentTarget.parentElement?.parentElement)
          }
        >
          <FontAwesomeIcon icon={faPen} />
          &nbsp; Edit
        </Button>
        <Button size="small" type="secondary">
          <FontAwesomeIcon icon={faTrash} />
          &nbsp; Remove
        </Button>
      </Task>
    </>
  );
};
