import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    value: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
        ></input>{" "}
        <button> Submit </button>{" "}
      </form>
    );
  }
}

export default SearchForm;
