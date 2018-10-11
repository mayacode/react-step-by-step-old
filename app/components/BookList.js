import React from 'react';
import BookListItem from './BookListItem';

const renderBookItems = book => <BookListItem
    key={book.volumeInfo.industryIdentifiers[0].identifier}
    title={book.volumeInfo.title}
/>;

export default ({ books }) => <div>{books.map(renderBookItems)}</div>;
