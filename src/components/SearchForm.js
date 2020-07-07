import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
    // console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm);
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={(e) => this.handleChange(e)}
        ></input>{" "}
        <button> Submit </button>{" "}
      </form>
    );
  }
}

export default SearchForm;
