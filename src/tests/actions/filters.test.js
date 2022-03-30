import { setTextFilter, sortByDate, sortByDuration, startDateFilter, endDateFilter } from "../../actions/filters";
import moment from 'moment';

test('should generate start date filter action object', () => {
  const action = startDateFilter(moment(0));
  expect(action).toEqual({
    type: 'START_DATE_FILTER',
    date: moment(0)
  });
});

test('should generate end date filter action object', () => {
  const action = endDateFilter(moment(0));
  expect(action).toEqual({
    type: 'END_DATE_FILTER',
    date: moment(0)
  });
});

test('should generate the text filter action', () => {
  const action = setTextFilter('text');
  expect(action).toEqual({
    type: 'TEXT_FILTER',
    text: 'text'
  });
});

test('should generate the action to reset the text filter', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'TEXT_FILTER',
    text: ''
  });
});

test('should generate the sort by date action', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate the sort by duration action', () => {
  const action = sortByDuration();
  expect(action).toEqual({
    type: 'SORT_BY_DURATION'
  });
});
