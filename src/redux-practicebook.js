import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';

const addExercise = ({title = '', description = '', duration = 0, createdAt = 0} = {}) => ({
  type: 'ADD_EXERCISE',
  exercise: {
    id: uuid(),
    title,
    description,
    duration,
    createdAt
  }
});

const removeExercise = ({ id } = {}) => ({
  type: 'REMOVE_EXERCISE',
  id
});

const editExercise = (id, updates) => ({
  type: 'EDIT_EXERCISE',
  id,
  updates
});

const setTextFilter = (text) => ({
  type: 'TEXT_FILTER',
  text
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

const sortByDuration = () => ({
  type: 'SORT_BY_DATE',
});

const startDateFilter = (date) => ({
  type: 'START_DATE_FILTER',
  date
});

const endDateFilter = (date) => ({
  type: 'END_DATE_FILTER',
  date
});


const exercisesReducerDefault = [];

const exercisesReducer = (state = exercisesReducerDefault, action) => {
  switch (action.type) {
  case ('ADD_EXERCISE'): {
    return state.concat(action.exercise);
  }
  case ('REMOVE_EXERCISE'): {
    return state.filter(({ id }) => id !== action.id);
  }
  case ('EDIT_EXERCISE'): {
    return state.map((exercise) => {
      if (exercise.id === action.id) {
        return {...exercise, ...action.updates};
      } else {
        return exercise;
      }
    });
  }
  default: {
    return state;
  }
  }
};


const filtersReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
  case ('TEXT_FILTER'): {
    return {...state, text: action.text};
  }
  case ('SORT_BY_DATE'): {
    return { ...state, sortBy: 'date' };
  }
  case ('SORT_BY_DURATION'): {
    return { ...state, sortBy: 'duration' };
  }
  case ('START_DATE_FILTER'): {
    return { ...state, date: action.date };
  }
  case ('END_DATE_FILTER'): {
    return { ...state, date: action.date };
  }
  default: {
    return state;
  }
  }
};


const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= startDate;
    const textDateMatch = expense.title.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textDateMatch;
  }).sort((first, second) => {
    if (sortBy === 'date') {
      return first.createdAt - second.createdAt;
    } else if (sortBy === 'amount') {
      return first.duration - second.duration;
    }
  });
};


const store = createStore(
  combineReducers({
    exercises: exercisesReducer,
    filters: filtersReducer
  })
);


store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  const visibleExpenses = getVisibleExpenses(state.exercises, state.filters);
  console.log(visibleExpenses);
});

const exercise = store.dispatch(addExercise({
  title: 'picking',
  duration: 600
}));

store.dispatch(addExercise({ title: 'picking', description: 'picking exercise', duration: 60, createdAt: Date.now() }));

store.dispatch(setTextFilter('pick'));

store.dispatch(editExercise((exercise.exercise.id, { duration: 1200 })));


// const demoState = {
//   exercises: [{
//     id: 'dummy',
//     title: 'picking',
//     description: 'a description of the exercise',
//     duration: 600, // in seconds
//     createdAt: 0
//   }],
//   filters: {
//     text: 'example',
//     sortBy: 'date', // could be anything
//     startDate: undefined,
//     endDate: undefined
//   }
// };
