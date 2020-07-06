import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getJokes,
  addOneJoke,
  addJokes,
  increaseVote,
  decreaseVote,
} from "../actions/joke";
import ClipLoader from "react-spinners/ClipLoader";
import PacmanLoader from "react-spinners/PacmanLoader";

class JokeList extends Component {
  // state = {
  //   jokeQuantity: 0,
  // };
  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    //console.log(this.state.jokeQuantity);
    const {
      jokeList,
      addJoke,
      addOneJoke,
      addJokes,
      loading,
      increaseVote,
      decreaseVote,
    } = this.props;
    return (
      <div>
        <PacmanLoader size={150} color={"#123abc"} loading={loading} />
        {jokeList
          .sort((a, b) => b.score - a.score)
          .map((x, i) => (
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
};
export default connect(mapStateToProps, mapDispatchToProps)(JokeList);
