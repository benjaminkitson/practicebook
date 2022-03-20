import {createStore, combineReducers} from 'redux';
import exercisesReducer from '../reducers/exercises';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      exercises: exercisesReducer,
      filters: filtersReducer
    })
  );
  return store;
};
