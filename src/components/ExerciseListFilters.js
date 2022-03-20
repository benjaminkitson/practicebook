import React from 'react';
import { connect } from 'react-redux';

const ExerciseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text}/>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExerciseListFilters);
