const exercisesReducerDefault = [];

export default (state = exercisesReducerDefault, action) => {
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
        return { ...exercise, ...action.updates };
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
