import { v4 as uuid } from 'uuid';

export const addExercise = ({ title = '', description = '', duration = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXERCISE',
  exercise: {
    id: uuid(),
    title,
    description,
    duration,
    createdAt
  }
});

export const removeExercise = ({ id } = {}) => ({
  type: 'REMOVE_EXERCISE',
  id
});

export const editExercise = (id, updates) => ({
  type: 'EDIT_EXERCISE',
  id,
  updates
});
