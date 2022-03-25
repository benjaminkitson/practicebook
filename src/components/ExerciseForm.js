import React from 'react';
// import { addExercise } from '../actions/exercises';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import "react-dates/lib/css/_datepicker.css";

export default class ExerciseForm extends React.Component {
  state = {
    title: '',
    duration: '',
    createdAt: moment(),
    calendarFocused: false,
    error: undefined
  };
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onDurationChange = (e) => {
    const duration = e.target.value;
    if (!duration || duration.match(/^\d{1,}/)) {
      this.setState(() => ({ duration }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.duration) {
      this.setState(() => ({ error: 'Please provide title and duration' }));
    } else {
      this.setState(() => ({error: undefined}));
      console.log(this.state.error);
      console.log('submitted');
      this.props.onSubmit({
        title: this.state.title,
        duration: parseInt(this.state.duration),
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="title" autoFocus value={this.state.title}
            onChange={this.onTitleChange}/>
          <input type="text" placeholder="duration" value={this.state.duration}
            onChange={this.onDurationChange}/>
          <SingleDatePicker date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            id="practicebook_datepicker"
            numberOfMonths={1}
            isOutsideRange={() => false}/>
          <button>Add exercise</button>
        </form>
      </div>
    );
  }
}
