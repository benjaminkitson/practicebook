import React from 'react';
import { connect } from 'react-redux';
import { addExercise } from '../actions/exercises';
import ExerciseForm from './ExerciseForm';
import { useNavigate } from 'react-router-dom';

const CreateExercise = (props) => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Create Exercise</h1>
      <ExerciseForm
        onSubmit={(exercise) => {
          props.dispatch(addExercise(exercise));
          console.log(props);
          navigate('/');
        }}
      />
    </div>
  );

};

export default connect()(CreateExercise);
