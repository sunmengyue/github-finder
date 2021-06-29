import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Search from './components/layouts/Search';
import Users from './components/users/Users';
import axios from 'axios';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    loading: false,
    users: [],
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
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

    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
