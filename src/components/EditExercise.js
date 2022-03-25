import React from 'react';
import { connect } from 'react-redux';
import ExerciseForm from './ExerciseForm';
import { useNavigate } from 'react-router-dom';
import { editExercise , removeExercise } from '../actions/exercises';
import { useParams } from 'react-router-dom';


const EditExercise = (props) => {

  // This straight up doesn't work, seemingly due to the combined use of hooks and HoCs. Will revisit and fix later once Hooks have been studied.

  const navigate = useNavigate();

  return (

    <div>
      <h4>Editing "{props.exercise.title}"</h4>
      <ExerciseForm
        exercise={props.exercise}
        onSubmit={(exercise) => {
          props.dispatch(editExercise(props.exercise.id, exercise));
          navigate('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExercise({ id: props.exercise.id }));
        navigate('/');
      }}>Remove</button>
    </div>);

};

const mapStateToProps = (state) => {
  const params = useParams();
  return {
    exercise: state.exercises.find((exercise) => {
      return exercise.id === params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExercise);
