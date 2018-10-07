import React, { Fragment } from 'react';

export default ({ changeHandler }) => (
    <Fragment>
        <input
            type="text"
            placeholder="Put title or author"
            onChange={changeHandler}
        />
        <button>Search!</button>
    </Fragment>
)
