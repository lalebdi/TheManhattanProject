import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'; // the reason for the combine reducers is because we have multiple reducers (slices)

// Reducers:
import authReducer from './Controllers/Redux/authSlice';
import bugReducer from './Controllers/Redux/bugSlice';
import userReducer from './Controllers/Redux/UserSlice';

// Redux configure
const reducer = combineReducers({
  auth: authReducer,
  bug: bugReducer,
  user: userReducer,
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
