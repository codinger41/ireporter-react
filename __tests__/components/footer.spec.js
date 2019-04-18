import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../src/components/footer';

describe('Footer component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper.find('.footer').exists()).toBe(true);
  });
});
