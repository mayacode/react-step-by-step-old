import React from 'react';
import { shallow } from 'enzyme';

import MyButton from './MyButton';

describe('<MyButton />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<MyButton clickHandler={() => undefined} number={1} />);
    expect(wrapper).toMatchSnapshot();
  });
});