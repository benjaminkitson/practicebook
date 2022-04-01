import selectExercises from '../../selectors/exercises';
import moment from 'moment';
import exercises from '../fixtures/exercises';

test('should filter by text value', () => {
  const filters = {
    text: 'first',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExercises(exercises, filters);
  expect(result).toEqual([exercises[0]]);
});

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExercises(exercises, filters);
  expect(result).toEqual([exercises[0], exercises[2]]);
});

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };
  const result = selectExercises(exercises, filters);
  expect(result).toEqual([exercises[1], exercises[0]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExercises(exercises, filters);
  expect(result).toEqual([exercises[1], exercises[0], exercises[2]]);
});

test('should sort by duration', () => {
  const filters = {
    text: '',
    sortBy: 'duration',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExercises(exercises, filters);
  expect(result).toEqual([exercises[0], exercises[2], exercises[1]]);
});
