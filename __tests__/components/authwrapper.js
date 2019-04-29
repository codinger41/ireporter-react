/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import AuthWrapper from '../../src/components/authWrapper';

describe('AuthWrapper component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AuthWrapper />);
  });

  it('returns component with true logged in prop', () => {
    const wrapper = shallow(<AuthWrapper Component auth />);
  });
});
