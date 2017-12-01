
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import React from 'react';
import { Router, createHashHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes/routes';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={createHashHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
