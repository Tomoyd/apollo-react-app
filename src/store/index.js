import { createStore } from 'redux';

const reducer = (state, action) => {
  return {
    ...state,
    [action['type']]: action.value,
  };
};

const store = createStore(reducer);

export default store;
