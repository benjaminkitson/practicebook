import moment from 'moment';

const exercises = [{
  id: 1,
  title: 'first test',
  description: 'a description',
  duration: 50,
  createdAt: 0
},
{
  id: 2,
  title: 'second test',
  description: 'c description',
  duration: 10,
  createdAt: moment(0).subtract(4, 'days')
},
{
  id: 3,
  title: 'third test',
  description: 'b description',
  duration: 30,
  createdAt: moment(0).add(4, 'days')
}];

export default exercises;
