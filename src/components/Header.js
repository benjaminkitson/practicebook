import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <NavLink to='/' className={(navData) => navData.isActive ? "is-active" : "" }>Home</NavLink>
    <NavLink to='/create' className={(navData) => navData.isActive ? "is-active" : "" }>Create</NavLink>
    <NavLink to='/edit' className={(navData) => navData.isActive ? "is-active" : "" }>Edit</NavLink>
  </div>
);

export default Header;
