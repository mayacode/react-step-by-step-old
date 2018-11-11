import React from 'react';
import { shallow } from 'enzyme';

import BookSearch from './BookSearch';

describe('<BookSearch />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<BookSearch changeHandler={() => undefined} />);
    expect(wrapper).toMatchSnapshot();
  });
});