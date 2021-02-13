import { Fragment, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { HomePage } from './pages';
import { Footer, Header, SideBar, Warning } from './components';
import { RcLayout, RcSideNav } from './rcomps';

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

  const main = <HomePage />;

  return (
    <Fragment>
      <RcLayout
        warning={showWarning && warning}
        header={header}
        sidebar={!isNarrow && sidebar}
        main={main}
        footer={footer}
      />
      {isNarrow && showLeftMenu && leftMenu}
    </Fragment>
  );
};
