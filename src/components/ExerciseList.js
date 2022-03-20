import React from "react";
import { connect } from "react-redux";
import ExerciseListItem from "./ExerciseListItem";
import selectExercises from '../selectors/exercises';

const ExerciseList = (props) => (
  <div>
    <h1>Exercise list!</h1>
    {props.exercises.map((exercise) => <ExerciseListItem key={exercise.id} {...exercise} />)}
  </div>
);

const mapStateToProps = (state) => {
  return {
    exercises: selectExercises(state.exercises, state.filters),
  };
};

export default connect(mapStateToProps)(ExerciseList);
