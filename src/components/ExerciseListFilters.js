import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByDuration, startDateFilter, endDateFilter } from '../actions/filters';

class ExerciseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(startDateFilter(startDate));
    this.props.dispatch(endDateFilter(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(e) => {
          this.props.dispatch(setTextFilter(e.target.value));
        }} />
        <select
          value={this.props.filters.sortBy} onChange={(e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "duration") {
              this.props.dispatch(sortByDuration());
            }
          }}>
          <option value="date">Date</option>
          <option value="duration">Duration</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExerciseListFilters);
