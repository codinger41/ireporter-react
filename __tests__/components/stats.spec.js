import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Stats from '../../src/components/dashboard-stats';

describe('Stats component', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    recordsReducer: {
      records: []
    }
  });
  it('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Stats records={[]} />
      </Provider>
    );
    expect(wrapper.find('.row-plain').exists()).toBe(true);
  });
});
