import React from 'react';
import { Route, Switch } from 'react-router';
import AboutPage from './pages/About';
import Home from './pages/Home';

const Routes = (props) => {
  const { children } = props;
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={AboutPage} />
      {children}
    </Switch>
  );
};

export default Routes;
