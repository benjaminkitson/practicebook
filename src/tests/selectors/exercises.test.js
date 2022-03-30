import selectExercises from '../../selectors/exercises';
import moment from 'moment';

const exercises = [{
  id: 1,
  title: 'first test',
  description: 'a description',
  createdAt: 0
},
{
  id: 2,
  title: 'second test',
  description: 'c description',
  createdAt: moment(0).subtract(4, 'days')
},
{
  id: 3,
  title: 'third test',
  description: 'b description',
  createdAt: moment(0).add(4, 'days')
}];

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
