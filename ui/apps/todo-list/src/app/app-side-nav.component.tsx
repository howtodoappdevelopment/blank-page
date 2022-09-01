import { Button } from './layouts/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons/faInbox';
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { SideNav } from './layouts/side-nav/side-nav';

export const AppSideNavComponent = () => {
  return (
    <SideNav extras={<span className="text-gray-300">v.1.2.3.4</span>}>
      <Button type="side-nav">
        <FontAwesomeIcon size="lg" icon={faInbox} />
        &nbsp; &nbsp; <h6 className="inline-block">Inbox</h6>
      </Button>
      <Button type="side-nav">
        <FontAwesomeIcon size="lg" icon={faListCheck} />
        &nbsp; &nbsp; <h6 className="inline-block">To do</h6>
      </Button>
      <Button type="side-nav">
        <FontAwesomeIcon size="lg" icon={faTrash} />
        &nbsp; &nbsp; <h6 className="inline-block">Trash</h6>
      </Button>
    </SideNav>
  );
};
