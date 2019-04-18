import 'babel-polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.MutationObserver = class {
  disconnect() {}

  observe() {}

  takeRecords() { return []; }
};
// eslint-disable-next-line func-names
global.document.getSelection = function () {};
