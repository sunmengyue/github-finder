import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';

class App extends Component {
  foo = () => {
    return 'bar';
  };

  render() {
    const name = 'Jone Doe';
    const showName = false;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
