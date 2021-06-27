import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  foo = () => {
    return 'bar';
  };

  render() {
    const name = 'Jone Doe';
    const showName = false;
    return (
      <div className="App">
        <h1>Hello {this.foo()}</h1>
        <h2>{showName && name}</h2>
      </div>
    );
  }
}

export default App;
