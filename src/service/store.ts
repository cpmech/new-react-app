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

// define a callback function to load state data
const onLoad = async (_: string): Promise<IState> => {
  throw new Error('TODO');
};

// extend the SimpleStore class; it may have any additional members
class Store extends SimpleStore<IState, null> {
  constructor() {
    super(newZeroState, onLoad);

    this.state.interface.route = window.location.hash;

    // listen for route changes
    window.addEventListener(
      'hashchange',
      () => {
        const newRoute = window.location.hash;
        if (newRoute !== this.state.interface.route) {
          this.begin();
          this.state.interface.route = newRoute;
          this.end();
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
    this.begin();
    this.state.interface.showWarning = value;
    this.state.interface.warningMessage = message;
    this.end();
  };

  setShowHeader = (value: boolean) => {
    this.begin();
    this.state.interface.showHeader = value;
    this.end();
  };

  setShowLeftMenu = (value: boolean) => {
    this.begin();
    this.state.interface.showLeftMenu = value;
    this.end();
  };

  setShowSideBar = (value: boolean) => {
    this.begin();
    this.state.interface.showSideBar = value;
    this.end();
  };

  loadTopic = async (id: string, forceReload = true) => {
    this.begin();
    console.log('loadTopic: TODO');
    this.end();
  };

  downloadJson = async () => {
    this.begin();
    downloadJson(this.state.data, `my-data`);
    this.end();
  };
}

// instantiate store
export const store = new Store();
