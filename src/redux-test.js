import { createStore } from 'redux';

const store = createStore((state = { count : 0 }, action) => {
  switch (action.type) {
  case 'INCREASE': {
    const increaseBy = typeof action.increaseBy === 'number' ? action.increaseBy : 1;
    return {count: state.count + increaseBy};
  }
  case 'DECREASE': {
    const decreaseBy = typeof action.decreaseBy === 'number' ? action.decreaseBy : 1;
    return { count: state.count - decreaseBy };
  }
  case 'SET': {
    if (typeof action.set === 'number') {
      return { count: state.count = action.set };
    } else {
      return state;
    }
  }
  case 'RESET': {
    return { count: state.count = 0 };
  }
  default:
    return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

const increaseCount = ({ increaseBy } = {}) => ({
  type: "INCREASE",
  increaseBy
});

const decreaseCount = ({ decreaseBy } = {}) => ({
  type: "DECREASE",
  decreaseBy
});

const setCount = ({ set } = {}) => ({
  type: "SET",
  set
});

const resetCount = () => ({
  type: "RESET"
});

store.dispatch(increaseCount({ increaseBy: 5 }));

store.dispatch(decreaseCount({ decreaseBy: 5 }));

store.dispatch(setCount({ set: 10 }));

store.dispatch(resetCount());
