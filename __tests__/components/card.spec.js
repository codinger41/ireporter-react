import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Card from '../../src/components/card';

describe('Card component', () => {
  it('should render without crashing', () => {
    const record = {
      location: 'lagos',
      comment: 'eruveurveurcousncercd',
      type: 'red-flag'
    };
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
    const wrapper = mount(
      <Provider store={store}>
        <Card record={record} user={{}} />
      </Provider>
    );

    expect(wrapper.find('.card-wrap').exists()).toBe(true);
  });
});
