import { useState } from 'react';
import { Router } from '@reach/router';
import { useMediaQuery } from 'react-responsive';
import { HomePage } from './pages';
import { Footer, Header, SideBar, Warning } from './components';
import { RcLayout, RcSideNav } from './rcomps';

export const App: React.FC = () => {
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  const isNarrow = useMediaQuery({ maxWidth: 600 });

  const warning = <Warning />;

  const header = <Header setShowLeftMenu={setShowLeftMenu} />;

  const footer = <Footer />;

  const sidebar = <SideBar />;

  const leftMenu = (
    <RcSideNav onClose={() => setShowLeftMenu(false)}>
      <SideBar />
    </RcSideNav>
  );

  const main = (
    <Router>
      <HomePage path="/" />
    </Router>
  );

  return (
    <RcLayout
      warning={warning}
      header={header}
      sidebar={sidebar}
      main={main}
      footer={footer}
      leftMenu={leftMenu}
      showSideBar={!isNarrow}
      showLeftMenu={showLeftMenu}
    />
  );
};
