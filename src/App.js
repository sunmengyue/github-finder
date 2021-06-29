import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Search from './components/layouts/Search';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {
  state = {
    loading: false,
    users: [],
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async (userKeyWords) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${userKeyWords}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );
    console.log(res.data);
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
