import React from 'react';
import BookListItem from './BookListItem';

const renderBookItems = book => <BookListItem
  key={book.volumeInfo.industryIdentifiers[0].identifier}
  title={book.volumeInfo.title}
/>;

const BookList = ({ books }) => <div>{books.map(renderBookItems)}</div>;

BookList.displayName = 'BookList';

export default BookList;
