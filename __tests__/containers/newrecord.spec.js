import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import NewRecord from '../../src/containers/new-record';

describe('New record component', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    recordsReducer: {
      records: []
    },
    authReducer: {
      isLoggedIn: false,
      user: {
        isadmin: true
      }
    }
  });
  it('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <NewRecord />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.find('.boxes').exists()).toBe(true);
  });
});
