import { MY_BUTTON_CLICKED } from './constants';

export const initialStore = {
  clicks: 0,
};

const myButtonReducer = (store = initialStore, action = {}) => {
  switch (action.type) {
    case MY_BUTTON_CLICKED:
      return { clicks: store.clicks + 1 };
    default:
      return store;
  }
};

export default myButtonReducer;
