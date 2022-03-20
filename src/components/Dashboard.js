import React from 'react';
import ExerciseList from './ExerciseList';
import ExerciseListFilters from './ExerciseListFilters';

const Dashboard = () => (
  <div>
    <ExerciseListFilters />
    <ExerciseList />
  </div>);

export default Dashboard;
