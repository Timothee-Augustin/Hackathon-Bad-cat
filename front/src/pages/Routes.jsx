import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import ChatPage from './ChatPage';
import Profile from './Profile';

const route = (path, Component) => <Route exact path={path} component={Component} />;

function Routes() {
  return (
    <Switch>
      {route('/', Home)}
      {route('/login', Login)}
      {route('/chat', ChatPage)}
      {route('/profile', Profile)}
    </Switch>
  );
}

export default Routes;
