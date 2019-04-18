import React from 'react';
import { mount } from 'enzyme';
import Filter from '../../src/components/dashboard-filter';

describe('Filter component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Filter />);

    expect(wrapper.find('.filter-row').exists()).toBe(true);
  });
});
