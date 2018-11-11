import React from 'react';
import { shape, string, arrayOf } from 'prop-types';

import BookListItem from './BookListItem';

const BookList = ({ books }) => <div>{books.map(book => <BookListItem
  key={book.id}
  title={book.volumeInfo.title}
/>)}</div>;

BookList.displayName = 'BookList';
BookList.propTypes = {
  books: arrayOf(shape({
    volumeInfo: shape({
      title: string,
    }),
    id: string,
  })).isRequired,
};

export default BookList;
