import React from 'react';

export default class ExerciseForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="description" autoFocus />
          <input type="number" placeholder="duration" />
        </form>
      </div>
    );
  }
}
