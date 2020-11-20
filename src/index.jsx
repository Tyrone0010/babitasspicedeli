import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import App from './App';
import './css/animate.css';
import './css/baguetteBox.min.css';
import './css/bootstrap.min.css';
import './css/classic.css';
import './css/classic.date.css';
import './css/classic.time.css';
import './css/custom.css';
import './css/responsive.css';
import './css/style.css';

render(
    <Router history={history}>
      <App />
    </Router>
  , document.getElementById('app')
);
