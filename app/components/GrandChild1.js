import React from 'react';

import { MainContext } from './Main';

const GrandChild1 = () => (
  <div>
    GrandChild1
    <MainContext.Consumer>
      {ctx => (<div>
        {ctx.a}
      </div>)}
    </MainContext.Consumer>
  </div>
);

GrandChild1.displayName = 'GrandChild1';

export default GrandChild1;
