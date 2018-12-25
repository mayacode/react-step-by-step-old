import React from 'react';

import MyButton from './Main/container';
import BookContainer from './BookContainer';

const Main = () => (
  <div>
    Hello World!
    <MyButton />
    <hr />
    <BookContainer />
  </div>
);

Main.displayName = 'Main';

export default Main;
