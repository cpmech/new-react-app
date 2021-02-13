import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Footer, Header, SideBar, Warning } from './layout';
import { rcConfig, RcLayout, RcSideNav } from './rcomps';
import { Router } from './pages';
import { styles } from './styles';
import { store, useStoreObserver } from './service';

rcConfig.media.desktop.maxPageWidth = styles.dims.maxPageWidth;

export const App: React.FC = () => {
  const { showWarning, showHeader, showLeftMenu, showSideBar } = useStoreObserver('App');
  const isNarrow = useMediaQuery({ maxWidth: rcConfig.media.phone.maxWidth });

  const warning = <Warning />;

  const header = <Header withMenuButton={isNarrow} />;

  const footer = <Footer />;

  const sidebar = <SideBar onMenu={false} />;

  const leftMenu = (
    <RcSideNav
      onClose={() => store.setShowLeftMenu(false)}
      bgColor={styles.colors.transparent(0.8)}
      width={styles.dims.leftMenu.width}
    >
      <SideBar onMenu={true} />
    </RcSideNav>
  );

  const main = <Router />;

  return (
    <Fragment>
      <RcLayout
        warning={showWarning && warning}
        header={showHeader && header}
        sidebar={!isNarrow && showSideBar && sidebar}
        main={main}
        footer={footer}
        maxContentWidth={`${styles.dims.maxPageWidth}px`}
      />
      {isNarrow && showLeftMenu && leftMenu}
    </Fragment>
  );
};
