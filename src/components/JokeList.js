import React, { Component } from "react";
import { connect } from "react-redux";
import { getJokes, addOneJoke, addJokes } from "../actions/joke";
import ClipLoader from "react-spinners/ClipLoader";
import PacmanLoader from "react-spinners/PacmanLoader";

class JokeList extends Component {
  state = {
    jokeQuantity: 0,
  };
  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    console.log(this.props);
    const { jokeList, addJoke, addOneJoke, addJokes, loading } = this.props;
    return (
      <div>
        <PacmanLoader size={150} color={"#123abc"} loading={loading} />
        {jokeList.map((x, i) => (
          <p key={x.id}>
            {i + 1}. {x.joke}
          </p>
        ))}
        <button onClick={() => addOneJoke()}>Add 1 more joke</button>
        {/* <button onClick={addOneJoke}>Add joke</button> */}
        <select onChange={(e) => addJokes(e.target.value)}>
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

const mapDispatch = { getJokes, addOneJoke, addJokes };
export default connect(mapStateToProps, mapDispatch)(JokeList);
