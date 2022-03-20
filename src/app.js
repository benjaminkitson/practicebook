import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './routers/Router';
import configureStore from './store/configureStore';
import { addExercise, removeExercise, editExercise } from './actions/exercises';
import { setTextFilter, sortByDate, sortByDuration, startDateFilter, endDateFilter } from './actions/filters';
import getVisibleExpenses from './selectors/exercises';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  const visibleExpenses = getVisibleExpenses(state.exercises, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExercise({ title: 'picking', description: 'picking exercise', duration: 60, createdAt: Date.now() }));
store.dispatch(addExercise({ title: 'djont', description: 'le djont', duration: 70, createdAt: Date.now() }));
store.dispatch((sortByDuration()));

console.log(store.getState());

const app = document.getElementById('app');

const jsx = (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(jsx, app);
