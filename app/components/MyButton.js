import React, { Fragment } from 'react';

const MyButton = ({clickHandler, number}) => (
  <Fragment>
    <button onClick={clickHandler}>Click me!</button>
    You clicked me {number} times
  </Fragment>
);

MyButton.displayName = 'MyButton';

export default MyButton;
