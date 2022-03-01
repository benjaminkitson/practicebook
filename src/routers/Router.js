import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Dashboard = () => (<div>Le dashboard</div>);

const CreateExercise = () => (<div>Create an exercise!</div>);

const EditExercise = () => (<div>Edit an exercise!</div>);

const NotFound = () => (
  <div>
    Error 404!
    <br />
    <Link to='/'>Home</Link>
  </div>
);

const Header = () => (
  <div>
    <NavLink to='/' activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to='/create' activeClassName="is-active" exact={true}>Create</NavLink>
    <NavLink to='/edit' activeClassName="is-active" exact={true}>Edit</NavLink>
  </div>
);

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={CreateExercise} exact={true} />
        <Route path="/edit" component={EditExercise} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
