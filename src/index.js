import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';

var store = createStore(
  appReducers
);
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,


  document.getElementById('root')
);


reportWebVitals();
