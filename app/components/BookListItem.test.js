import React from 'react';
import { shallow } from 'enzyme';

import BookListItem from './BookListItem';

describe('<BookListItem />', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<BookListItem title={'test'} />);
        expect(wrapper).toMatchSnapshot();
    });
});