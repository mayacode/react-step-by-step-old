import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Main from './components/Main';
import reducers from './reducers';

const store = createStore(reducers);

ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app'));
