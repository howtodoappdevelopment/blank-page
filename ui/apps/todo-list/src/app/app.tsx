// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { RecoilRoot } from 'recoil';
import { InboxPage } from './pages/inbox.page';
import { AppSideNavComponent } from './app-side-nav.component';
import { AppMainComponent } from './app-main.component';
import { useState } from 'react';

export function App() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <RecoilRoot>
      <div className="flex flex-row">
        {sideNavOpen && <AppSideNavComponent />}
        <AppMainComponent
          sideNavOpen={sideNavOpen}
          onSideNavToggle={(isOpen) => setSideNavOpen(isOpen)}
        >
          <InboxPage />
        </AppMainComponent>
      </div>
    </RecoilRoot>
  );
}

export default App;
