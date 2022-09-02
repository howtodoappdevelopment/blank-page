import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { InboxPage } from './pages/inbox.page';
import { TodoPage } from './pages/todo.page';
import { TrashPage } from './pages/trash.page';

export const AppRoutes: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<InboxPage />} />
      <Route path="todo" element={<TodoPage />} />
      <Route path="trash" element={<TrashPage />} />
      <Route path="*" element={<span>404 error nothing found</span>} />
    </Routes>
  );
};
