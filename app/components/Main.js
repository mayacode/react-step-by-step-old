import React from 'react';

import MyButton from './MyButton/container';
import BookContainer from './BookContainer';
import Child1 from './Child1';

export const MainContext = React.createContext();

const testContextValue = {
  a: 'letter a',
  b: true,
  c: 10
};

const Main = () => (
  <div>
    Hello World!
    <MyButton />
    <hr />
    <BookContainer />
    <hr />
    <MainContext.Provider value={testContextValue}>
      <Child1 />
    </MainContext.Provider>
  </div>
);

Main.displayName = 'Main';

export default Main;
