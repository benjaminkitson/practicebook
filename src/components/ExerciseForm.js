import React from 'react';
import { addExercise } from '../actions/exercises';

export default class ExerciseForm extends React.Component {
  state = {
    title: '',
    duration: ''
  };
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onDurationChange = (e) => {
    const duration = e.target.value;
    if (duration.match(/^\d*/)) {
      this.setState(() => ({ duration }));
    }
  };
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="title" autoFocus value={this.state.title}
            onChange={this.onTitleChange}/>
          <input type="text" placeholder="duration" value={this.state.duration}
            onChange={this.onDurationChange}/>
          <button>Add exercise</button>
        </form>
      </div>
    );
  }
}
