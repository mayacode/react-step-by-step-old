import React from 'react';
import { shallow } from 'enzyme';

import MyButton from './MyButton';

describe('<MyButton />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<MyButton clickHandler={() => undefined} clicks={1} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});