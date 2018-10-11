import React from 'react';
import { shallow } from 'enzyme';

import BookList from './BookList';

describe('<BookList />', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<BookList books={[]} />);
        expect(wrapper).toMatchSnapshot();
    });
});