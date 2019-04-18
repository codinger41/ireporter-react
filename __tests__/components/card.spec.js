import React from 'react';
import { mount } from 'enzyme';
import Card from '../../src/components/card';

describe('Card component', () => {
  it('should render without crashing', () => {
    const record = {
      location: 'lagos',
      comment: 'eruveurveurcousncercd',
      type: 'red-flag'
    };
    const wrapper = mount(<Card record={record} user={{}} />);

    expect(wrapper.find('.card-wrap').exists()).toBe(true);
  });
});
