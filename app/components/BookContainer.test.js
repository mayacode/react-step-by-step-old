import React from 'react';
import { shallow } from 'enzyme';

import { mockFetch } from '../../config/tools';
import BookContainer, { googleBooksSearchAPI } from './BookContainer';
import BookSearch from './BookSearch';
import BookList from './BookList';

const bookListObj = [
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

describe('<BookContainer />', () => {
  let wrapper;
  let bookSearch;
  let bookList;
  let keyword;
  let books;

  beforeAll(() => {
    wrapper = shallow(<BookContainer />);
    bookSearch = wrapper.find(BookSearch);
    bookList = wrapper.find(BookList);
    keyword = wrapper.state().keyword;
    books = wrapper.state().books;
  });

  it('matches a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('state.keyword is an empty string by default', () => {
    expect(keyword).toEqual('');
  });

  it('state.books is an empty array by default', () => {
    expect(books).toEqual([]);
  });

  describe('child component <BookSearch />', () => {
    it('is only 1', () => {
      expect(bookSearch.exists()).toBe(true);
    });

    it('changing input value updates the state.keyword', () => {
      const input = bookSearch.shallow().find('input');
      input.simulate('change', { target: { value: 'd' }});
      expect(wrapper.state().keyword).toEqual('d');
    });
  });

  describe('child component <BookList />', () => {
    it('is only 1', () => {
      expect(bookList.exists()).toBe(true);
    });
  });

  it('getBooks is NOT called if keyword doesn\'t meet requirements', () => {
    const spy = jest.spyOn(wrapper.instance(), 'getBooks');
    wrapper.update();
    wrapper.setState({ keyword: 'du' });
    expect(spy).not.toBeCalled();
    spy.mockRestore();
  });

  it('getBooks is called after keyword meets requirements', () => {
    const spy = jest.spyOn(wrapper.instance(), 'getBooks');
    wrapper.update();
    wrapper.setState({ keyword: 'dun' });
    expect(spy).toBeCalled();
    spy.mockRestore();
  });

  it('if there are books should be added to the state', () => {
    wrapper.instance().updateBooks(bookListObj);
    expect(wrapper.state('books')).toBe(bookListObj);
  });
});

describe('<BookContainer /> fetches', () => {
  it('getBooks works', async () => {
    const wrapper = shallow(<BookContainer />);
    const mockData = { items: bookListObj };
    const keyword = 'dun';
    global.fetch = mockFetch(mockData);

    await wrapper.instance().getBooks(keyword);
    expect(wrapper.state().books).toEqual(bookListObj);
  });
});
