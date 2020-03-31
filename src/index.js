import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import middleware from './middleware';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
