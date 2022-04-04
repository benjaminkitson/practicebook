import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './routers/Router';
import configureStore from './store/configureStore';
import './styles/styles.scss';

const store = configureStore();

const app = document.getElementById('app');

const jsx = (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(jsx, app);
