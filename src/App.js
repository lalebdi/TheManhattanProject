import React from 'react';
import Login from './Views/Login/Login.jsx';
import { useSelector } from 'react-redux'

function App() {
  const { auth } = useSelector(state => state) // to define the login status
  return (
    <>
      { !auth.LoggedIn ? <Login /> :
      <h1>Hello</h1>}
    </>
  );
}

export default App;
