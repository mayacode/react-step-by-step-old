import React, { Fragment } from 'react';
import { func, number } from 'prop-types';

const MyButton = ({clickHandler, number}) => (
  <Fragment>
    <button onClick={clickHandler}>Click me!</button>
    You clicked me {number} times
  </Fragment>
);

MyButton.displayName = 'MyButton';
MyButton.propTypes = {
  clickHandler: func.isRequired,
  number: number.isRequired,
};

export default MyButton;
