import React from "react";
import { Link } from 'react-router-dom';

const ExerciseListItem = ({dispatch, id, title, description, duration}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h4>{title}</h4>
    </Link>
    <h5>{description}</h5>
    <h5>{duration}</h5>
  </div>
);

export default ExerciseListItem;
