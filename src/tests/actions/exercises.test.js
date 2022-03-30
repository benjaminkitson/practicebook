import { addExercise, editExercise, removeExercise } from '../../actions/exercises';

test('should set up remove exercise action object', () => {
  const action = removeExercise({ id: '1', title: 'le test' });
  expect(action).toEqual({
    type: 'REMOVE_EXERCISE',
    id: '1'
  });
});

test('should set up edit exercise action object', () => {
  const action = editExercise('1', {title: 'amended title'});
  expect(action).toEqual({
    type: 'EDIT_EXERCISE',
    id: '1',
    updates: {
      title: 'amended title'
    }
  });
});

test('should set up add exercise object with provided values', () => {
  const exerciseData = {
    title: 'test title',
    description: 'test description',
    duration: 10,
    createdAt: 0
  };
  const action = addExercise(exerciseData);
  expect(action).toEqual({
    type: "ADD_EXERCISE",
    exercise: {
      ...exerciseData,
      id: expect.any(String)
    }
  });
});

test('should set up add exercise object with default values', () => {
  const action = addExercise();
  expect(action).toEqual({
    type: "ADD_EXERCISE",
    exercise: {
      title: '',
      description: '',
      duration: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
