import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'; // the reason for the combine reducers is because we have multiple reducers (slices)

// Reducers:
import authReducer from './Controllers/Redux/authSlice';
import bugReducer from './Controllers/Redux/bugSlice';
import userReducer from './Controllers/Redux/UserSlice';

// Redux configure
const reducer = combineReducers({
  auth: authReducer,
  bugs: bugReducer,
  user: userReducer
})

// after combining the the reducers I need to configure the store
const store = configureStore({
  reducer  // ES6 dont need to do reducer : reducer since they are the same name.
})

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
