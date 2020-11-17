import { ConnectedRouter , routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React from 'react';
import { applyMiddleware, createStore, compose } from 'redux';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { rootReducer } from './store/rootReducer';
import './css/animate.css';
import './css/baguetteBox.min.css';
import './css/bootstrap.min.css';
import './css/classic.css';
import './css/classic.date.css';
import './css/classic.time.css';
import './css/custom.css';
import './css/responsive.css';
import './css/style.css';

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer(history),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('app')
);
