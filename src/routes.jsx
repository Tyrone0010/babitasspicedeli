import React from 'react';
import { Route, Switch } from 'react-router';
import AboutPage from './pages/About';
import Home from './pages/Home';
import MenuPage from './pages/Menu';

const Routes = (props) => {
  const { children } = props;
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/menu" component={MenuPage} />
      {children}
    </Switch>
  );
};

export default Routes;
