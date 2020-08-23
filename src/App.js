import React from 'react';
import Login from './Views/Pages/Login/Login';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './Views/Sidebar/SideBar.jsx';
import ViewBugs from './Views/Pages/ViewBugs.jsx';


function App() {
  const { auth } = useSelector(state => state) // to define the login status
  return (
    <Router>
      { !auth.LoggedIn ? <Login /> :
      <>
      <SideBar />
      <Switch>
        <Route path="/viewbugs">
        <ViewBugs />
        </Route>
      </Switch>
      
      </>
      }
    </Router>
  );
}

export default App;
