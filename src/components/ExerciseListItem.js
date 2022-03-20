import React from "react";
import { connect } from "react-redux";

const ExerciseListItem = ({title, description}) => (
  <div>
    <h4>{title}</h4>
    <h5>{description}</h5>
  </div>
);

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises
  };
};

export default connect(mapStateToProps)(ExerciseListItem);
