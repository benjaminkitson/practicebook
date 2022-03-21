import React from "react";
import { connect } from "react-redux";
import { removeExercise } from "../actions/exercises";

const ExerciseListItem = ({dispatch, id, title, description, duration}) => (
  <div>
    <h4>{title}</h4>
    <h5>{description}</h5>
    <h5>{duration}</h5>
    <button onClick={() => {
      dispatch(removeExercise({ id }));
    }}>Remove</button>
  </div>
);

export default connect()(ExerciseListItem);
