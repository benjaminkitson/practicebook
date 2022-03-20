export const setTextFilter = (text) => ({
  type: 'TEXT_FILTER',
  text
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

export const sortByDuration = () => ({
  type: 'SORT_BY_DURATION',
});

export const startDateFilter = (date) => ({
  type: 'START_DATE_FILTER',
  date
});

export const endDateFilter = (date) => ({
  type: 'END_DATE_FILTER',
  date
});
