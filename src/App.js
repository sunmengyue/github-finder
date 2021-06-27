import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import UserItem from './components/users/UserItem';

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
        <UserItem />
      </div>
    );
  }
}

export default App;
