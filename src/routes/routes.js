import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import HomePage from '../components/HomePage';
import ItemList from '../components/ItemList';
import UserDetailsContainer from'../containers/UserDetailsContainer';
import AccountDetailsContainer from '../containers/AccountDetailsContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="accounts" component={AccountDetailsContainer} />
    <Route path="user-info" component={UserDetailsContainer} />
    <Route path="about" component={ItemList} />
  </Route>
);

