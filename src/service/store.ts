import { SimpleStore } from '@cpmech/simple-state';
import { IData } from '../data';
import { downloadJson } from './downloadJson';

// define the state interface
interface IState {
  interface: {
    warningMessage: string;
    showWarning: boolean;
    showHeader: boolean;
    showLeftMenu: boolean;
    showSideBar: boolean;
    route: string;
  };
  data: IData;
}

// define a function to generate a blank state
const newZeroState = (): IState => ({
  interface: {
    warningMessage: '',
    showWarning: false,
    showHeader: true,
    showLeftMenu: false,
    showSideBar: true,
    route: '',
  },
  data: { email: '' },
});

// extend the SimpleStore class; it may have any additional members
class Store extends SimpleStore<IState, null> {
  constructor() {
    super(newZeroState);

    // set ready flag here [important]
    this.ready = true;

    // set current route
    this.state.interface.route = window.location.hash;

    // listen for route changes
    window.addEventListener(
      'hashchange',
      () => {
        const newRoute = window.location.hash;
        if (newRoute !== this.state.interface.route) {
          this.notifyBeginReady();
          this.state.interface.route = newRoute;
          this.notifyEndReady();
        }
      },
      false,
    );
  }

  setRoute = (route: string) => {
    if (route !== this.state.interface.route) {
      window.location.hash = route;
    }
  };

  setShowWarning = (value: boolean, message = 'WARNING') => {
    this.notifyBeginStart();
    this.state.interface.showWarning = value;
    this.state.interface.warningMessage = message;
    this.notifyEndStart();
  };

  setShowHeader = (value: boolean) => {
    this.notifyBeginStart();
    this.state.interface.showHeader = value;
    this.notifyEndStart();
  };

  setShowLeftMenu = (value: boolean) => {
    this.notifyBeginStart();
    this.state.interface.showLeftMenu = value;
    this.notifyEndStart();
  };

  setShowSideBar = (value: boolean) => {
    this.notifyBeginStart();
    this.state.interface.showSideBar = value;
    this.notifyEndStart();
  };

  loadTopic = async (id: string, forceReload = true) => {
    this.notifyBeginStart();
    console.log('loadTopic: TODO');
    this.notifyEndStart();
  };

  downloadJson = async () => {
    this.notifyBeginStart();
    downloadJson(this.state.data, `my-data`);
    this.notifyEndStart();
  };
}

// instantiate store
export const store = new Store();
