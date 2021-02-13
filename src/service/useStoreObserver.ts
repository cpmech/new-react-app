import { useState, useEffect } from 'react';
import { store } from './store';

export const useStoreObserver = (observerName: string) => {
  const [data, setData] = useState({
    error: '',
    started: false,
    ready: false,
    showWarning: false,
    showHeader: false,
    showLeftMenu: false,
    showSideBar: false,
    route: '',
  });

  useEffect(() => {
    // flag to prevent calling setData when the component is unmounted
    let finished = false;

    // must set the state right here and right now because the login/signup
    // may have been already configured and we missed the notification
    setData({
      error: store.error,
      started: store.started,
      ready: store.ready,
      showWarning: store.state.interface.showWarning,
      showHeader: store.state.interface.showHeader,
      showLeftMenu: store.state.interface.showLeftMenu,
      showSideBar: store.state.interface.showSideBar,
      route: store.state.interface.route,
    });

    // now we can listen to further notifications, if any
    const unsubscribe = store.subscribe(() => {
      if (!finished) {
        setData({
          error: store.error,
          started: store.started,
          ready: store.ready,
          showWarning: store.state.interface.showWarning,
          showHeader: store.state.interface.showHeader,
          showLeftMenu: store.state.interface.showLeftMenu,
          showSideBar: store.state.interface.showSideBar,
          route: store.state.interface.route,
        });
      }
    }, observerName);

    // return clean-up function
    return () => {
      finished = true;
      unsubscribe();
    };

    // note dependencies
  }, [observerName]);

  return data;
};
