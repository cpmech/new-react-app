import { useState } from 'react';
import { Router } from '@reach/router';
import { useMediaQuery } from 'react-responsive';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ChartsPage, HomePage } from './pages';
import { Footer, Header, SideBar, Warning } from './components';
import { RcLayout, RcSideNav } from './rcomps';
import { cssHtml } from './cssHtml';

export const App: React.FC = () => {
  const [showWarning, setShowWarning] = useState(true);
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  const isNarrow = useMediaQuery({ maxWidth: 600 });

  const warning = <Warning hide={() => setShowWarning(false)} />;

  const header = <Header show={() => setShowLeftMenu(true)} withMenuButton={isNarrow} />;

  const footer = <Footer />;

  const sidebar = <SideBar onMenu={false} />;

  const leftMenu = (
    <RcSideNav onClose={() => setShowLeftMenu(false)} bgColor="rgba(0,0,0,0.8)" width={180}>
      <SideBar onMenu={true} />
    </RcSideNav>
  );

  const main = (
    <Router>
      <ChartsPage path="/charts" />
      <HomePage path="/" />
    </Router>
  );

  return (
    <HelmetProvider>
      <Helmet>
        <style>{cssHtml(0)}</style>
      </Helmet>
      <RcLayout
        warning={showWarning && warning}
        header={header}
        sidebar={!isNarrow && sidebar}
        main={main}
        footer={footer}
      />
      {isNarrow && showLeftMenu && leftMenu}
    </HelmetProvider>
  );
};
