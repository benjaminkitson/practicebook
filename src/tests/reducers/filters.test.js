import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_DURATION'});
  expect(state.sortBy).toBe('duration');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'duration',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const action = { type: 'TEXT_FILTER', text: 'hello' };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('hello');
});


test('should set start date filter', () => {
  const action = { type: 'START_DATE_FILTER', date: moment(50) };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(moment(50));
});

test('should set end date filter', () => {
  const action = { type: 'END_DATE_FILTER', date: moment(50) };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(moment(50));
});
