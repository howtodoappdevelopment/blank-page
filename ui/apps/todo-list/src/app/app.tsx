// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { MainHeader } from './layouts/main-header/main-header';
import { Button } from './layouts/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { PageHeader } from './layouts/page-header/page-header';
import { Task } from './layouts/task/task';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

export function App() {
  return (
    <div>
      <MainHeader
        extras={
          <div className="inline-block">
            <Button>
              <FontAwesomeIcon icon={faPlus} />
              &nbsp; Add
            </Button>
          </div>
        }
      />
      <div className="mx-8 my-6">
        <PageHeader
          title="Inbox"
          subTitle="All things that came up to your head!"
          backUrl="/test/1"
          description="... and all other things that you just make up"
          extras={
            <>
              <Button>Test</Button>
              <Button>Test 2</Button>
            </>
          }
        />
        <Task
          task={{
            id: 'task-2',
            title: 'issue #1',
            description:
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            subTasks: [
              {
                id: 'task-1',
                title: 'sub-issue #2',
                description: 'Other issue',
                nestingLvl: 1,
                isLeaf: true,
              },
            ],
            dates: [Date.now()],
            nestingLvl: 0,
            isLeaf: false,
          }}
        >
          <Button
            size="small"
            type="secondary"
            onClick={(e) =>
              console.log(e.currentTarget.parentElement?.parentElement?.id)
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
      </div>
    </div>
  );
}

export default App;
