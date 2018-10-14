import React from 'react';
import { shape, string, arrayOf } from 'prop-types';

import BookListItem from './BookListItem';

const renderBookItems = book => <BookListItem
  key={book.id}
  title={book.volumeInfo.title}
/>;

const BookList = ({ books }) => <div>{books.map(renderBookItems)}</div>;

BookList.displayName = 'BookList';
BookList.propTypes = {
  books: arrayOf(shape({
    volumeInfo: shape({
      title: string,
    }),
    id: string,
  })),
};

export default BookList;
