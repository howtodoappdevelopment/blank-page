import { FunctionComponent } from 'react';
import { PageHeader } from '../layouts/page-header/page-header';
import { Button } from '../layouts/button/button';
import { Task } from '../layouts/task/task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { fullTaskDataMock } from '../data-mocks/tasks';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons/faArrowRotateLeft';

export const TrashPage: FunctionComponent = () => {
  return (
    <>
      <PageHeader
        title="Trash"
        description="Items in bin will be removed automatically after a week."
        backUrl="/"
        extras={
          <>
            <Button>
              <FontAwesomeIcon icon={faTrash} /> &nbsp; Remove all
            </Button>
            <Button type="secondary">
              <FontAwesomeIcon icon={faArrowRotateLeft} /> &nbsp; Restore all
            </Button>
          </>
        }
      />
      <Task task={fullTaskDataMock}>
        <Button size="small">
          <FontAwesomeIcon icon={faTrash} /> &nbsp; Remove
        </Button>
        <Button size="small" type="secondary">
          <FontAwesomeIcon icon={faArrowRotateLeft} /> &nbsp; Restore
        </Button>
      </Task>
    </>
  );
};
