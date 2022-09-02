import { RecoilRoot } from 'recoil';
import { AppSideNavComponent } from './app-side-nav.component';
import { AppMainComponent } from './app-main.component';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app-routes';

export function App() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="flex flex-row">
          {sideNavOpen && <AppSideNavComponent />}
          <AppMainComponent
            sideNavOpen={sideNavOpen}
            onSideNavToggle={(isOpen) => setSideNavOpen(isOpen)}
          >
            <AppRoutes />
          </AppMainComponent>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
