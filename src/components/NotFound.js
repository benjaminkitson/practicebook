import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    Error 404!
    <br />
    <Link to='/'>Home</Link>
  </div>
);

export default NotFound;
