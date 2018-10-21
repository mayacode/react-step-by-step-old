import React from 'react';
import { shallow } from 'enzyme';

import BookList from './BookList';
import BookListItem from './BookListItem';

const bookList = [
  {
    id: '1234qwer',
    volumeInfo: {
      title: 'A Book'
    }
  },
  {
    id: '1235qwer',
    volumeInfo: {
      title: 'A Book 2'
    }
  }
];

describe('<BookList />', () => {
  const wrapper = shallow(<BookList books={bookList} />);

  it('matches a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has 2 BookListItem elements', () => {
    const items = wrapper.find(BookListItem);
    expect(items.length).toEqual(2);
  });
});
