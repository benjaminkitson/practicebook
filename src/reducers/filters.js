import moment from 'moment';

const filtersReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
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
    return { ...state, startDate: action.date };
  }
  case ('END_DATE_FILTER'): {
    return { ...state, endDate: action.date };
  }
  default: {
    return state;
  }
  }
};
