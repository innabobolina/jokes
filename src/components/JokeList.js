import React, { Component } from "react";
import { connect } from "react-redux";
import { getJokes, addOneJoke } from "../actions/joke";

class JokeList extends Component {
  // state = {
  //   jokeList: [],
  // };
  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    console.log(this.props);
    const { jokeList, addJoke, addOneJoke } = this.props;
    return (
      <div>
        {this.props.jokeList.map((x) => (
          <p key={x.id}>{x.joke}</p>
        ))}
        <button onClick={() => addOneJoke()}>Add 1 more joke</button>
        {/* <button onClick={addOneJoke}>Add joke</button> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state.joke);
  return { jokeList: state.joke };
};

const mapDispatch = { getJokes, addOneJoke };
export default connect(mapStateToProps, mapDispatch)(JokeList);
