import React, { Fragment } from 'react';
import { func, number } from 'prop-types';

const MyButton = ({clickHandler, clicks}) => (
  <Fragment>
    <button onClick={clickHandler}>Click me!</button>
    You clicked me {clicks} times
  </Fragment>
);

MyButton.displayName = 'MyButton';
MyButton.propTypes = {
  clickHandler: func.isRequired,
  clicks: number.isRequired,
};

export default MyButton;
