import React from 'react';
import { string } from 'prop-types';

const BookListItem = ({ title }) => <div><span>Title:</span> {title}</div>;

BookListItem.displayName = 'BookListItem';
BookListItem.propTypes = {
  title: string,
};

export default BookListItem;
