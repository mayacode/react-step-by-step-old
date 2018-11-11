import React, { Fragment } from 'react';
import { func } from 'prop-types';

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
BookSearch.propTypes = {
  changeHandler: func.isRequired,
};

export default BookSearch;
