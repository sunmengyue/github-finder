import React, { useState, Fragment } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Search from './components/layouts/Search';
import Alert from './components/layouts/Alert';
import Users from './components/users/Users';
import User from './components/users/User';
import About from './components/pages/About';
import axios from 'axios';
import GithubState from './context/github/GithubState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState(null);

  const showAlert = (errorMsg, color) => {
    setAlert({ msg: errorMsg, type: color });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => {
                  return (
                    <Fragment>
                      <Search setAlert={showAlert} />
                      <Users />
                    </Fragment>
                  );
                }}
              />
              <Route exact path="/about" component={About} />
              <Route path="/users/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
