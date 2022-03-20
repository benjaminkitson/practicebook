const filtersReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

export default (state = filtersReducerDefault, action) => {
  switch (action.type) {
  case ('TEXT_FILTER'): {
    return { ...state, text: action.text };
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
