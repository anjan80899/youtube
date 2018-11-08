import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css'; 
import { createStore, applyMiddleware } from 'redux';
import { allReducers } from './reducers';
import { Provider } from 'react-redux';
import thunk from '../node_modules/redux-thunk';

const store=createStore(
    allReducers,
    applyMiddleware(thunk)
);






render(
    <Provider store={store} >
          <App />
    </Provider>
    ,document.getElementById('root'));

