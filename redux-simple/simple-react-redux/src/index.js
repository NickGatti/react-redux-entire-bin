import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'

const newStore = store()
console.log('initial state', newStore.getState())

ReactDOM.render(
  <Provider store={newStore}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);
