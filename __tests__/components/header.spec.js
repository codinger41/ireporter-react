import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Header from '../../src/components/header';

describe('Stats component', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    recordsReducer: {
      records: []
    },
    authReducer: {
      isLoggedIn: true,
      user: {
        isadmin: true
      }
    }
  });
  it('should render without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.find('.navbar').exists()).toBe(true);
  });
});
