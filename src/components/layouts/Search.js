import React, { Component } from 'react';

class Search extends Component {
  state = { text: '' };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
  };

  render() {
    const { clearUsers, showClear } = this.props;

    return (
      <>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            name="text"
            type="text"
            placeholder="Search for users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            name="button"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </>
    );
  }
}

export default Search;
