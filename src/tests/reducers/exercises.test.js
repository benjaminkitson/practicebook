import moment from 'moment';
import exercises from '../fixtures/exercises';
import exercisesReducer from '../../reducers/exercises';


test('should set default state', () => {
  const state = exercisesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove an exercise by id', () => {
  const action = { type: 'REMOVE_EXERCISE', id: 1 };
  const state = exercisesReducer(exercises, action);
  expect(state).toEqual([exercises[1], exercises[2]]);
});

test('should not remove an exercise if id does not exist', () => {
  const action = { type: 'REMOVE_EXERCISE', id: 4 };
  const state = exercisesReducer(exercises, action);
  expect(state).toEqual(exercises);
});

test('should add a new exercise', () => {
  const exercise = {
    id: 4,
    title: 'fourth test',
    description: 'd description',
    duration: 90,
    createdAt: 0
  };
  const action = { type: 'ADD_EXERCISE', exercise };
  const state = exercisesReducer(exercises, action);
  expect(state).toEqual([...exercises, exercise]);
});

test('should edit an existing exercise', () => {
  const updates = {
    title: 'updated test',
  };
  const id = 3;
  const action = { type: 'EDIT_EXERCISE', id, updates };
  const state = exercisesReducer(exercises, action);
  expect(state[2]).toEqual({
    id: 3,
    title: 'updated test',
    description: 'b description',
    duration: 30,
    createdAt: moment(0).add(4, 'days')
  });
});

test('should not edit any exercises when an invalid id is provided', () => {
  const updates = {
    title: 'updated test',
  };
  const id = 4;
  const action = { type: 'EDIT_EXERCISE', id, updates };
  const state = exercisesReducer(exercises, action);
  expect(state).toEqual(exercises);
});
