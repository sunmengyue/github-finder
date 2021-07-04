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
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(null);

  const searchUsers = async (userKeyWords) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${userKeyWords}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const getUser = async (userName) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );
    setUser(res.data);
    setLoading(false);
  };

  const getUserRepos = async (userName) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );
    setRepos(res.data);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

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
                      <Search
                        searchUsers={searchUsers}
                        clearUsers={clearUsers}
                        showClear={users.length > 0 ? true : false}
                        setAlert={showAlert}
                      />
                      <Users users={users} loading={loading} />
                    </Fragment>
                  );
                }}
              />
              <Route exact path="/about" component={About} />
              <Route
                path="/users/:login"
                render={(props) => (
                  <User
                    {...props}
                    user={user}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
