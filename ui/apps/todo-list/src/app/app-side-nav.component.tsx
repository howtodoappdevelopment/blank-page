import { Button } from './layouts/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons/faInbox';
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { SideNav } from './layouts/side-nav/side-nav';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const AppSideNavComponent = () => {
  const [active, setActive] = useState('/');
  const toggleActive = (isActive: boolean, path: string) => {
    if (isActive) {
      setActive(path);
    }
    return '';
  };

  return (
    <SideNav extras={<span className="text-gray-300">v.1.2.3.4</span>}>
      <NavLink to="/" className={({ isActive }) => toggleActive(isActive, '/')}>
        <Button type={active === '/' ? 'active-nav' : 'side-nav'}>
          <FontAwesomeIcon size="lg" icon={faInbox} />
          &nbsp; &nbsp; <h6 className="inline-block">Inbox</h6>
        </Button>
      </NavLink>
      <NavLink
        to="/todo"
        className={({ isActive }) => toggleActive(isActive, '/todo')}
      >
        <Button type={active === '/todo' ? 'active-nav' : 'side-nav'}>
          <FontAwesomeIcon size="lg" icon={faListCheck} />
          &nbsp; &nbsp; <h6 className="inline-block">To do</h6>
        </Button>
      </NavLink>
      <NavLink
        to="/trash"
        className={({ isActive }) => toggleActive(isActive, '/trash')}
      >
        <Button type={active === '/trash' ? 'active-nav' : 'side-nav'}>
          <FontAwesomeIcon size="lg" icon={faTrash} />
          &nbsp; &nbsp; <h6 className="inline-block">Trash</h6>
        </Button>
      </NavLink>
    </SideNav>
  );
};
