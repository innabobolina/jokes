import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getJokes,
  addOneJoke,
  addJokes,
  increaseVote,
  decreaseVote,
  handleSearch,
} from "../actions/joke";
import ClipLoader from "react-spinners/ClipLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import { findAllByDisplayValue } from "@testing-library/react";
import SearchForm from "./SearchForm";
import { Pagination } from 'semantic-ui-react'

class JokeList extends Component {
  state = {
    orderIncrease: false,
    activePage: 1,
    searchTerm: ''
  };

  componentDidMount() {
    this.props.getJokes();
  }
  handleReverseJokes = () => {
    this.setState({ orderIncrease: !this.state.orderIncrease });
    // let { jokeList } = this.props;
    // jokeList = jokeList.sort((a, b) => a.score - b.score);
    // return jokeList;
  };

  handlePageChange = async (event, data) => {
    console.log('event', event);
    console.log('data', data.activePage);
    await this.setState({ activePage: data.activePage })
    this.props.handleSearch(this.state.searchTerm, data.activePage)
  }

  handleOnSearch = (searchTerm) => {

    this.setState({ searchTerm })
  }

  render() {
    let {
      jokeList,
      addJoke,
      addOneJoke,
      addJokes,
      loading,
      increaseVote,
      decreaseVote,
      handleSearch, jokeNumber
    } = this.props;

    const { activePage } = this.state;

    jokeList = jokeList.sort((a, b) => b.score - a.score);
    if (this.state.orderIncrease) {
      jokeList = jokeList.sort((a, b) => a.score - b.score);
    }
    // console.log(this.state);
    const limit = 5;
    const jokeIndex = limit * (activePage - 1) + 1

    return (
      <div>
        <PacmanLoader size={150} color={"magenta"} loading={loading} />

        <SearchForm
          onSearch={handleSearch}
          onSearchTerm={this.handleOnSearch} />

        {jokeList.map((x, i) => (
          <div style={{ margin: 10 }} key={x.id}>
            <p key={x.id}>
              {jokeIndex + i}. {x.joke}
              <button
                onClick={() => {
                  increaseVote(x.id);
                }}
              >
                UP
              </button>
              <button
                onClick={() => {
                  decreaseVote(x.id);
                }}
              >
                DOWN
              </button>
              {/* <img src={x.image}></img> */}
              <span>SCORE: {x.score}</span>
            </p>
          </div>
        ))}
        <button onClick={() => addOneJoke()}>Add 1 more joke</button>
        {/* <button onClick={addOneJoke}>Add joke</button> */}
        <select
          onClick={(e) => {
            addJokes(e.target.value);
          }}
        >
          <option value="2">Add 2 jokes</option>
          <option value="5">Add 5 jokes</option>
        </select>
        <button
          onClick={() => {
            this.handleReverseJokes();
          }}
        >
          Reverse the order of jokes
        </button>
        <div>
          <Pagination defaultActivePage={1} totalPages={Math.ceil(jokeNumber / limit)}
            onPageChange={this.handlePageChange}
            activePage={this.state.activePage}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state", state.joke);
  return { jokeList: state.joke, loading: state.loading.isLoading, jokeNumber: state.pagination.totalJokes };
};

const mapDispatchToProps = {
  getJokes,
  addOneJoke,
  addJokes,
  increaseVote,
  decreaseVote,
  handleSearch,
};
export default connect(mapStateToProps, mapDispatchToProps)(JokeList);
