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
class JokeList extends Component {
  state = {
    orderIncrease: findAllByDisplayValue,
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

  render() {
    let {
      jokeList,
      addJoke,
      addOneJoke,
      addJokes,
      loading,
      increaseVote,
      decreaseVote,
      handleSearch,
    } = this.props;

    jokeList = jokeList.sort((a, b) => b.score - a.score);
    if (this.state.orderIncrease) {
      jokeList = jokeList.sort((a, b) => a.score - b.score);
    }
    console.log(this.state);
    return (
      <div>
        <PacmanLoader size={150} color={"magenta"} loading={loading} />

        <SearchForm onSearch={handleSearch} />

        {jokeList.map((x, i) => (
          <div style={{ margin: 10 }} key={x.id}>
            <p key={x.id}>
              {i + 1}. {x.joke}
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
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state.joke);
  return { jokeList: state.joke, loading: state.loading.isLoading };
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
