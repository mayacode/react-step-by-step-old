import React, { Fragment } from 'react';

const BookSearch = ({ changeHandler }) => (
  <Fragment>
    <input
      type="text"
      placeholder="Put title or author"
      onChange={changeHandler}
    />
    <button>Search!</button>
  </Fragment>
);

BookSearch.displayName = 'BookSearch';

export default BookSearch;
