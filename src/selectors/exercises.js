export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= startDate;
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
