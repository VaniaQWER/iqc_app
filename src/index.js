import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import HubRoute from './routers';
import './App.css';
ReactDOM.render(  
  <Provider store={store}>
    <HubRoute/> 
  </Provider>, document.getElementById('root'));
