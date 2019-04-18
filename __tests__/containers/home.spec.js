import React from 'react';
import { mount } from 'enzyme';
import Home from '../../src/containers/home';

describe('Home component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Home />);

    expect(wrapper.find('.boxes').exists()).toBe(true);
  });
});
