const initialStore = {
  clicks: 0,
};

const myButtonReducer = (store = initialStore, action = {}) => {
  switch (action.type) {
    case 'CLICKED':
      return { clicks: store.clicks + 1 };
    default:
      return store;
  }
};

export default myButtonReducer;
