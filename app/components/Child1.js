import React from 'react';

import GrandChild1 from './GrandChild1';

const Child1 = () => (
  <div>
    Child1
    <GrandChild1 />
  </div>
);

Child1.displayName = 'Child1';

export default Child1;
