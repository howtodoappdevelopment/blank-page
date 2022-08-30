// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { MainHeader } from './components/main-header/main-header';
import { Button } from './components/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { PageHeader } from './components/page-header/page-header';

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
    </div>
  );
}

export default App;
