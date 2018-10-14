import React, { Fragment } from 'react';

export default ({clickHandler, number}) => (
  <Fragment>
    <button onClick={clickHandler}>Click me!</button>
        You clicked me {number} times
  </Fragment>
);
