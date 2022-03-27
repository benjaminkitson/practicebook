import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? true : startDate.isSameOrBefore(createdAtMoment, 'day');
    const endDateMatch = endDate ? true : endDate.isSameOrAfter(createdAtMoment, 'day');
    const textDateMatch = expense.title.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textDateMatch;
  }).sort((first, second) => {
    if (sortBy === 'date') {
      return first.createdAt - second.createdAt;
    } else if (sortBy === 'duration') {
      return second.duration - first.duration;
    }
  });
};
