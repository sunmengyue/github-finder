import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Alert from './components/layouts/Alert';
import User from './components/users/User';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="/users/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
