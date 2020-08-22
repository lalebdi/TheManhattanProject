import React from 'react';
import Login from './Views/Login/Login.jsx';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './Views/Sidebar/SideBar.jsx';

function App() {
  const { auth } = useSelector(state => state) // to define the login status
  return (
    <Router>
      { !auth.LoggedIn ? <Login /> :
      <>
      <SideBar />
      </>
      }
    </Router>
  );
}

export default App;
