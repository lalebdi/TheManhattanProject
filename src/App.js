import React from 'react';
import Login from './Views/Pages/Login/Login';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './Views/Sidebar/SideBar.jsx';
import ViewBugs from './Views/Pages/ViewBugs.jsx';
import BugForm from './Views/Components/Bug Create and Edit/BugForm';
import Dashboard from './Views/Pages/Dashboard/Dashboard';


function App() {
  const { auth } = useSelector(state => state) // to define the login status
  return (
    <Router>
      { !auth.LoggedIn ? <Login /> :
      <>
      <SideBar />
      <Switch>
      <Route exact path="/"><Dashboard /></Route>
        <Route path="/viewbugs"><ViewBugs /></Route>
        <Route path="/create"> 
        <div className="page-container">
        <BugForm title="Create Bug" />
        </div>
        </Route>
      </Switch>
      
      </>
      }
    </Router>
  );
}

export default App;
