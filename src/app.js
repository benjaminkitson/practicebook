import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.scss';

const app = document.getElementById('app');

const Dashboard = () => (<div>Le dashboard</div>);

const routes = (
  <BrowserRouter>
    <Route path="/" component={Dashboard}/>
  </BrowserRouter>
);

ReactDOM.render(routes, app);
