import React from 'react';
import { mount } from 'enzyme';
import Spinner from '../../src/components/spinner';

describe('Filter component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Spinner loading />);

    expect(wrapper.find('.lds-ring').exists()).toBe(true);
  });
});
